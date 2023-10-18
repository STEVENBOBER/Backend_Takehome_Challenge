import { client } from "../db/Connection"
import { head } from "lodash"
import { IInsertQuoteParams, insertQuote } from "../db/sql/insertQuote.queries"
import {
  getBestThreeQuotesByUserId,
} from "../db/sql/getBestThreeQuotesByUserId.queries"




export const quoteService = {
  insertQuote: async (params: IInsertQuoteParams) => {
    const insertedQuote = head(await insertQuote.run(params, client));
    return insertedQuote
  },
  getBestThreeQuotesByUserId: async (
    userId: string
  ) => {
    const bestThreeQuotes = await getBestThreeQuotesByUserId.run(
      { userId },
      client
    );
    return bestThreeQuotes
  }
}