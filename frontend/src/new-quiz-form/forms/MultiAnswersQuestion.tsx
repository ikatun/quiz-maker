import { Button, FormLabel, Grid, TextField } from '@material-ui/core';
import * as React from 'react';
import { Quiz } from '../Quiz';

interface IProps {
  quiz: Quiz;
  answers: Array<string>;

  handleMultiAnswerQuestion(e: any): void;
}

export class MultiAnswersQuestion extends React.Component<IProps> {

  public render() {
    const { answers, quiz, handleMultiAnswerQuestion } = this.props;
    return (
      <Grid
        container
        justify="center"
      >
        <form onSubmit={handleMultiAnswerQuestion} style={{ width: '35%' }}>
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
              <Grid item>
                <TextField
                  autoComplete="off"
                  fullWidth
                  label="Answer"
                  name="answer"
                  defaultValue={answer}
                />
              </Grid>
            ))
          }
          <Grid container item>
            <Grid item xs={10}>
              <TextField
                autoComplete="off"
                fullWidth
                label="Answer"
                name="answer"
                defaultValue=" "
              />
            </Grid>
            <Grid item xs={2}>
              <Button style={{ marginTop: '12px' }}>Add</Button>
            </Grid>
          </Grid>
          <Grid item>
          </Grid>
          <Button type="submit">Add Question</Button>
        </form>
      </Grid>
    );
  }
  public addAnswer = () => {
    this.setState(prevState => {
      //
    });
  }

}