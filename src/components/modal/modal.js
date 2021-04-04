// import '../App.css';
import { HomePageInfoStripe } from '../homePageInfoStripe'
import React, { useState } from 'react';
import {ModalOverlay,ModalGuts,_Modal} from './style'

export default function Modal({height,width,children,handleClose}) {

    return (
        <ModalOverlay>
            <_Modal className="modal">
                <button onClick={() => handleClose()} class="close-button" id="close-button">Obvious Close Button</button>    
                <ModalGuts >{children}</ModalGuts>
                
            </_Modal>
        </ModalOverlay>
    )
}

