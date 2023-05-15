import './ContactUs.css'
import SectionHeader from '../../Component/SectionHeader'

const ContactUs = () => {
    return (
       <div className='contact'>
        <SectionHeader>Contact Us</SectionHeader>
        <div className='container'>
        <div className='row'>
        <div className='col-lg-12'>
          <form>
            <div className='inputdiv'>
            <input className='your-name' type='text' name='name' placeholder='your name'/>
            <input type='text' name='name' placeholder='Email'/>
            </div>
            
            <input type='text' name='name' placeholder='Phone'/>
            <textarea type='text' name='name' placeholder='Message'/>
            <div id='btn'>
                  <a href=''><button>Send</button></a>  
            </div>
          </form>
            </div>
            </div>
        </div>
        
       </div>
    );
}

export default ContactUs;
