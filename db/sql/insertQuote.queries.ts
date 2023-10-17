/** Types generated for queries found in "db/sql/insertQuote.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'InsertQuote' parameters type */
export interface IInsertQuoteParams {
  customerId?: string | null | void;
  price?: number | null | void;
  provider?: string | null | void;
}

/** 'InsertQuote' return type */
export interface IInsertQuoteResult {
  createdAt: Date;
  customerId: string;
  id: string;
  price: number;
  provider: string;
  updatedAt: Date;
}

/** 'InsertQuote' query type */
export interface IInsertQuoteQuery {
  params: IInsertQuoteParams;
  result: IInsertQuoteResult;
}

const insertQuoteIR: any = {"usedParamSet":{"provider":true,"price":true,"customerId":true},"params":[{"name":"provider","required":false,"transform":{"type":"scalar"},"locs":[{"a":72,"b":80}]},{"name":"price","required":false,"transform":{"type":"scalar"},"locs":[{"a":83,"b":88}]},{"name":"customerId","required":false,"transform":{"type":"scalar"},"locs":[{"a":91,"b":101}]}],"statement":"INSERT INTO\n    \"Quote\" (\"provider\", \"price\", \"customerId\")\nVALUES\n    (:provider, :price, :customerId) RETURNING *"};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO
 *     "Quote" ("provider", "price", "customerId")
 * VALUES
 *     (:provider, :price, :customerId) RETURNING *
 * ```
 */
export const insertQuote = new PreparedQuery<IInsertQuoteParams,IInsertQuoteResult>(insertQuoteIR);


