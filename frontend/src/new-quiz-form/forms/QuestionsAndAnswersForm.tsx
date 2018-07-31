import { Divider, Grid } from '@material-ui/core';
import * as React from 'react';
import { observer, inject } from 'mobx-react';

import { IQuizStore } from '../../QuizStore';
import { SingleAnswerQuestion } from './SingleAnswerQuestion'
import { MultiAnswersQuestion } from './MultiAnswersQuestion';
import { ExistingQuestions } from './ExistingQuestions';

interface IProps {
  QuizStore?: IQuizStore
}

interface IState {
  multiAnswers: boolean;
  message: string;
}
@inject('QuizStore')
@observer
export class QuestionsAndAnswersForm extends React.Component <IProps, IState> {
  public state: IState = {
    multiAnswers: true,
    message: '',
  }

  public render() {
    const { QuizStore } = this.props;
    const { multiAnswers } = this.state;
    if(!QuizStore) {
      return null;
    }
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
