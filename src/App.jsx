import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './components/Login'
import Header from './components/Header'
import Home from './Page/Home';
import Painting from './components/Painting';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/paint' element={< Painting />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
