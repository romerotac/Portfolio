import './App.css';
import {Route,Routes, BrowserRouter} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Navbar from './Components/Navbar';
import Contact from './Pages/Contact';

function App() {
  return (
    <>
    <BrowserRouter>
    
    <Navbar/>
  
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/projects' element = {<Projects/>}/>
      <Route path='/contact' element = {<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
