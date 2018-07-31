import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';

import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { quizStore } from './QuizStore';

ReactDOM.render(
  <Provider QuizStore={quizStore}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
