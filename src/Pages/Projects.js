import React, { useState} from 'react'
import ModalProject from '../Components/ModalProject';

function Projects() {
    const [show,setShow] = useState(false)
    
    const messsage = (e) => {
      e.preventDefault();
      setShow(true)
    }

    return (
      <div className='container'>
        <div className='content'>
        <div className='projects-body'>
          <h1> My Projects</h1>
          <div className='grid-container'>
            <div className='grid-item1' data-hover="Click me" onClick={messsage}>
                
                <a href=''></a>  

            </div>
            <div className='grid-item2' data-hover="Click me">
              <a href=''></a>
            </div>
            <div className='grid-item3' data-hover="Click me">
              <a href=''></a>
            </div>
            <div className='grid-item4' data-hover="Click me">
              <a href=''></a>
            </div>
            <div className='grid-item5' data-hover="Click me">
              <a href=''></a>
            </div>
            <div className='grid-item6' data-hover="Click me">
              <a href=''></a>
            </div>
          </div>
        </div>
        </div>
        <ModalProject onClose={() => setShow(false)} show={show}/>
      </div>
    );
  }

export default Projects;
