import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage.jsx';
import LoginPage from './components/pages/LoginPage.jsx';

const App = () => (<div>
  <Route path="/" exact component={HomePage} />
  <Route
    path="/login"
    exact
    component={
      LoginPage
    }
  />
</div>);

export default App;
