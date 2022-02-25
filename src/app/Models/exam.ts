import {Document} from "./document";
import {Course} from "./course";

export class Exam {
  id : number;
  name : string;
  documents : Document[];
  courseExam : Course;
  createdAt : Date;
  startDate : Date;
  endDate : Date;
  duration : number;
  isActive : boolean = false;
}
