import styled from "styled-components";

export const Card = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    height:${props => props.isHovered ? '300px' : '150px'};
    transform: ${props => props.isHovered? 'translateY(-50px)':'translateY(0px)'};

    margin:0 10px;
    padding:5px;
    width:${props => props.isHovered ? 'calc(100vw/2 + 50px)' : 'calc(100vw/3)'};
    padding:10px;
    @media(min-width:500px){
        width:${props => props.isHovered ? 'calc(100vw/3 + 50px)' : 'calc(100vw/4)'};

    }
    @media(min-width:800px){
        width:${props => props.isHovered ? 'calc(100vw/4 + 50px)' : 'calc(100vw/4)'};

    }
    @media(min-width:1000px){
        width:${props => props.isHovered ? 'calc(100vw/5 + 50px)' : 'calc(100vw/5)'};

    }
    @media(min-width:1200px){
        width:${props => props.isHovered ? 'calc(100vw/6 + 50px)' : 'calc(100vw/6)'};

    }
    
`

export const CardImg = styled.div`
background:url(https://image.tmdb.org/t/p/original${props => props.src}) no-repeat center center/cover;
height:100%;
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
    min-height:1.5rem;
    width:80%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`

