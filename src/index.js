import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';


import {createStore,applyMiddleware, compose} from 'redux'
import { Provider } from 'react-redux'
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase'
import { getFirestore, reduxFirestore } from 'redux-firestore'
import thunk from 'redux-thunk';
import getMiddlewares from './Config/middleWares'
import rootReducer from './Store/Reducers/rootReducer'
import firebaseConfig from './Config/firebaseConfig'


// import getMiddlewares from './Config/middlewares'
const store = createStore(rootReducer, 
    compose (
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(firebaseConfig),
        reactReduxFirebase(firebaseConfig, { useFirestoreForProfile: true, attachAuthIsReady: true})));


ReactDOM.render(
    <Provider store = {store}>
    <App/>
    </Provider>
    , document.getElementById('root'));


serviceWorker.unregister();
    