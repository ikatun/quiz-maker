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
  answers: Array<string>;
  question: string;
}

@inject('QuizStore')
@observer
export class MultiAnswersQuestion extends React.Component<IProps, IState> {
  public state: IState = {
    answers: [''],
    question: '',
  }

  public render() {
    const { QuizStore } = this.props;
    if (!QuizStore) {
      throw new Error('Missing quiz store!');
    }

    const { answers, question } = this.state;
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
              label="Question"
              value={question}
              onChange={event => this.setState({ question: event.target.value })}
            />
          </Grid>
          <Grid container item>
            <Grid item xs={10}>
              {answers.map((answer, index) => (
                <TextField
                  className={css`margin-top: 5px !important;`}
                  key={index}
                  autoComplete="off"
                  fullWidth
                  label={`Answer ${a + 1}`}
                  value={answer}
                  onChange={event => {
                    const answers2 = [...this.state.answers];
                    answers2[index] = event.target.value;
                    this.setState({ answers: answers2 })
                  }
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
    this.setState({ answers: this.state.answers.concat(['']) });
  }
  public focus = () => {
    if (this.textInput) {
      this.textInput.focus();
    }
  }
  public handleSubmit = (event: any) => {
    event.preventDefault();
    const { question, answers } = this.state;
    this.props.QuizStore!.addQuestion(question, answers);
    this.setState({ question: '', answers: [''] });
  }
}
