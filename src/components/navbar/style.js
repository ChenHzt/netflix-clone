import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLogo = styled(Link)`
width:150px;
background:url('${props => props.src}') no-repeat center center/cover;
height:100%;
@media(max-width:500px){
    width:120px;
}
`

export const StyledNavbar = styled.div`
height:60px;
display:flex;
justify-content:space-between;
padding:0 20px;
align-items:center;


width:100%;
z-index:100;
`
export const StyledNavRight = styled.ul`
height:100%;
display:flex;
align-items:center;
`

export const StyledNavLink = styled(Link)`
text-decoration:none;
color:white;
width:80px;
text-align:center;
font-weight:bold;
height:100%;

&:visited{
    color:white;
}

display:flex;
align-items:center;
justify-content:center;
&:hover{
    background-color:#2F2F2F;
}


`