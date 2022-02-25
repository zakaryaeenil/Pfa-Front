import {User} from "./user";

export class ToDoList {
  id: number;
  description: string;
  title: string;
  createdAt: Date;
  type: string;
  user: User;
}
