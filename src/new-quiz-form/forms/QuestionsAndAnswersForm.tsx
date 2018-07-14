import { Button, Divider, FormLabel, Grid, TextField } from '@material-ui/core';
import * as React from 'react';


import { Quiz } from '../Quiz';
import { SingleAnswerQuestion } from './SingleAnswerQuestion'
import { MultiAnswersQuestion } from './MultiAnswersQuestion';
import { ExistingQuestions } from './ExistingQuestions';

interface IProps {
  quiz: Quiz;
  answers: Array<string>

  handleQuizQuestion(e: any): void;
}

interface IState {
  multiAnswers: boolean;
}

export class QuestionsAndAnswersForm extends React.Component <IProps, IState> {
  public state: IState = {
    multiAnswers: true,
  }

  public render() {
    const { quiz, handleQuizQuestion, answers } = this.props;
    const { multiAnswers } = this.state;
    return (
      <Grid justify="center" container>
        <Grid container justify="center" item xs={12}>
          <form style={{ width: '35%' }}>
            {multiAnswers ?
              <MultiAnswersQuestion/>
              :
              <SingleAnswerQuestion/>
            }
          </form>
        </Grid>

        <Divider/>

        <ExistingQuestions/>
      </Grid>
    );
  }
}