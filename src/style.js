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

export const ToggleBtnCheckBox = styled.input.attrs({ type: 'checkbox' })`
    height: 0;
    width: 0;
    visibility: hidden;

    &:checked + label {
    &:after {
        transform: scale(4.2);
        } 
    }
`

export const ToggleBtnLabel = styled.label`
    outline: none;
    user-select: none;
    color: $color-dark;
    font-family: 'Lato', sans-serif;
    font-size: 2.5rem;
    letter-spacing: 0.04rem;
    padding: 1.5rem 3rem;
    cursor: pointer;
    border-radius: .4rem;
    border: .3rem solid $color-dark;
    background: $color-light;
    position: relative;
    overflow: hidden;

    &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%; 
    top: 0;
    left: 0;
    transform: scale(0);
    transition: transform $dur ease-in;
    mix-blend-mode: difference;
    background: radial-gradient(
        circle at center, 
        $color-light 24%, 
        $color-dark 25%, 
        $color-dark 100%);
    }     

    box-shadow: 0 3px 0 0 $color-dark;
    &:active {
        top: 3px;
        box-shadow: none;
    }

`

export function ToggleButton(props){
    return (
        <>
            <ToggleBtnCheckBox id='cb'/>
            <ToggleBtnLabel for='cb' />
        </>
    )
} 