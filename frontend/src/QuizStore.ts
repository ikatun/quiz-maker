import { action, observable } from 'mobx';
import { IQuestions, Quiz } from './new-quiz-form/Quiz';

export class QuizStoreClass {
  @observable public quiz: Quiz = new Quiz();
  @observable public questionIndex: number = 1;

  @action
  public addQuestion(questionName: string, answers: Array<string>) {
    this.quiz.questions.push({
      question: questionName,
      answers,
      index: this.questionIndex,
    })
    this.questionIndex++;
  }
  @action
  public clear() {
    this.quiz.name = '';
    this.quiz.questions = [];
    this.quiz.class = '';
  }
}

export const quizStore = new QuizStoreClass;

export interface IQuizStore {
  test: string;
  quiz: {
    name: string;
    questions: Array<IQuestions>;
    class: string;
  },
  clear(): void;
  addQuestion(questionName: string, answers: Array<string>): void;
}