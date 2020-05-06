import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Assingment4 from './Assignment4';

ReactDOM.render(
    <React.Fragment>
        <App />
        <hr/>
        <Assingment4 />
    </React.Fragment>
    , document.getElementById('root')
);
registerServiceWorker();
