/** Types generated for queries found in "db/sql/insertUser.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'InsertUser' parameters type */
export interface IInsertUserParams {
  age?: number | null | void;
  carModel?: string | null | void;
  drivingExperienceYears?: number | null | void;
  name?: string | null | void;
}

/** 'InsertUser' return type */
export interface IInsertUserResult {
  age: number;
  carModel: string;
  createdAt: Date;
  drivingExperienceYears: number;
  id: string;
  name: string;
  updatedAt: Date;
}

/** 'InsertUser' query type */
export interface IInsertUserQuery {
  params: IInsertUserParams;
  result: IInsertUserResult;
}

const insertUserIR: any = {"usedParamSet":{"name":true,"age":true,"carModel":true,"drivingExperienceYears":true},"params":[{"name":"name","required":false,"transform":{"type":"scalar"},"locs":[{"a":103,"b":107}]},{"name":"age","required":false,"transform":{"type":"scalar"},"locs":[{"a":114,"b":117}]},{"name":"carModel","required":false,"transform":{"type":"scalar"},"locs":[{"a":124,"b":132}]},{"name":"drivingExperienceYears","required":false,"transform":{"type":"scalar"},"locs":[{"a":139,"b":161}]}],"statement":"INSERT INTO \"User\"(\n    \"name\",\n    \"age\",\n    \"carModel\",\n    \"drivingExperienceYears\"\n)\nVALUES (\n    :name,\n    :age,\n    :carModel,\n    :drivingExperienceYears    \n)\nRETURNING *"};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO "User"(
 *     "name",
 *     "age",
 *     "carModel",
 *     "drivingExperienceYears"
 * )
 * VALUES (
 *     :name,
 *     :age,
 *     :carModel,
 *     :drivingExperienceYears    
 * )
 * RETURNING *
 * ```
 */
export const insertUser = new PreparedQuery<IInsertUserParams,IInsertUserResult>(insertUserIR);


