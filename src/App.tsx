import * as React from 'react';
import { Route, Switch } from 'react-router-dom'
import { Login } from './Login/Login';
import { QuizMain } from './Quiz/QuizMain';

class App extends React.Component {
  public render() {
    return (
      <Switch>
        <Route exact={true} path="/" component={Login}/>
        <Route exact={true} path="/quiz-maker" component={QuizMain} />
      </Switch>
    );
  }
}

export default App;
