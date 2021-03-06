import styled from "styled-components";

export const StyledSection = styled.div`
    display:flex;
    flex-direction:${props => props.direction};
    align-items: center;
    max-width:100%;
    justify-content: space-between;
    padding:  60px 40px;
    color:white;
    @media(max-width:500px){
        flex-direction:column;
        height:100%;
        text-align:center;
        padding:20px 0;
    }
`

export const StyledInfoSide = styled.div`
    width:50%;
    @media(max-width:500px){
        margin:10px 0;
        width:90%;
    }
`
export const StyledMediaSide = styled.video`
    width:35%;
    @media(max-width:500px){
        width:90%;
    }
`
export const StyledHeadline = styled.p`
    font-size: 2.5rem;
    margin: 10px 0;
`
export const StyledInfo = styled.p`
    font-size: 1.25rem; 
`

