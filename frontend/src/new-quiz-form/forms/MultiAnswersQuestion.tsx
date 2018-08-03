import { Button, Grid, TextField } from '@material-ui/core';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { range } from 'lodash';

import { IQuizStore } from '../../QuizStore';

interface IProps {
  QuizStore?: IQuizStore
}
interface IState {
  answers:  undefined;
  numberOfAnswers: number;
}

@inject('QuizStore')
@observer
export class MultiAnswersQuestion extends React.Component<IProps, IState> {
  public state: IState = {
    answers: undefined,
    numberOfAnswers: 1,
  }
  private textInput: HTMLInputElement | null;

  public render() {
    const { answers } = this.state;
    const { QuizStore } = this.props;
    if(!QuizStore) {
      return null;
    }
    const { quiz } = QuizStore;
    const { numberOfAnswers } = this.state;
    const numberOfInputs = range(0, numberOfAnswers);
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
              {numberOfInputs.map((a, index) => (
                <TextField
                  key={index}
                  autoComplete="off"
                  fullWidth
                  label={`Answer ${a + 1}`}
                  name={`answer${a+1}`}
                  defaultValue=" "
                />
              ))
              }
            </Grid>
            <Grid item xs={2}>
              <Button onClick={this.addAnswerInput} style={{ marginTop: '12px' }}>Add</Button>
            </Grid>
          </Grid>
          <Grid item>
          </Grid>
          <Button onClick={this.focus} type="submit">Add Question</Button>
        </form>
      </Grid>
    );
  }
  public addAnswerInput = () => {
    this.setState({ numberOfAnswers: this.state.numberOfAnswers + 1 })
  }
  public focus = () => {
    if (this.textInput) {
      this.textInput.focus();
    }
  }
  public handleSubmit = (event: any) => {
    //
  }

}