import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Header from 'components/Header';
import Page1 from 'pages/page1';
import Page2 from 'pages/page2';

const App = () => (
  <div>
    <Header />
    <NavLink to="/page1" activeStyle={{ color: 'red' }}>
      page1
    </NavLink>
    <NavLink to="/page2" activeStyle={{ color: 'red' }}>
      page2
    </NavLink>
    <Route path="/page1" component={Page1} />
    <Route path="/page2" component={Page2} />
  </div>
);

export default App;
