import * as React from 'react';
import { Grid, FormLabel, TextField, Button } from '@material-ui/core'
import { Quiz } from '../Quiz';

interface IProps {
  quiz: Quiz;
}

export class ExistingQuestions extends React.Component<IProps> {
  public render() {
    const { quiz } = this.props;
    return (
      <Grid
        container
        justify="center"
      >
        {quiz.questions.map((question, index) => (
          <Grid container item xs={12} justify="center">
            <form key={index} style={{ marginTop: '2em', width: '35%' }}>
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
                <Grid item xs={12}>
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
            </form>
          </Grid>
        ))}
      </Grid>
    );
  }
}