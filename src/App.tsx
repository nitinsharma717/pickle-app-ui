import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Player from './Player';
import CreatePlayer from './CreatePlayer';
import UpdatePlayer from './UpdatePlayer';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="Player" element={<Player />} />
          <Route path="/" element={<Player />} />
          <Route path="CreatePlayer" element={<CreatePlayer />} />
          <Route  path="/edit/:playerId" element={<UpdatePlayer/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
