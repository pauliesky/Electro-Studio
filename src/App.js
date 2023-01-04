import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Routes/Home'
import Products from './Components/Routes/Products'
import Courses from './Components/Routes/Courses'
import Register from './Components/Routes/Register'
import Contact from './Components/Routes/Contact'


function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/register' element={<Register />} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
