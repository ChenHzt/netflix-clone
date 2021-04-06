import styled from "styled-components";

export const StyledDropDownContainer = styled("div")`
  width: 7em;
  margin: 0 auto;
  border:1px solid white;

`;

export const StyledDropDownHeader = styled("div")`
  // margin-bottom: 0.8em;
  font-weight:bold;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
`;

export const StyledDropDownListContainer = styled("div")`
  position: absolute;
  z-index: 100;
  width: 7em;
`;

export const StyledDropDownList = styled("ul")`
  // padding: 0;
  // margin: 0;
  // padding-left: 1em;
  // box-sizing: border-box;

  // font-size: 1.3rem;
  // font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

export const StyledListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  &:hover {
    color: #fd9e46;
  }
`;