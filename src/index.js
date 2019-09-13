import React from 'react';
import ReactDOM from 'react-dom';
import LoadingSpinner from './LoadingSpinner';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <LoadingSpinner width={100} height={100}/>,
    document.getElementById('root')
);

serviceWorker.unregister();
