import React, { useState} from 'react'
import Information from '../Components/Information';
import ModalProject from '../Components/ModalProject';

function Projects() {
    const [show,setShow] = useState(false);
    const [id,setID] = useState('');
    

    const messsage = (number,e) => {
      e.preventDefault();
      setShow(true)
      setID(number)
    }

    return (
      <div className='container'>
        <div className='content'>
        <div className='projects-body'>
          <h1> My Projects</h1>
          <div className='grid-container'>
            <div className='grid-item1' data-hover="Click me" onClick={e => messsage(1,e)}>
            <img src={Information[0].cover}></img>               
            </div>
            <div className='grid-item2' data-hover="Click me" onClick={e => messsage(2,e)}>
              <img src={Information[1].cover}></img>              
            </div>
            <div className='grid-item3' data-hover="Click me" onClick={e => messsage(3,e)}>
            <img src={Information[2].cover}></img>
            </div>
            <div className='grid-item4' data-hover="Click me" onClick={e => messsage(4,e)}>
            <img src={Information[3].cover}></img>
            </div>
            <div className='grid-item5' data-hover="Click me" onClick={e => messsage(5,e)}>
            <img src={Information[4].cover}></img>
            </div>
            <div className='grid-item6' data-hover="Click me" onClick={e => messsage(6,e)}>
            <img src={Information[5].cover}></img>
            </div>
          </div>
        </div>
        </div>
        <ModalProject onClose={() => setShow(false)} show={show} id={id}/>
      </div>
    );
  }

export default Projects;
