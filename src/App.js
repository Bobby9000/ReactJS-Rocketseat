import React from 'react';
import Routes from './routes';

import './styles.css'

import Heater from './components/Header';
//import Main from './pages/main';

const App = () => (
  <div className="App">
    <Heater />
    <Routes />
  </div>
);

export default App;
