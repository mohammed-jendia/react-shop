import './Header.css'
import { Navbar, Nav} from 'react-bootstrap';
import logo from '../../assets/logo.png';
import Search from '../../assets/search_icon.png';
const Header = () => {
    return (
        <div >
            <Navbar collapseOnSelect expand="lg" variant="dark" >
              <Navbar.Brand href="/Home"><img className='logo-img' src={logo} alt=''/></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav " />
              <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className='menu' hrme="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/AboutUs">About</Nav.Link>
                  <Nav.Link href="/Brand">Brand</Nav.Link>
                  <Nav.Link href="/SpecialsSlide">Specials</Nav.Link>
                  <Nav.Link href="/Contact">Contact Us</Nav.Link>
                </Nav>
                <Nav className='Search'>
                  <img src={Search} alt=''/>
                </Nav>
                
              </Navbar.Collapse>
            </Navbar>

        </div>


        
    );
}

export default Header;
