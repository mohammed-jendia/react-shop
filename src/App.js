import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Section/Header/Header';
import Container  from '../src/Component/Container/Container';
import Home from './Pages/Home';
import SpecialsSlide from './Pages/SpecialsSlide';
import AboutUs from './Pages/AboutUs';
import Brand from './Pages/Brand';
import Contact from './Pages/Contact';
import Footer from './Section/Footer/Footer';

function App() {
  return (
    <div className="App">

      <Router>
      <Header/>
      <Container>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/SpecialsSlide' element={<SpecialsSlide/>}/>
          <Route path='/AboutUs' element={<AboutUs/>}/>
          <Route path='/Brand' element={<Brand/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route/>
          <Route/>
        </Routes>
        </Container>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
