import * as React from 'react';
import { StepLabel, Step, Stepper } from '@material-ui/core';


interface IProps {
  activeStep: number;
  steps: Array<string>;
}

export class Steps extends React.Component<IProps, any> {

  public render() {
    const { activeStep, steps } = this.props;

    return (
      <div>
        <Stepper activeStep={activeStep}>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepLabel>
                {step}
              </StepLabel>
            </Step>
          ))

          }
        </Stepper>
      </div>
    );
  }
}