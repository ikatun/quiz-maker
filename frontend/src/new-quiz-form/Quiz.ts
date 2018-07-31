import { action, computed, observable } from 'mobx';


export class Quiz {
  @observable public name: string;
  @observable public questions:Array<IQuestions>;
  @observable public class: string;

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
