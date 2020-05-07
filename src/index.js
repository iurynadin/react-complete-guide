import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import Assingment4 from './components/Assignment4';

ReactDOM.render(
    <React.Fragment>
        <App appTitle="Person Manager"/>
        <hr/>
        <Assingment4 />
    </React.Fragment>
    , document.getElementById('root')
);
registerServiceWorker();
