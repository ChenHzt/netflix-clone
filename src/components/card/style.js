import styled from "styled-components";

export const CardDiv = styled.div`
background:url(https://image.tmdb.org/t/p/original${props => props.movie.backdrop_path}) no-repeat center center/cover;
height:130px;
width:230px;
border-radius:3px;
margin:4px;
`


