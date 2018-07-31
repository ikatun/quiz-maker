import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { TextField, Grid, MenuItem, Button } from '@material-ui/core';
import { IQuizStore } from '../../QuizStore';


interface IProps {
  QuizStore?: IQuizStore
}

@inject('QuizStore')
@observer
export class BasicInfoForm extends React.Component<IProps> {
  public render() {
    const { QuizStore } = this.props;
    if(!QuizStore) {
      return null;
    }
    const { quiz } = QuizStore;

    return (
      <Grid justify="center" container>
        <form onSubmit={this.handleQuizName} style={{ width: '35%' }}>
          <TextField
            fullWidth
            autoComplete="off"
            name="name"
            value={quiz.name}
            onChange={this.handleQuizName}
            label="Quiz Name"
          />
          <TextField
            autoComplete="off"
            fullWidth
            label="Class"
            name="class"
            select
            value={quiz.class}
            onChange={this.handleQuizClass}
          >
            <MenuItem value="mat2">
              Mat2
            </MenuItem>
            <MenuItem value="fizika">
              Fizika
            </MenuItem>
            <MenuItem>
              <Button style={{ width: '100%' }}>Add new class</Button>
            </MenuItem>
          </TextField>
        </form>
      </Grid>
    );
  }
  public handleQuizName = (e: any) => {
    const { QuizStore } = this.props;
    QuizStore!.quiz.name = e.target.value;
  }
  public handleQuizClass = (e: any) => {
    const { QuizStore } = this.props;
    QuizStore!.quiz.class = e.target.value;
  }

}
