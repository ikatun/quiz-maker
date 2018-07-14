import { Button, Grid, TextField } from '@material-ui/core';
import * as React from 'react';


export class SingleAnswerQuestion extends React.Component {
  public render() {
    return (
      <div>
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
        <Button onClick={handleSingleAnswerQuestion}>Add Question</Button>
      </div>
    );
  }
}