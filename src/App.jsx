import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'react-bootstrap';
import './App.css'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/src/pages/Home.jsx" element={<Home></Home>}></Route>
        <Route path="/src/pages/Projects.jsx" element={<Projects></Projects>}></Route>
        <Route path="/src/pages/Contact.jsx" element={<Contact></Contact>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
