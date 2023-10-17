import express, { Request, Response } from 'express'
import NodeCache from "node-cache";
import * as dotenv from "dotenv";
import { connectDatabase } from './db/Connection';
import { IInsertUserResult } from './db/sql/insertUser.queries';
import { userService } from './services/User.service';
import { determineInsuranceEchelon } from "./utils/determineInsuranceEchelon";
import { quoteService } from './services/Quotes.service';

interface RelevantQuote {
  provider: string;
  price: number;
}

const myCache = new NodeCache({ stdTTL: 100, checkperiod: 60 });


dotenv.config()

connectDatabase()

const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/api/quotes', async (req: Request, res: Response) => {
  const { name, age, carModel, drivingExperienceYears } = req.body

  let newUser: IInsertUserResult | undefined;

  try {
    newUser = await userService.insertUser({
      name,
      age,
      carModel,
      drivingExperienceYears,
    })
  } catch (error) {
    res.status(500).json({ error: "User insertion failed" })
    return;
  }

  const insuranceEchelon = determineInsuranceEchelon(
    age,
    drivingExperienceYears
  );
  const quoteResponse = await fetch(`http://localhost:3000/quotes`);
  const quotes: any = await quoteResponse.json();
  const relevantQuotes = quotes[insuranceEchelon];
  const insertedQuotesForUser = await Promise.all(
    relevantQuotes.map(async ({ provider, price }: RelevantQuote) => {
      const insertedQuote = await quoteService.insertQuote({
        provider,
        price: price,
        customerId: newUser?.id,
      });
      return insertedQuote;
    })
  );

  res.json(insertedQuotesForUser);

})

app.get("/api/quotes/best-three", async (req: Request, res: Response) => {
  const { userId } = req.query;
  if (!userId) {
    res.status(400).json({ error: "Missing userId parameter" });
    return;
  }
  const cachedBestThree = myCache.get(JSON.stringify(userId));
  if (cachedBestThree) {
    res.status(200).json(cachedBestThree);
    return;
  }
  try {
    //@ts-ignore
    const bestThree = await quoteService.getBestThreeQuotesByUserId(userId);
    myCache.set(JSON.stringify(userId), bestThree);
    res.status(200).json(bestThree);
    return;
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Internal server error" });
    return;
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app

