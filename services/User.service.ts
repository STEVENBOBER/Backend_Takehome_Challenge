import { head } from "lodash";
import { client } from '../db/Connection'
import { IInsertUserParams, insertUser } from "../db/sql/insertUser.queries";

export const userService = {
  insertUser: async (params: IInsertUserParams) => {
    try {
      const newUser = head(await insertUser.run(params, client));
      return newUser;
    } catch (error) {
      throw new Error(`User insertion failed: ${JSON.stringify(error)}`);
    }
  },
};