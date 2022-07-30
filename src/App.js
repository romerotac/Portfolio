import './App.css';
import {Route,Routes, BrowserRouter} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <BrowserRouter>
    
    <Navbar/>
  
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/projects' element = {<Projects/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
