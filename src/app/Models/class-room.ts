import {User} from "./user";
import {Course} from "./course";

export class ClassRoom {
  id: number;
  name: string;
  users: User[];
  professors: User[];
  courses: Course[];
  category : number;
  branch : string;
}
