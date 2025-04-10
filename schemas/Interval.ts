import * as v from "valibot";

export enum Interval {
    Daily = "daily",
    Weekly = "weekly",
    Monthly = "monthly",
}
  
export const IntervalSchema = v.enum(Interval);
