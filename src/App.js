import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from './routes';
import Frame from './layout/Frame';
import './lib/debounce&throttle'

function App() {
  return (<BrowserRouter>
    <Frame>
      <Routes/>
    </Frame>
  </BrowserRouter>
  );
}

export default App;
