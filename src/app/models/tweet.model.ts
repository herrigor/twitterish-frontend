import { User } from "./user.model";

export type Tweet = {
  id: string;
  user: User;
  message: string;
  datetime: number;
}
