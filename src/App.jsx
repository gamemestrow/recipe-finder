import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RecipePage from './pages/RecipePage';


const App = () => {
  const [darkMode, setdarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark" : ""} w-screen`}>
    <Router>
      <Routes>
        <Route path='/' element={<Home darkMode={darkMode} setdarkMode={setdarkMode}/>} />
        <Route path='/recipe/:id' element={<RecipePage darkMode={darkMode} setdarkMode={setdarkMode} />}/>
      </Routes>
    </Router>

    </div>
  )
}

export default App