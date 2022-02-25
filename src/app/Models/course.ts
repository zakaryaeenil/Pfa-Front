import {Devoir} from "./devoir";
import {User} from "./user";
import {Post} from "./post";
import {ClassRoom} from "./class-room";
import {Exam} from "./exam";

export class Course {
  id: number;
  name: string;
  courseCode: string;
  createdAt: string;
  posts: Post[];
  devoirs: Devoir[];
  professor: User;
  classroom: ClassRoom;
  users: User[];
  exam: Exam;
}
