import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';

export default class App extends Component {
  state = { loggedIn: null };

  componentWillMount(){

  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyDiw8IsPsrBMlsC7Z3qOhUCoYStHXM5lL4',
    authDomain: 'demoapp-f12d1.firebaseapp.com',
    databaseURL: 'https://demoapp-f12d1.firebaseio.com',
    projectId: 'demoapp-f12d1',
    storageBucket: 'demoapp-f12d1.appspot.com',
    messagingSenderId: '724501587320'
  };
  firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}


