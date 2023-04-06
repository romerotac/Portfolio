import React from 'react'
import Carousel from './Carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Information from './Information';

/*
 maybe blue: #385f70
**/

function ModalProject(props) {

    if(!props.show){
        return null
    }

    return(
        <>
        
        <div className='modal' key={props.id}>
            <div className='modalProject-content'>
                <div className='modalProject-header'>
                    <button className='button-close' onClick={props.onClose}>X</button>
                </div>
                <div className='modalProject-body'>
                    
                    <div className='left'>
                    <div className='modal-image-position'>
                        <Carousel images={Information[(props.id)-1].images}/>
                    </div>
                    </div>
                    
                    <div className='right'>

                    <div className='modal-content-position'>
                    <h1>{Information[(props.id)-1].title}</h1>
                    <p>{Information[(props.id)-1].description}</p>
                    </div>

                    <div className='languages-section'>

                            {Information[(props.id)-1].icons.map((item) => (
                                <div className='icons' key={item.id}>
                                    {item.icon}
                                </div>
                            ))}                        
                            
                               
                    </div>

                    </div>

                </div>
                <div className='modalProject-footer'>
                    <button className='button-code' onClick={()=>{window.open(Information[props.id-1].demoURL,'_blank')}}>Demo</button>
                    <button className='button-demo' onClick={()=>{window.open(Information[props.id-1].codeURL,'_blank')}}>Code</button>
                </div>
            </div>
        </div>
        
        </>

    );
}

export default ModalProject;