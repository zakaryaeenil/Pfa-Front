import {User} from "./user";
import {Course} from "./course";

export class Post {
  postId: number;
  title: string;
  description: string;
  nb_documents: number;
  createdAt: Date;
  course: Course;
  comments: Comment[];
  documents: Document[];
  user: User;
}
