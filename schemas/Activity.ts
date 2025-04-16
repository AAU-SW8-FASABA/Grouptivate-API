import * as v from "valibot";

export enum OtherActivity {
  ActiveCaloriesBurned = "activeCaloriesBurned",
  FloorsClimbed = "floorsClimbed",
  Steps = "steps",
}

export const OtherActivitySchema = v.enum(OtherActivity);

export enum SportActivity {
  Badminton = "badminton",
  Baseball = "baseball",
  Basketball = "basketball",
  Biking = "biking",
  Boxing = "boxing",
  Cricket = "cricket",
  Dancing = "dancing",
  Elliptical = "elliptical",
  Fencing = "fencing",
  Football = "football",
  FootballAmerican = "footballAmerican",
  FootballAustralian = "footballAustralian",
  Frisbee = "frisbee",
  Golf = "golf",
  Gymnastics = "gymnastics",
  Handball = "handball",
  Hiking = "hiking",
  Hockey = "hockey",
  MartialArts = "martialArts",
  Paddling = "paddling",
  Pilates = "pilates",
  Racquetball = "racquetball",
  RockClimbing = "rockClimbing",
  Rowing = "rowing",
  Rugby = "rugby",
  Running = "running",
  Sailing = "sailing",
  Skating = "skating",
  Skiing = "skiing",
  Snowboarding = "snowboarding",
  Softball = "softball",
  Squash = "squash",
  StairClimbing = "stairclimbing",
  StrengthTraining = "strengthTraining",
  Stretching = "stretching",
  Surfing = "surfing",
  Swimming = "swimming",
  TableTennis = "tableTennis",
  Tennis = "tennis",
  Volleyball = "volleyball",
  Walking = "walking",
  WaterPolo = "waterPolo",
  Weightlifting = "weightlifting",
  Wheelchair = "wheelchair",
  Yoga = "yoga",
}

export const SportActivitySchema = v.enum(SportActivity);
