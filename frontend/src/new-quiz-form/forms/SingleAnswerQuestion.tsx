import { Button, Grid, TextField } from '@material-ui/core';
import * as React from 'react';
import { inject, observer } from 'mobx-react';

import { IQuizStore } from '../../QuizStore';
import { Quiz } from '../Quiz';

interface IProps {
  QuizStore?: IQuizStore;
}

@inject('QuizStore')
@observer
export class SingleAnswerQuestion extends React.Component<IProps> {
  private textInput: HTMLInputElement | null;

  public render() {
    const { QuizStore } = this.props;
    if (!QuizStore) {
      return null;
    }

    return (
      <Grid container justify="center">
        <form onSubmit={this.handleSubmit} style={{ width: '35%' }}>
          <Grid item>
            <TextField
              style={{ color: 'red' }}
              autoFocus
              inputRef={(ref) => this.textInput = ref}
              autoComplete="off"
              fullWidth
              label="Question"
              name="question"
              required
            />
          </Grid>
          <Grid item>
          </Grid>
          <Grid item>
            <TextField
              autoComplete="off"
              fullWidth
              label="Answer"
              name="answer"
              required
            />
          </Grid>
          <Button onClick={this.focus} type="submit">Add Question</Button>
        </form>
      </Grid>
    );
  }

  public handleSubmit = (event: any) => {
    event.preventDefault();
    const answers = [event.target.answer.value];
    this.props.QuizStore!.addQuestion(event.target.question.value, answers);
    this.props.QuizStore!.quiz.questions.forEach((q) => console.log('asnwers: ', q.answers));
    event.target.question.value = '';
    event.target.answer.value = '';
  }
  public focus = () => {
    if (this.textInput) {
      this.textInput.focus();
    }
  }
}