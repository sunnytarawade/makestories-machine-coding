import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Importing REDUX stuff
import {createStore, applyMiddleware} from 'redux'
import  {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './store/reducers/rootReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
