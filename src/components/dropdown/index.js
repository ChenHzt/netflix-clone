import React, { useState } from "react";
import {StyledDropDownContainer,StyledDropDownHeader,StyledDropDownListContainer,StyledDropDownList,StyledListItem} from './style'

export default function DropDown(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(props.selectedIndex);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    props.onOptionClicked && props.onOptionClicked(value);
  };

  return (

      <StyledDropDownContainer>
        <StyledDropDownHeader onClick={toggling}>
          {props.children[selectedOption] || props.children[0]}
        </StyledDropDownHeader>
        {isOpen && (
          <StyledDropDownListContainer>
            <StyledDropDownList>
              {props.children.map((option,index) => (
                  (index!==selectedOption) &&
                <StyledListItem onClick={onOptionClicked(index)} key={index}>
                  {option}
                </StyledListItem>
              ))}
            </StyledDropDownList>
          </StyledDropDownListContainer>
        )}
      </StyledDropDownContainer>
  );
}