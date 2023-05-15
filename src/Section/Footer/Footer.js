import './Footer.css';
import { FaFacebookF,FaTwitter,FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='row' >
                    <div className='col-lg-12'>
                    <div className='footer-box'>
                    <div className='header-text'>
                       <h2>Address</h2>
                       <hr className='line'/>
                       <span>Healing Center, 176 W Streetname,New York, NY 10014, US</span>
                       <p>(+71) 8522369417 <br/>
                         demo@gmail.com</p>
                       </div>
                       <div className='icons'>
                        <div className='icon'><FaFacebookF className='facebook'/></div>
                        <div className='icon'><FaTwitter className='facebook'/></div>
                        <div className='icon'><FaInstagram className='facebook'/></div>
                        </div>
                       <div className='footer-button'>
                       <ul className='links'>
                        <li><a href=''>Home</a></li>
                        <li><a href=''>About</a></li>
                        <li><a href=''>Brand </a></li>
                        <li><a href=''>Specials</a></li>
                        <li><a href=''>Contact us</a></li>
                       </ul>
                       </div>
                       </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
