import React from 'react';
import './App.css';
import Home from './pages/Home';
import { Routes, Route} from 'react-router-dom';
import Search from './pages/Search';
import Watch from './pages/Watch';
import { useTheme } from './context/themeContext';

function App() {

 

  return (
    <div className="App ">
      <Routes>
        <Route path="/youtube_clone_typescript" element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/watch/:id" element={<Watch/>}/>
      </Routes>
    </div>
  );
}

export default App;
