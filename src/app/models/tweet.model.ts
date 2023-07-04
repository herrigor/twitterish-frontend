import { Timestamp } from "rxjs";
import { User } from "./user.model";

export type Tweet = {
  user: User;
  message: string;
  datetime: number;
}
