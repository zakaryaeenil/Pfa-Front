import {Post} from "./post";
import {User} from "./user";

export class Comment {
  id: number;
  text: string;
  createdAt: Date;
  post: Post;
  commentUser: User;
}
