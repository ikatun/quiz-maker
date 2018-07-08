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
  quiz: Quiz;
}

export class NewQuiz extends React.Component<any, IState> {
  public state: IState = {
    activeStep: 0,
    quiz: {
      name: '',
      questions: [],
      class: '',
    }
  };

  public render() {
    const { activeStep, quiz } = this.state;
    const steps = getSteps();

    return (
      <Grid justify="center" alignItems="center" container spacing={8}>
        <Grid item xs={12}>
          <Steps activeStep={activeStep} steps={steps}/>
        </Grid>
        <Grid className={textCenter} item xs={6}>
          {activeStep === 0 &&
          <BasicInfoForm
            quiz={quiz}
            handleQuizName={this.handleQuizName}
            handleQuizClass={this.handleQuizClass}
          />
          }
          {activeStep === 1 && <QuestionsAndAnswersForm handleQuizQuestion={this.handleQuizQuestion} quiz={quiz}/>}
          {activeStep === 2 && <FinalStepForm/>}
        </Grid>
        <Grid className={textCenter} item xs={12}>
          <Button style={{ margin: '1em 1em' }} variant="contained" color="primary" onClick={this.handleBack}>
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

  public handleQuizQuestion = (e: any) => {
    e.preventDefault();
    const question = e.target.question.value;
    const answer = e.target.answer.value;

    const quiz = assign(this, this.state.quiz);
    quiz.questions.push({
      question,
      answer,
    })
    e.target.question.value = '';
    e.target.answer.value = '';
    this.setState({ quiz })
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
