import React from 'react'
import {AiFillHtml5} from 'react-icons/ai';
import {FaCss3Alt,FaReact} from 'react-icons/fa';
import Carousel from './Carousel';


function ModalProject(props) {

    if(!props.show){
        return null
    }

    return(
        <>
        <div className='modal'>
            <div className='modalProject-content'>
                <div className='modalProject-header'>
                    <button className='button-close' onClick={props.onClose}>X</button>
                </div>
                <div className='modalProject-body'>
                    
                    <div className='left'>
                    <div className='modal-image-position'>
                        <img src={require('../Images/empty_project.jpg')}></img>
                    </div>
                    </div>
                    
                    <div className='right'>

                    <div className='modal-content-position'>
                    <h1>Topic of the project</h1>
                    <p>this is a project created for the porpuse of being created for this particular project</p>
                    </div>

                    <div className='languages-section'>
                                                    
                            <div className='icons'>
                               <AiFillHtml5/>   
                            </div>
                            
                            <div className='icons'>
                                <FaCss3Alt/> 
                            </div>
                            
                            <div className='icons'>
                                <FaReact/>
                            </div>
                               
                    </div>

                    </div>

                </div>
                <div className='modalProject-footer'>
                    <button className='button-code'>Code</button>
                    <button className='button-demo'>Demo</button>
                </div>
            </div>
        </div>
        </>

    );
}

export default ModalProject;