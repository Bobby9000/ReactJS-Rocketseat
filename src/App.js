import React, { Component } from 'react';

import './styles.css'

import Heater from './components/Header';
import Main from './pages/main';

const App = () => (
  <div className="App">
    <Heater />
    <Main />
  </div>
);

export default App;
