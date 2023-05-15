import './Specials.css'

import Carousel from 'react-bootstrap/Carousel';
import banner from '../../assets/banner.jpg';
import banner1 from '../../assets/banner1.png';
import { FaFacebookF,FaTwitter,FaInstagram } from "react-icons/fa";
const Specials = () => {
    return (
        <div >
           <Carousel className='slider'  slide={false}>
      <Carousel.Item>
      <img src={banner} alt=''/>
        <Carousel.Caption>
          <div className='text'>
          <h2>All New Phones</h2>
          <h1>up to 25% Flat Sale</h1>
          <p>It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is that</p>
              </div>
          <div id='btn'> <a href=''><button>See More</button></a>  </div>
          <div className='icons'>
          <div className='icon'><FaFacebookF className='facebook'/></div>
          <div className='icon'><FaTwitter className='facebook'/></div>
          <div className='icon'><FaInstagram className='facebook'/></div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={banner1} alt=''/>
        <Carousel.Caption>
        <div className='text'>
        <h2>All New Phones</h2>
          <h1>up to 25% Flat Sale</h1>
          <p>It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is that</p>
              </div>
          <div id='btn'> <a href=''><button>See More</button></a>  </div>
          <div className='icons'>
          <div className='icon'><FaFacebookF className='facebook'/></div>
          <div className='icon'><FaTwitter className='facebook'/></div>
          <div className='icon'><FaInstagram className='facebook'/></div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={banner} alt=''/>
        <Carousel.Caption>
        <div className='text'>
        <h2>All New Phones</h2>
          <h1>up to 25% Flat Sale</h1>
          <p>It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is that</p>
              </div>
          <div id='btn'> <a href=''><button>See More</button></a></div>
          <div className='icons'>
          <div className='icon'><FaFacebookF className='facebook'/></div>
          <div className='icon'><FaTwitter className='facebook'/></div>
          <div className='icon'><FaInstagram className='facebook'/></div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={banner1} alt=''/>
        <Carousel.Caption>
        <div className='text'>
        <h2>All New Phones</h2>
          <h1>up to 25% Flat Sale</h1>
          <p>It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is that</p>
              </div>
          <div id='btn'> <a href=''><button>See More</button></a>  </div>
          <div className='icons'>
          <div className='icon'><FaFacebookF className='facebook'/></div>
          <div className='icon'><FaTwitter className='facebook'/></div>
          <div className='icon'><FaInstagram className='facebook'/></div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    </div>
    );
}

export default Specials;

