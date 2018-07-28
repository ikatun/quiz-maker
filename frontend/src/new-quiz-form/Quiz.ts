export class Quiz {
  public name: string;
  public questions:Array<IQuestions>;
  public class: string;

  constructor() {
    this.name = '';
    this.questions = [];
    this.class = '';
  }
}

export interface IQuestions {
  index: number;
  question: string;
  answers: Array<string>;
}
