import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Invoice from './pages/Invoice';
import NewInvoice from './pages/NewInvoice';

const darkContext = React.createContext<boolean | null>(null)

function App() {
  
  const [darkMode, setDarkMode] = React.useState<boolean>(false)
  const now = new Date()
  const hours = now.getHours()

  React.useEffect(() => {
    if(hours > 19 || hours < 8) {
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
    <darkContext.Provider value={darkMode}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header setDarkMode={setDarkMode}/>}>
            <Route index element={<Home />} />
            <Route path="invoice" element={<Invoice />} />
            <Route path="new" element={<NewInvoice />} />
            <Route path="new" element={<NewInvoice />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </darkContext.Provider>
  );
}

export default App;

export {darkContext}