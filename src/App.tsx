import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { Login } from './login/Login';
import { QuizMain } from './quiz-main-view/QuizMain';
import { HomeView } from './quiz-main-view/HomeView';

class App extends React.Component {
  public render() {
    return (
      <div>
        <QuizMain/>
        <Switch>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/" component={HomeView} />
        </Switch>
      </div>
    );
  }
}

export default App;
