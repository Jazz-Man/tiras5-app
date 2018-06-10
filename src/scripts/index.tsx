import * as React from 'react';
import { render } from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import '../scss/index.scss';

import App from './components/App';

render(
    <React.Fragment>
        <CssBaseline />
        <App message="World TEST" />
    </React.Fragment>,
    document.getElementById('root'),
);