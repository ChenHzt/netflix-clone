import styled from "styled-components";

export const StyledJumbo = styled.div`
    width:100%;
    height:${props => props.height};
    background:url(${props => props.src}) no-repeat center center/cover;
    position: relative;
    box-shadow: inset 0px 0px 50px 40px rgba(0,0,0,0.6) ;
    
`

export const StyledContent = styled.div`
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.5);  
    display: flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    z-index:100;
   
`
export const StyledContainer = styled.div`
    height: 100%;
    width: 80%;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    @media(max-width:800px){
        width:90%;
    }
    @media(max-width:500px){
        width:95%;

    }
`