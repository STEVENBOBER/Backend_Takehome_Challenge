/** Types generated for queries found in "db/sql/getBestThreeQuotesByUserId.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'GetBestThreeQuotesByUserId' parameters type */
export interface IGetBestThreeQuotesByUserIdParams {
  userId?: string | null | void;
}

/** 'GetBestThreeQuotesByUserId' return type */
export interface IGetBestThreeQuotesByUserIdResult {
  createdAt: Date;
  customerId: string;
  id: string;
  price: number;
  provider: string;
  updatedAt: Date;
}

/** 'GetBestThreeQuotesByUserId' query type */
export interface IGetBestThreeQuotesByUserIdQuery {
  params: IGetBestThreeQuotesByUserIdParams;
  result: IGetBestThreeQuotesByUserIdResult;
}

const getBestThreeQuotesByUserIdIR: any = {"usedParamSet":{"userId":true},"params":[{"name":"userId","required":false,"transform":{"type":"scalar"},"locs":[{"a":59,"b":65}]}],"statement":"SELECT\n    *\nFROM\n    \"Quote\" q\nWHERE\n    q.\"customerId\" = :userId\nORDER BY\n    price\nLIMIT\n    3"};

/**
 * Query generated from SQL:
 * ```
 * SELECT
 *     *
 * FROM
 *     "Quote" q
 * WHERE
 *     q."customerId" = :userId
 * ORDER BY
 *     price
 * LIMIT
 *     3
 * ```
 */
export const getBestThreeQuotesByUserId = new PreparedQuery<IGetBestThreeQuotesByUserIdParams,IGetBestThreeQuotesByUserIdResult>(getBestThreeQuotesByUserIdIR);


