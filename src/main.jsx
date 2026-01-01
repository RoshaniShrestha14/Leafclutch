import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage.jsx';
import OurServices from './Pages/OurServices.jsx';
import Contact from './Pages/Contact.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Homepage />} />
          <Route path="/services" element={<OurServices/>} />  
          <Route path="/contact" element={<Contact/>} />  
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
