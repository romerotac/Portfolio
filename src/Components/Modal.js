import React from 'react'


function Modal(props) {

    if(!props.show){
        return null
    }

    return(
        <>
        <div className='modal'>
            <div className='modal-content'>
                <div className='modal-header'>
                </div>
                <div className='modal-body'>
                    <h1>Your message has been sent sucessfully</h1>
                </div>
                <div className='modal-footer'>
                    <button className='button' onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
        </>

    );
}

export default Modal;