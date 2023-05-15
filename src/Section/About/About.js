import './About.css'
import AboutImg from '../../assets/about.png'
import SectionHeader from '../../Component/SectionHeader';

const About = () => {
    return (
        <div className='About'>
            <div className='container'>
            <div className='row'>
            <div className='col-lg-6'>
                <img className='img-mobile' src={AboutImg} alt=''></img>
                </div>
                <div className='mobile col-lg-6 '>
                <h3>About Us</h3>
                <h1>Our Mobile Shop</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of It is a long established fact that a reader will be distracted by the</p>
                </div>
                </div>
            </div>
            <div >
            <hr className='line'></hr>
            </div>
            <SectionHeader>Our Brand</SectionHeader>
        </div>
    );
}

export default About;
