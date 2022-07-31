import React from 'react';
import {BsFillTelephoneFill, BsGithub,BsLinkedin,BsFillFileEarmarkPdfFill} from 'react-icons/bs';
import {MdPlace} from 'react-icons/md';
import {HiOutlineMail} from 'react-icons/hi';



/*
possible color for project:
#498560 green emerald
#81d8d0 tiffany color
*/
function Contact() {
    
    return (
      <div className='container'>
        <div className='content'>
        <div className='contact-body'>
        <h1> Contact me </h1>
        <div className='form-container'>
        
        <form>
            <div className='field'>
            <label for="name">Name:</label><br/>
            <input type={"text"} name = "name" placeholder='e.g Jhon Doe' className='form-control'  required></input>
            </div>
            <div className='field'>
            <label for="email" >Email:</label><br/>
            <input type={"email"} placeholder='example@email.com' className='form-control' required></input>
            </div>
            <div className='field'>
            <label for="message">Your Message:</label><br/>
            <textarea name='message' placeholder='type here' className='form-control' rows="10" required></textarea>
            </div>  
            <button>Send me a message</button>
        </form>

        <div className='left-form'>
            <div className='left-field'>
              <ul>
                <li><MdPlace /><span>Springfield, VA</span></li>
                <li><BsFillTelephoneFill/><span>&#40;804&#41; 946-0456</span></li>
                <li><HiOutlineMail/><span>christian.romero.02.cr@gmail.com</span></li>
              </ul>
              </div>
              <hr/>

              <div className='social-field'>
                <ul>
                  <a href='https://github.com/romerotac' target={"_blank"}><li><BsGithub className='github'/></li></a>
                  <a href='https://www.linkedin.com/in/christianromerotaipe' target={"_blank"}><li><BsLinkedin className='linkedin'/></li></a>
                  <a href='/pdfFiles/CV.pdf' target={"_blank"}><li><BsFillFileEarmarkPdfFill className='pdf'/></li></a>
                </ul>
              </div>

        </div>
        </div>
        </div>
      </div>
      </div>
    );
  }

export default Contact;