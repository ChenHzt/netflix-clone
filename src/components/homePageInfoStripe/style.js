import styled from "styled-components";

export const Section = styled.div`
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

export const InfoSide = styled.div`
    width:50%;
    @media(max-width:500px){
        margin:10px 0;
        width:90%;
    }
`
export const MediaSide = styled.video`
    width:35%;
    @media(max-width:500px){
        width:90%;
    }
`
export const Headline = styled.p`
    font-size: 2.5rem;
    margin: 10px 0;
`
export const Info = styled.p`
    font-size: 1.25rem; 
`

