import * as React from 'react';
import { Button, Grid } from '@material-ui/core';

import { textCenter } from '../shared/emotion/emotion';
import { Steps } from './Steps';
import { getSteps } from './helperFunctions';
import { BasicInfoForm } from './forms/BasicInfoForm';
import { QuestionsAndAnswersForm } from './forms/QuestionsAndAnswersForm';
import { FinalStepForm } from './forms/FinalStepForm';

interface IState {
  activeStep: number;
}

export class NewQuiz extends React.Component<any, IState> {
  public state: IState = {
    activeStep: 0,
  };

  public render() {
    const { activeStep } = this.state;
    const steps = getSteps();

    return (
      <Grid justify="center" alignItems="center" container spacing={8}>
        <Grid item xs={12}>
          <Steps activeStep={activeStep} steps={steps}/>
        </Grid>
        <Button
          disabled={activeStep === 0}
          style={{ margin: '1em 1em' }}
          variant="contained"
          color="primary"
          onClick={this.handleBack}
        >
          Back
        </Button>
        {activeStep < 2 ?
          <Button
            type="submit"
            style={{ margin: '1em 1em' }}
            variant="contained"
            color="primary"
            onClick={this.handleNext}
          >
            Next
          </Button>
          :
          <Button
            style={{ margin: '1em 1em' }}
            variant="contained"
            color="primary"
            onClick={this.handleSubmit}>
            Finish
          </Button>
        }
        <Grid className={textCenter} item xs={12}>
          {activeStep === 0 &&
          <BasicInfoForm
          />
          }
          {activeStep === 1 &&
          <QuestionsAndAnswersForm
          />
          }
          {activeStep === 2 && <FinalStepForm/>}
        </Grid>
        <Grid className={textCenter} item xs={12}>
        </Grid>
      </Grid>
    );
  }

  public handleNext = () => {
    const { activeStep } = this.state;
    const lenght = getSteps().length;

    if (activeStep + 1 < lenght) {
      this.setState({ activeStep: activeStep + 1 });
    }
  }

  public handleBack = () => {
    const { activeStep } = this.state;

    if (activeStep > 0) {
      this.setState({ activeStep: activeStep - 1 });
    }
  }

  public handleSubmit = () => {
    //
  }

}
