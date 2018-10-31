import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Redux/Containers/AppContainer.container';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { Provider } from 'react-redux';
import rootReducer from './Redux/Reducers/rootReducer'


const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
