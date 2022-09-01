import React, {useRef, useState} from 'react';
import {BsFillTelephoneFill, BsGithub,BsLinkedin,BsFillFileEarmarkPdfFill} from 'react-icons/bs';
import {MdPlace} from 'react-icons/md';
import {HiOutlineMail} from 'react-icons/hi';
import emailjs from '@emailjs/browser';
import Modal from '../Components/Modal';



/*
possible color for project:
#498560 green emerald
#81d8d0 tiffany color

for all content word:
rgb(82, 73, 73) alternative black

for the color background in contact form this could be color in hover menu:
#4c8d97 (darkblue)

*/
function Contact() {
      const [show,setShow] = useState(false)

      const [emailUser, setEmailUser] = useState("");
      const [nameUser, setNameUser] = useState("");
      const [textUser, setTextUser] = useState("");

      const form = useRef();

      /*
      function for trying the modal without sending the email
      const messsage = (e) => {
        e.preventDefault();
        setShow(true)
      }
      **/

      const sendEmail = (e) =>{
        e.preventDefault();

        emailjs.sendForm('service_v022881', 'template_zde4kqz', form.current, '4qPi5QK_gHI5okJ6A')
        .then((result) => {
            console.log(result.text);

            if (emailUser) {
              setEmailUser("")
            }

            if (nameUser){
              setNameUser("")
            }

            if (textUser){
              setTextUser("")
            }

            setShow(true)

            

        }, (error) => {
            console.log(error.text);
        });
    };



    return (
      <div className='container'>
        <div className='content'>
        <div className='contact-body'>
        <h1> Contact me </h1>
        <div className='form-container'>
        
        <form ref={form} onSubmit={sendEmail}>

            <div className='field'>
            <label htmlFor="name">Name:</label><br/>
            <input type={"text"} value = {nameUser} onChange={(e) => setNameUser(e.target.value)} name = "user_name" placeholder='e.g Jhon Doe' className='form-control'  required></input>
            </div>
            <div className='field'>
            <label htmlFor="email" >Email:</label><br/>
            <input type={"email"} value = {emailUser} onChange={(e) => setEmailUser(e.target.value)} name = "user_email" placeholder='example@email.com' className='form-control' required></input>
            </div>
            <div className='field'>
            <label htmlFor="message">Your Message:</label><br/>
            <textarea name='message' value={textUser} onChange={(e) => setTextUser(e.target.value)} placeholder='type here' className='form-control' rows="10" required></textarea>
            </div>
            
            <input type={"submit"} value="Send" className='button-submit'></input> 
            
            
        </form>

        <div className='left-form'>
            <div className='left-field'>
              <ul>
                <li><MdPlace /><span>Springfield, VA</span></li>
                <li><BsFillTelephoneFill/><span>&#40;804&#41; 946-0456</span></li>
                <li><HiOutlineMail/><span>chrisitan.romero02.cr@gmail.com</span></li>
              </ul>
              </div>
              
              <hr/>

              <div className='social-field'>
                <ul>
                  <a href='https://github.com/romerotac' target={"_blank"}><li><BsGithub className='github'/></li></a>
                  <a href='https://www.linkedin.com/in/christianromerotaipe' target={"_blank"}><li><BsLinkedin className='linkedin'/></li></a>
                  <a href='/pdfFiles/Christian_Romero_Taipe.pdf' target={"_blank"}><li><BsFillFileEarmarkPdfFill className='pdf'/></li></a>
                </ul>
              </div>

        </div>
        </div>
        </div>
      </div>
      <Modal onClose={() => setShow(false)}  show={show}/>
      </div>
    );
  }

export default Contact;