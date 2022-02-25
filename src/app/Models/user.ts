import {ToDoList} from "./to-do-list";
import {Event} from "./event";
import {Post} from "./post";
import {Role} from "./role";
import {ClassRoom} from "./class-room";
import {Course} from "./course";

export class User {

  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  telephone : string;
  enabled: boolean;
  roles: Role[];
  courses: Course[];
  ProfCourses: Course[];
  comments: Comment[];
  userClassrooms: ClassRoom[];
  professorClassrooms: ClassRoom[];
  ProfessorPosts: Post[];
  events: Event[];
  toDos: ToDoList[];
  createdAt : Date;
  initials : string
}
