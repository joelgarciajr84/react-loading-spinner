import React from 'react';
import ReactDOM from 'react-dom';
import SimpleLoadingSpinner from './LoadingSpinner';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <SimpleLoadingSpinner width={100} height={100} borderRadius={50}/>,
    document.getElementById('root')
);

serviceWorker.unregister();
