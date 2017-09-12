import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';

const root = document.getElementById('root');
ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>, root);
registerServiceWorker();
