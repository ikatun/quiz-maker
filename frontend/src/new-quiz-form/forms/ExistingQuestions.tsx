import { css } from 'emotion';
import * as React from 'react';
import { Grid, FormLabel, TextField, Button, Paper } from '@material-ui/core'
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
          <Grid key={index} container item xs={12} justify="center">
            <form style={{ marginTop: '2em', width: '35%' }}>
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