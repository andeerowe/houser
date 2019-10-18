import React from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom'
import routes from './Components/routes'
import Header from './Components/Header/Header'

function App() {
  return (
   <HashRouter>
      <div className="App">
        <Header />
        {routes}
      </div>
   </HashRouter>
  );
}

export default App;
