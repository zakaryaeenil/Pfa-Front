import {Question} from "./question";
import {Course} from "./course";

export class Devoir {
  id: number;
  name: string;
  questions: Question[];
  course: Course;
}
