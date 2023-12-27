import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'react-bootstrap';
import './App.css'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/src/pages/Projects.jsx" element={<Projects></Projects>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
