import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'


function Contact() {

  
  
  return (
    <>
    <Header />

    <div className='container'>
      <div className='content'>
        <div className='left-side'>
          <div className='Address details'>
            <div className='topic'>Address</div>
            <div className='text'>Adityapur,Jamshedpur,Jharkhand 831014,India</div>
          </div>
          <div className='E-mail details'>
            <div className='topic'>E-mail</div>
            <div className='text'>nss@nitjsr.ac.in</div>
          </div>
          <div className='Cordinator details'>
            <div className='topic'>Program coordinator</div>
            <div className='text'>Dr. Jayendra Kumar</div>
            <div className='text'>+91 9835169351</div>
          </div>
          <div className='President details'>
            <div className='topic'>President</div>
            <div className='text'>Ronit Ranjan</div>
            <div className='text'>+91 7033755053</div>
          </div>
        </div>
        <div class="right-side">
        <div class="topic-text">Send us a message</div>
        <p>Fill up the form our team get back to you within a week.</p>

      <form action="https://formspree.io/f/mzbllegd" method='POST'>
        <div class="input-box">
          <input 
          type="text" 
          name="username"
          placeholder="Name"
          required
          
           />
        </div>
        <div class="input-box">
          <input 
          type="email"
          name="Email" 
          placeholder="Email" 
          required 
          
          />
        </div>
        <div class="input-box">
          <input 
          type="tel" 
          name="Phone" 
          placeholder="Phone" 
          required 
          
          />
        </div>
        <div class="input-box message-box">
          <textarea 
          type="text"
          name="Message"
          placeholder="Message"
          required
          
          />
        </div>
        <div >
          <button class="button" type="submit" value="Send Now">Send Now</button>
        </div>
      </form>
    </div>
      </div>
    </div>


    <Footer />
    </>
  );
}

export default Contact;
