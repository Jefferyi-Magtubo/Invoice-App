import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  
  const [darkMode, setDarkMode] = React.useState<boolean>(false)
  const now = new Date()
  const hours = now.getHours()

  React.useEffect(() => {
    if(hours > 19) {
      setDarkMode(true)
    }
  }, [])


  React.useEffect(() => {
    if (darkMode) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header darkMode={darkMode} setDarkMode={setDarkMode}/>}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
