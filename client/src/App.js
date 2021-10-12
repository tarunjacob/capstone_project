import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppSearchBar from './components/appBar';
import Routes from './components/routes';

function App() {
  return (
    <div>
      {/* <AppSearchBar /> */}
      <Routes />
    </div>
  )
}

export default App;