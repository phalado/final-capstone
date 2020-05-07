import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import rootReducer from './reducers';
import './index.css';

const localStr = localStorage.getItem('localUser');
const localUser = JSON.parse(localStr);
let initialState = {};

if (localUser === null || !localUser.remember) {
  initialState = {
    user: {
      logged: false,
      id: 0,
      name: '',
      email: '',
    },
    instructors: [],
    classes: [],
    signedUsers: [],
    week: 0,
  };
} else if (localUser.remember) {
  initialState = {
    user: {
      logged: true,
      id: localUser.id,
      name: localUser.name,
      email: localUser.email,
    },
    instructors: [],
    classes: [],
    signedUsers: [],
    week: 0,
  };
}

const store = createStore(
  rootReducer,
  initialState,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
