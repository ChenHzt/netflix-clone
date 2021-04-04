import styled from "styled-components";

export const _Modal = styled.div`
    height:${props => props.height};
    width:${props => props.width};
    display: block;
    
    position: fixed;
    
    z-index: 100;
    
    left: 50%;
    top: 50%;
    
    /* Use this for centering if unknown width/height */
    transform: translate(-50%, -50%);
    
    /* If known, negative margins are probably better (less chance of blurry text). */
    /* margin: -200px 0 0 -200px; */
    
    background: white;
    box-shadow: 0 0 60px 10px rgba(0, 0, 0, 0.9);
    
`

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 50;
    background: rgba(0, 0, 0, 0.6);
`
export const ModalGuts = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: 20px 50px 20px 20px;
`