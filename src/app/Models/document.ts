import {Byte} from "@angular/compiler/src/util";
import {Post} from "./post";
import {Exam} from "./exam";
import {Comment} from "./comment";

export class Document {
  id  : number  ;
  name : string;
  typeDocument : string;
  uploadDate : Date;
  content : Byte[];
  post : Post;
  exam : Exam;
  comment : Comment;
}
