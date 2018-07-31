import { Button, Grid, TextField } from '@material-ui/core';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { IQuizStore } from '../../QuizStore';

interface IProps {
  QuizStore?: IQuizStore
}
interface IState {
  answers:  undefined;
}

@inject('QuizStore')
@observer
export class MultiAnswersQuestion extends React.Component<IProps, IState> {
  public state: IState = {
    answers: undefined,
  }
  private textInput: HTMLInputElement | null;

  public render() {
    const { answers } = this.state;
    const { QuizStore } = this.props;
    if(!QuizStore) {
      return null;
    }
    const { quiz } = QuizStore;
    return (
      <Grid
        container
        justify="center"
      >
        <form onSubmit={this.handleSubmit} style={{ width: '35%' }}>
          <Grid item>
            <TextField
              style={{ color: 'red' }}
              autoComplete="off"
              fullWidth
              autoFocus
              inputRef={(ref) => this.textInput = ref}
              label="Question"
              name="question"
              defaultValue=" "
            />
          </Grid>
          <Grid container item>
            <Grid item xs={10}>
              <TextField
                autoComplete="off"
                fullWidth
                label="Answer"
                name="answer"
                defaultValue=" "
              />
              {

              }
            </Grid>
            <Grid item xs={2}>
              <Button style={{ marginTop: '12px' }}>Add</Button>
            </Grid>
          </Grid>
          <Grid item>
          </Grid>
          <Button onClick={this.focus} type="submit">Add Question</Button>
        </form>
      </Grid>
    );
  }
  public focus = () => {
    if (this.textInput) {
      this.textInput.focus();
    }
  }
  public handleSubmit = () => {
    //
  }

}