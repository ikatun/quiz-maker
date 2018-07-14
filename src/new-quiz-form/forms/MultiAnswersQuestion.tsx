import { Button, FormLabel, Grid, TextField } from '@material-ui/core';
import * as React from 'react';


export class MultiAnswersQuestion extends React.Component {
  public render() {
    return (
      <div>
        <Grid item>
          <FormLabel>Question: {quiz.questions.length + 1}</FormLabel>
        </Grid>
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
        {
          answers.map((answer) => (
            <TextField
              autoComplete="off"
              fullWidth
              label="Answer"
              name="answer"
              defaultValue={answer}
            />
          ))
        }
        <TextField
          autoComplete="off"
          fullWidth
          label="Answer"
          name="answer"
          defaultValue=" "
        />
        <Button onClick={handleMultiAnswerQuestion}>Add Question</Button>
      </div>
    );
  }
}