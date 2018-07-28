import { Button, Grid, TextField } from '@material-ui/core';
import * as React from 'react';

interface IProps {
  handleSingleAnswerQuestion(e: any): void;
}

export class SingleAnswerQuestion extends React.Component<IProps> {
  private textInput: HTMLInputElement | null;

  public render() {
    const { handleSingleAnswerQuestion } = this.props;
    return (
      <Grid container justify="center">
        <form onSubmit={handleSingleAnswerQuestion} style={{ width: '35%' }}>
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
  public focus = () => {
    if (this.textInput) {
      this.textInput.focus();
    }
  }
}