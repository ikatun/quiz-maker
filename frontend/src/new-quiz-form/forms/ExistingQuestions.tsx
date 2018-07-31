import { css } from 'emotion';
import * as React from 'react';
import { Grid, FormLabel, TextField, Button, Paper } from '@material-ui/core'
import {inject, observer} from 'mobx-react';

import { IQuizStore } from '../../QuizStore';

interface IProps {
  QuizStore?: IQuizStore
}
@inject('QuizStore')
@observer
export class ExistingQuestions extends React.Component<IProps> {
  public render() {
    const { QuizStore } = this.props;
    if(!QuizStore) {
      return null;
    }
    const { quiz } = QuizStore;
    console.log('Quiz from existing questions', quiz);
    return (
      <Grid
        container
        justify="space-around"
      >
        {quiz.questions.map((question, index) => (
          <Grid key={index} container item xs={5} justify="center">
            <form style={{ marginTop: '2em', width: '100%' }}>
              <Paper style={{ width: '100%', backgroundColor: 'gainsboro' }}>
                <div className={css`padding: 15px;`}>
                  <Grid item xs={12}>
                    <FormLabel>Question: {question.index}</FormLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      autoComplete="off"
                      label="Question"
                      name="question"
                      defaultValue={question.question}
                    />
                  </Grid>
                  {question.answers.map((answer) => (
                    <Grid key={answer} item xs={12}>
                      <TextField
                        fullWidth
                        autoComplete="off"
                        label="Answer"
                        name="answer"
                        defaultValue={answer}
                      />
                    </Grid>
                  ))
                  }
                  <Button type="submit">Edit Question</Button>
                </div>
              </Paper>
            </form>
          </Grid>
        ))}
      </Grid>
    );
  }
}