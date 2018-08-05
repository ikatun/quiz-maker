import { Button, Grid, TextField } from '@material-ui/core';
import { css } from 'emotion';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { range } from 'lodash';

import { QuizStore } from '../../QuizStore';

interface IProps {
  QuizStore?: QuizStore
}

interface IState {
  numberOfAnswers: number;
}

@inject('QuizStore')
@observer
export class MultiAnswersQuestion extends React.Component<IProps, IState> {
  public state: IState = {
    numberOfAnswers: 1,
  }
  private textInput: HTMLInputElement | null;

  public render() {
    const { QuizStore } = this.props;
    if (!QuizStore) {
      return null;
    }
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
                  className={css`margin-top: 5px !important;`}
                  key={index}
                  autoComplete="off"
                  fullWidth
                  label={`Answer ${a + 1}`}
                  name={`answer${a + 1}`}
                  defaultValue=""
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
    event.preventDefault();

    const answers: Array<string> = [];

    for (let i = 0; i < this.state.numberOfAnswers; i++) {
      const answer = (document.getElementsByName(`answer${i + 1}`)[0] as HTMLInputElement).value;
      if (answer) {
        answers.push(answer);
      }
    }
    this.props.QuizStore!.addQuestion(event.target.question.value, answers);
    this.setState({ numberOfAnswers: 1 });

    event.target.question.value = '';
    event.target.answer1.value = '';
  }
}