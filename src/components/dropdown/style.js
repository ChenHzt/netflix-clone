import styled from "styled-components";

export const StyledDropDownContainer = styled("div")`
  width: fit-content;
  margin: 0 auto;
  border:1px solid white;
  cursor:pointer;
  
`;

export const StyledDropDownHeader = styled("div")`
  // margin-bottom: 0.8em;
  font-weight:bold;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  @media(max-width:700px){
    width:2.5em;
    overflow:hidden;
  }
`;

export const StyledDropDownListContainer = styled("div")`
  position: absolute;
  z-index: 100;
  width: 10em;
`;

export const StyledDropDownList = styled("ul")`

  &:first-child {
    padding-top: 0.8em;
  }
`;

export const StyledListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  color:#737373;
  background-color: #2F2F2F;
  &:hover {
    color: white;
  }
`;