import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from './components/Sidebar'

import Home from './pages/Home';
import Team from './pages/Team';
import Tasks from './pages/Tasks';
import Chats from './pages/Chats';
import Analytics from './pages/Analytics';
import Player from './Player';
import Logo from './Logo';
import CreatePlayer from './CreatePlayer';
import UpdatePlayer from './UpdatePlayer';

const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/players' element={<Team />} />            
          <Route path='/tasks' element={<Tasks />} />    
          <Route path='/chats' element={<Chats />} />
          <Route path='/analytics' element={<Analytics />} />
          <Route path='/createplayer' element={<CreatePlayer />} />     
          <Route  path="/edit/:playerId" element={<UpdatePlayer/>} />
        </Routes>
      </Router> 
    </>
  )
}

export default App