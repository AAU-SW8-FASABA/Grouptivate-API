import * as v from "valibot";

export enum Metric {
	Duration = "duration",
	Distance = "distance",
	Count = "count",
	Calories = "calories",
}

export const MetricSchema = v.enum(Metric);
