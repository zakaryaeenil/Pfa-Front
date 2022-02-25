import {Devoir} from "./devoir";

export class Question {
  id: number;
  name: string;
  reponses: string[];
  reponsesCorrect: string[];
  devoir: Devoir;
}
