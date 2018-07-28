import * as React from 'react';
import { Grid, AppBar, IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { Route, Switch, Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { css } from 'emotion';

import { textCenter } from '../shared/emotion/emotion';
import { AppDrawer } from '../drawer/AppDrawer';
import { NewQuiz } from '../new-quiz-form/NewQuiz';

const titleStyle = css`
  :hover {
    cursor: pointer;
  }
`;

interface Istate {
  open: boolean;
  loggedIn: boolean;
}

export class QuizMainComponent extends React.Component<RouteComponentProps<{}>, Istate> {
  public state: Istate = {
    open: false,
    loggedIn: false,
  };

  public render() {
    const { loggedIn, open } = this.state;

    return (
      <div>
        <AppDrawer
          open={open}
          loggedIn={loggedIn}
          toggleDrawer={this.toggleDrawer}
          toggleLogin={this.toggleLogin}
        />
        <AppBar
          style={{ backgroundColor: '#262626', color: '#cccccc' }}
          color="inherit"
          position="sticky"
          className={textCenter}
        >
          <Grid container>
            <Grid item xs={1}>
              <IconButton onClick={this.toggleDrawer} style={{ margin: '15px 5px' }} color="inherit">
                <Menu style={{ fontSize: 36 }}/>
              </IconButton>
            </Grid>
            <Grid style={{ paddingRight: '6em' }} item xs={11}>
              <h1 className={titleStyle} onClick={this.routeToHome}>Dompa's quiz maker</h1>
            </Grid>
          </Grid>
        </AppBar>

        <Switch>
          <Route path="/new-quiz" component={NewQuiz}/>
        </Switch>

      </div>
    );
  }

  public routeToHome = () => {
    const { history } = this.props;
    history.push("/");
  }

  public toggleLogin = () => {
    this.setState({ loggedIn: !this.state.loggedIn })
  }

  public toggleDrawer = () => {
    this.setState({ open: !this.state.open })
  }
}

export const QuizMain = withRouter(QuizMainComponent);