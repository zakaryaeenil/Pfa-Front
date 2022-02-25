import {User} from "./user";

export class Event {
  id: number;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  eventUser: User;
}
