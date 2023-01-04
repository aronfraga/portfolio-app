import phone from '../../assets/phone.png'
import email from '../../assets/email.png'
import location from '../../assets/location.png'
import NavBar from '../NavBar/NavBar';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css'
import { useState } from 'react';

function Contact() {

  let [ input, setInput ] = useState({
    name: '',
    email: '',
    message: ''
  });

  function handlerInput(event) {
    event.preventDefault();
    setInput({ ...input, [event.target.name]: event.target.value });
  }

  function notify(alert) {
    if(alert) return toast('Thank you!! 🫡');
    toast('Something went wrong, you can send me an email or try again 😬');
  }

  function handlerSend(event) {
    event.preventDefault();
    if(input.name && input.email && input.message) {
      emailjs.sendForm('service_u7krna5', 'template_3hermb9', event.target, 'cZjJXEWg6PPPR83Bb')
          .then(function(response) {
            notify(true);
          }, function(error) {
            notify(false);
          });
    } else {
      toast('No data to send 🫠');
    }
  }

  return (
    <div>
      <NavBar />
      <div className='mainContactMe'>
        <div className='leftContactMe'>
          <div className='iconContainer'>
          <img src={email} alt="email" className='iconContactMe'/>
          <p>aronfraga@gmail.com</p>
          <img src={phone} alt="phone" className='iconContactMe'/>
          <p>+5493412557111</p>
          <img src={location} alt="location" className='iconContactMe'/>
          <p>Argentina, Buenos Aires</p>
          </div>
        </div>
        <div className='rightContactMe'>
          <h1>Contact Me</h1>
          <p> If you want to contact me or have any question about me, you can send me message
              from here. It's my pleasure to help you. </p>
          <form onSubmit={(event) => handlerSend(event)}>
            <div className='formContainer'>
              <input className='formInputContainer' placeholder='Enter your name' type='text' name='name' onChange={handlerInput} value={input.description} />
              <input className='formInputContainer' placeholder='Enter your email' type='text' name='email' onChange={handlerInput} value={input.description} />
              <textarea className='formTextContainer' placeholder='Enter you message' name='message' onChange={handlerInput} value={input.description} />
            </div>
            <button className='btnContactMe' type='submit'>Send Now</button>
          </form>
          
        </div>       
      </div>
      <ToastContainer
				position='bottom-left'
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover={false}
			/>
    </div>
  )
}

export default Contact;