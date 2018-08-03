import { Divider, Grid } from '@material-ui/core';
import * as React from 'react';
import { observer, inject } from 'mobx-react';

import { SingleAnswerQuestion } from './SingleAnswerQuestion'
import { MultiAnswersQuestion } from './MultiAnswersQuestion';
import { ExistingQuestions } from './ExistingQuestions';

interface IState {
  multiAnswers: boolean;
  message: string;
}
@inject('QuizStore')
@observer
export class QuestionsAndAnswersForm extends React.Component <any, IState> {
  public state: IState = {
    multiAnswers: true,
    message: '',
  }

  public render() {
    const { multiAnswers } = this.state;

    return (
      <Grid
        justify="center"
        container
        id="new-quiz-form-wrapper"
      >
            {multiAnswers ?
              <MultiAnswersQuestion
              />
              :
              <SingleAnswerQuestion
              />
            }
        <Divider/>
        <ExistingQuestions />
      </Grid>
    );
  }
}
