import { action, observable } from 'mobx';
import { IQuestions, Quiz } from './new-quiz-form/Quiz';

export class QuizStore {
  @observable public quiz: Quiz = new Quiz();

  @action
  public addQuestion(questionName: string, answers: Array<string>) {
    this.quiz.questions.push({
      question: questionName,
      answers,
    })
  }
  @action
  public clear() {
    this.quiz.name = '';
    this.quiz.questions = [];
    this.quiz.class = '';
  }
}

export const quizStore = new QuizStore;