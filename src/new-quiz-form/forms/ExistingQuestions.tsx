import * as React from 'react';
import {Grid, FormLabel, TextField, Button} from '@material-ui/core'


export class ExistingQuestions extends React.Component {
  public render() {
    return (
      <div>
        {quiz.questions.map((question, index) => (

          <Grid
            style={{ marginBottom: '2em' }}
            key={index}
            container
            justify="center"
            item
            xs={12}
          >
            <form style={{ width: '35%', marginTop: '2em' }}>
              <Grid item>
                <FormLabel>Question: {question.index}</FormLabel>
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  autoComplete="off"
                  label="Question"
                  name="question"
                  defaultValue={question.question}
                />
              </Grid>
              {question.answers.map((answer) => (
                <Grid item>
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
      </div>
    );
  }
}