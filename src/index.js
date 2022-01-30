import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './features/app/App';
import './index.css'
import {store} from './features/store'
//import bootstrap css from bootstrap package..
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/state';

                    // reducer, initial state, middleware
//const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
    <AppProvider>
    { /* hooking up provider 
    (react component) with App so that any changes 
    in store can be informed to App child components */ }
        <App />
    </AppProvider>
  
    </Provider>,
    document.querySelector("#root")
);