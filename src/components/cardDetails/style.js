import styled from "styled-components";

export const Card = styled.div`
    display:flex;
    flex-direction:column;
    
`

export const CardImg = styled.div`
background:url(https://image.tmdb.org/t/p/original${props => props.src}) no-repeat center center/cover;
height:130px;
width:100%;
border-radius:3px;
margin:4px;
`

export const ButtonsContainer = styled.div`
    display:flex;
    flex-direction:row;
    // justify-content:center;
    align-items:center;
`

export const Title = styled.p`
    max-height:1.5rem;
    width:80%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`

