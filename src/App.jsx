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
        <Route path="" element={<Home></Home>}></Route>
        <Route path="Projects" Component={<Projects></Projects>}/>
        <Route path="Contact" Component={<Contact></Contact>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
