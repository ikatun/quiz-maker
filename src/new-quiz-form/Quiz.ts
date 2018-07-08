export class Quiz {
  public name: string;
  public questions:Array<IQuestions>;
  public class: string;
}

interface IQuestions {
  question: string;
  answer: string;
}
