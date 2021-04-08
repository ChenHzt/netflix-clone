import styled from "styled-components";

export const StyledCard = styled.div`
    width:calc(100%/3.3);
    height: 17rem;
    display:flex;
    flex-direction:column;
    background-color: #2F2F2F;
    font-size:0.75rem;
    margin:10px 0
`

export const StyledImage = styled.div`
    background:url(https://image.tmdb.org/t/p/original${props => props.src}) no-repeat center center/cover;
    width:100%;
    height:40%;
    min-height:40%;

`

export const StyledDetails = styled.div`
    display:flex;
    flex-direction:column;
    max-height:60%;
    padding:15px 5px;
`
export const StyledYear = styled.span`
    padding:2px 4px;
    border:1px solid white;
    width:fit-content;
`
export const StyledTitle = styled.span`
    padding:3px;
    font-size:1rem;
    
    height:max-content;
    font-weight:bold;
    
`
export const StyledDescription = styled.span`
    width:100%;
    max-height:100%;
    overflow-y:hidden;
    
`



