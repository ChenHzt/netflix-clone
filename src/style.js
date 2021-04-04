import styled from "styled-components";
import { Link } from "react-router-dom";

export const RoundBtn = styled.button`
    width:35px;
    height:35px;
    padding:10px;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    border: 2px white solid;
    background-color:transparent;
    color:white;
    margin:5px
`

export const RectengleBtn = styled.button`
    width: 60px;
    padding:5px 10px;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    font-weight:bold;
`

export const HorizontalRule = styled.hr`
    background-color: #222222;
    border: 0;
    height: 5px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.45));
`

export const Logo = styled(Link)`
    width:150px;
    background:url('${props => props.src}') no-repeat center center/cover;
    height:100%;
    @media(max-width:500px){
        width:120px;
    }
`

export const Navbar = styled.div`
    height:60px;
    display:flex;
    justify-content:space-between;
    padding:0 20px;
    align-items:center;
    position:absolute;
    top:0;
    left:0;
    width:100%;
    z-index:100;
`
export const NavRight = styled.ul`
    height:100%;
    display:flex;
    align-items:center;
`

export const NavLink = styled(Link)`
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