import * as React from 'react';
import { Button, Grid } from '@material-ui/core';
import { assign } from 'lodash';

import { textCenter } from '../shared/emotion/emotion';
import { Steps } from './Steps';
import { getSteps } from './helperFunctions';
import { BasicInfoForm } from './forms/BasicInfoForm';
import { QuestionsAndAnswersForm } from './forms/QuestionsAndAnswersForm';
import { FinalStepForm } from './forms/FinalStepForm';
import { Quiz } from './Quiz';

interface IState {
  activeStep: number;
  index: number;
  quiz: Quiz;
  answers: Array<string>;
}

export class NewQuiz extends React.Component<any, IState> {
  public state: IState = {
    activeStep: 0,
    answers: [],
    index: 1,
    quiz: new Quiz(),
  };

  public render() {
    const { activeStep, quiz, answers } = this.state;
    const steps = getSteps();

    return (
      <Grid justify="center" alignItems="center" container spacing={8}>
        <Grid item xs={12}>
          <Steps activeStep={activeStep} steps={steps}/>
        </Grid>
        <Button
          disabled={activeStep === 0}
          style={{ margin: '1em 1em' }}
          variant="contained"
          color="primary"
          onClick={this.handleBack}
        >
          Back
        </Button>
        {activeStep < 2 ?
          <Button
            type="submit"
            style={{ margin: '1em 1em' }}
            variant="contained"
            color="primary"
            onClick={this.handleNext}
          >
            Next
          </Button>
          :
          <Button
            style={{ margin: '1em 1em' }}
            variant="contained"
            color="primary"
            onClick={this.handleSubmit}>
            Finish
          </Button>
        }
        <Grid className={textCenter} item xs={12}>
          {activeStep === 0 &&
          <BasicInfoForm
            quiz={quiz}
            handleQuizName={this.handleQuizName}
            handleQuizClass={this.handleQuizClass}
          />
          }
          {activeStep === 1 &&
          <QuestionsAndAnswersForm
            answers={answers}
            handleMultiAnswerQuestion={this.handleMultiAnswerQuestion}
            handleSingleAnswerQuestion={this.handleSingleAnswerQuestion}
            quiz={quiz}
          />
          }
          {activeStep === 2 && <FinalStepForm/>}
        </Grid>
        <Grid className={textCenter} item xs={12}>
        </Grid>
      </Grid>
    );
  }

  public handleQuizName = (e: any) => {
    e.preventDefault();
    const quiz = assign(this, this.state.quiz);
    quiz.name = e.target.value;

    this.setState({ quiz })
  };
  public handleQuizClass = (e: any) => {
    e.preventDefault();
    const quiz = assign(this, this.state.quiz);
    quiz.class = e.target.value;

    this.setState({ quiz })
  }

  public handleSingleAnswerQuestion = (e: any) => {
    e.preventDefault();
    const { index } = this.state;
    const question = e.target.question.value;
    const answer: string = e.target.answer.value;
    const quiz = assign(this, this.state.quiz);
    const answers: Array<string> = [answer];

    quiz.questions.push({
      question,
      answers,
      index,
    })
    e.target.question.value = '';
    e.target.answer.value = '';
    this.setState({ quiz });
    this.setState({ index: index + 1 });
  }
  public handleMultiAnswerQuestion = (e: any) => {
    e.preventDefault();
  }

  public handleNext = () => {
    const { activeStep } = this.state;
    const lenght = getSteps().length;

    if (activeStep + 1 < lenght) {
      this.setState({ activeStep: activeStep + 1 });
    }
  }

  public handleBack = () => {
    const { activeStep } = this.state;

    if (activeStep > 0) {
      this.setState({ activeStep: activeStep - 1 });
    }
  }

  public handleSubmit = () => {
    //
  }

}
