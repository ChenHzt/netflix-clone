import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledProfilesContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    width:50%;
    margin:30px 0;
`

export const StyledProfileCard = styled(Link)`
    width:8em;
    height:13em;
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
    justify-content:space-around;
    text-decoration:none;
    --colorCard:#737373;
    &:hover{
        --colorCard:white;
    }

`

export const StyledProfileImg = styled.img`
    width: 100%;
    border-radius:4px;
    border:2px var(--colorCard) solid;
    

`
export const StyledProfileName = styled.span`
    width: 100%;
    color: var(--colorCard);
    font-size:1.25em;
    max-width:100%;
`
export const StyledProfilePage = styled.div`
    --color:#737373;
    --colorHover:white;

    display:flex;
    width:100%;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    @media(max-width:800px){
        font-size:0.7em;
    }
    
`

export const StyleHeadline = styled.p`
    font-size:3em;
    
    color:white;
    
`

export const StyledHoverBorder = styled.div`
    border:2px white solid;
`

export const StyledBtn = styled.button`
   
    background-color:transparent;
    color:var(--color);
    border:1px var(--color) solid;
    padding: 0.5em 2em; 
    &:hover{
        color:var(--colorHover);
        border-color:var(--colorHover);
    }
`