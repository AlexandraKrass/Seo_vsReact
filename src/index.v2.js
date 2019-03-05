import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import Slimline2 from './Slimline2';
import * as serviceWorker from './serviceWorker';
import reducer from './store/reducer';

const store = createStore(reducer);

const app = (
    <Provider store={store}>
            <Slimline2 />
    </Provider>
)

ReactDOM.render(app, document.getElementById('boot'));
serviceWorker.unregister();
