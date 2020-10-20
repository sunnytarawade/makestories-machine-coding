import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Importing REDUX stuff
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './store/reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootSaga from './store/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware()
// const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
const persistor = persistStore(store)
sagaMiddleware.run(rootSaga)

store.dispatch({ type: "HELLO", name: "MEEEE" })

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
      
    </PersistGate>
  </Provider>
  , document.getElementById('root'));
