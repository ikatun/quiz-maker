import * as React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';


export const HomeView = (props: any) => {
  return (
    <Grid style={{ marginTop: '2em' }} container spacing={8}>
      <Grid item xs={12}>
        <h3
          style={{ textAlign: 'center' }}
        >
          To create a new quiz click<pre/>
          <Link
            to="/new-quiz"
          >
            Here
          </Link>
        </h3>
      </Grid>
    </Grid>
  );
};