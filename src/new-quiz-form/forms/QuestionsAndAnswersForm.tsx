import { Button, Divider, Grid, TextField } from '@material-ui/core';
import * as React from 'react';

import { Quiz } from '../Quiz';

interface IProps {
  quiz: Quiz;

  handleQuizQuestion(e: any): void;
}


export class QuestionsAndAnswersForm extends React.Component <IProps, any> {

  public render() {
    const { quiz, handleQuizQuestion } = this.props;
    return (
      <Grid justify="center" container>
        <Grid container justify="center" item xs={12}>
          <form onSubmit={handleQuizQuestion} style={{ width: '60%' }}>

            <Grid item>
              <TextField
                fullWidth
                label="Question"
                name="question"
                defaultValue=" "
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                label="Answer"
                name="answer"
                defaultValue=" "
              />
            </Grid>
            <Button type="submit">Add Question</Button>
          </form>
        </Grid>

        <Divider/>

        {quiz.questions.map((question, index) => (
          <Grid
            style={{ marginBottom: '2em' }}
            key={index}
            container
            justify="center"
            item
            xs={12}
          >
            <form style={{ width: '60%', marginTop: '2em' }}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Question"
                  name="question"
                  defaultValue={question.question}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Answer"
                  name="answer"
                  defaultValue={question.answer}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit">Edit Question</Button>
              </Grid>
            </form>
          </Grid>
        ))}
      </Grid>
    );
  }
}