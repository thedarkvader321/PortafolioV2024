import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'react-bootstrap';
import './App.css';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

import './style/Projects.css';
import './style/Contact.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Export App as a named export (not a default export)
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="Projects" element={<Projects />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

// Render App after defining it
root.render(<App />);
