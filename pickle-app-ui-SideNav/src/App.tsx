import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from './components/Sidebar'

import Home from './pages/Home';
import Team from './pages/Team';
import Chats from './pages/Chats';
import CreatePlayer from './components/CreatePlayer';
import UpdatePlayer from './components/UpdatePlayer';

const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/players' element={<Team />} />            
          <Route path='/create-matches' element={<Chats />} />
          <Route path='/create-player' element={<CreatePlayer />} />     
          <Route  path="/edit/:playerId" element={<UpdatePlayer/>} />
        </Routes>
      </Router> 
    </>
  )
}

export default App