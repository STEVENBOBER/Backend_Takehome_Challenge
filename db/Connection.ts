import { Client } from "pg";

export const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "postgres",
  database: "postgres",
});

export async function connectDatabase() {
  console.log("Database Connected");
  await client.connect();
}

export async function disconnectDatabase() {
  console.log("Database Disconnected");
  await client.end();
}





// import { Client } from "pg";

// console.log(`Server is pointing at ${process.env.NODE_ENV}`);

// export const client =
//   process.env.NODE_ENV === "development"
//     ? new Client({
//       host: "localhost",
//       user: "postgres",
//       password: "postgres",
//       database: "postgres",
//     })
//     : new Client({
//       connectionString: process.env.DATABASE_URL,
//       ssl: { rejectUnauthorized: false },
//     });

// export async function connectDatabase() {
//   await client.connect();
//   console.log("Database Connected");
// }

// export async function disconnectDatabase() {
//   await client.end();
//   console.log("Database Disconnected");
// }