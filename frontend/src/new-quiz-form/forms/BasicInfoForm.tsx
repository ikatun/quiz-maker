import * as React from 'react';
import { TextField, Grid, MenuItem, Button } from '@material-ui/core';

import { Quiz } from '../Quiz';

interface IProps {
  quiz: Quiz;

  handleQuizName(e: any): void;
  handleQuizClass(e:any): void;
}

export class BasicInfoForm extends React.Component <IProps> {
  public render() {
    const { quiz, handleQuizName, handleQuizClass } = this.props;

    return (
      <Grid justify="center" container>
        <form onSubmit={handleQuizName} style={{ width: '35%' }}>
          <TextField
            fullWidth
            autoComplete="off"
            name="name"
            value={quiz.name}
            onChange={handleQuizName}
            label="Quiz Name"
          />
          <TextField
            autoComplete="off"
            fullWidth
            label="Class"
            name="class"
            select
            value={quiz.class}
            onChange={handleQuizClass}
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
}
