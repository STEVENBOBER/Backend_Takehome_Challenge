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


