import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Blogpage from './pages/Blogpage'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" Component={Homepage} />
          <Route path='/Blogpage' Component={Blogpage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
