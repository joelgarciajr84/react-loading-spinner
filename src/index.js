import React from 'react';
import ReactDOM from 'react-dom';
import LoadingSpinner from './LoadingSpinner';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <LoadingSpinner />,
    document.getElementById('root')
);

serviceWorker.unregister();
