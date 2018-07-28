import { Button, Divider, FormLabel, Grid, TextField } from '@material-ui/core';
import * as React from 'react';


import { Quiz } from '../Quiz';
import { SingleAnswerQuestion } from './SingleAnswerQuestion'
import { MultiAnswersQuestion } from './MultiAnswersQuestion';
import { ExistingQuestions } from './ExistingQuestions';

interface IProps {
  quiz: Quiz;
  answers: Array<string>

  handleMultiAnswerQuestion(e: any): void;
  handleSingleAnswerQuestion(e: any): void;
}

interface IState {
  multiAnswers: boolean;
}

export class QuestionsAndAnswersForm extends React.Component <IProps, IState> {
  public state: IState = {
    multiAnswers: true,
  }

  public render() {
    const { quiz, answers, handleSingleAnswerQuestion, handleMultiAnswerQuestion } = this.props;
    const { multiAnswers } = this.state;
    return (
      <Grid justify="center" container>
            {multiAnswers ?
              <MultiAnswersQuestion
                answers={answers}
                quiz={quiz}
                handleMultiAnswerQuestion={handleMultiAnswerQuestion}
              />
              :
              <SingleAnswerQuestion
                handleSingleAnswerQuestion={handleSingleAnswerQuestion}
              />
            }
        <Divider/>
        <ExistingQuestions quiz={quiz}/>
      </Grid>
    );
  }
}