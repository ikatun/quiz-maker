import { Button, Grid, TextField } from '@material-ui/core';
import * as React from 'react';

interface IProps {
  handleSingleAnswerQuestion(e: any): void;
}

export class SingleAnswerQuestion extends React.Component<IProps> {
  public render() {
    const { handleSingleAnswerQuestion } = this.props;
    return (
      <Grid container xs={12} justify="center">
        <form onSubmit={handleSingleAnswerQuestion} style={{ width: '35%' }}>
          <Grid item>
            <TextField
              style={{ color: 'red' }}
              autoComplete="off"
              fullWidth
              label="Question"
              name="question"
              defaultValue=" "
            />
          </Grid>
          <Grid item>
            <TextField
              autoComplete="off"
              fullWidth
              label="Answer"
              name="answer"
              defaultValue=" "
            />
          </Grid>
          <Button type="submit">Add Question</Button>
        </form>
      </Grid>
    );
  }
}