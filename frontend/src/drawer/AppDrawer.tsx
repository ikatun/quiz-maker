import { Button, Divider, Drawer, List, ListItem } from '@material-ui/core';
import * as React from 'react';

interface IProps {
  open: boolean;
  loggedIn: boolean;
  toggleDrawer(): void;
  toggleLogin(): void;
}

export class AppDrawer extends React.Component <IProps> {
  public render(){
    const { loggedIn, toggleDrawer, toggleLogin, open } = this.props;

    return (
      <Drawer open={open} onClose={toggleDrawer} anchor="left">
        {!loggedIn ?
          <List>
            <ListItem> <Button onClick={toggleLogin}>Log in</Button> </ListItem>
          </List>
          :
          <div>
            <List>
              <ListItem> <Button>My quizzes</Button> </ListItem>
              <ListItem> <Button>Test</Button> </ListItem>
            </List>
            <Divider/>
            <List>
              <ListItem> <Button onClick={toggleLogin}>Log out</Button> </ListItem>
            </List>
          </div>

        }
      </Drawer>
    );
  }
}