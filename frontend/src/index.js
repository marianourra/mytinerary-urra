import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/reducers/rootReducer.js';
import thunk from 'redux-thunk';
const globalStore = createStore(rootReducer, applyMiddleware(thunk));


ReactDOM.render(
<Provider store={globalStore}>
<App />,
</Provider>,
 document.getElementById('root')
);



