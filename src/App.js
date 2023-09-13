import './App.css';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Nav from './Components/Nav';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Services from './Components/Services';
import Project from './Components/Project';
import About from './Components/About';
import Home from './Components/Home';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
   
      <Nav/>
      <Routes>
        <Route  path='' element={<Home/>}/>
        <Route  path='/About' element={<About/>}/>
        <Route  path='/Project' element={<Project/>}/>
        <Route  path='/Services' element={<Services/>}/>
        <Route  path='/Blog' element={<Blog/>}/>
        <Route  path='/Contact' element={<Contact/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
