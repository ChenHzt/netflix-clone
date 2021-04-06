import styled from 'styled-components';

export const StyledProfileDropDownItem = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:7rem;
    height:100%;
    padding:5px;
`

export const StyledProfileDropDownItemImage = styled.img`
    width:2rem;
    height:2rem;
`
export const StyledProfileDropDownItemName = styled.span`
    width:fit-content;
    max-width:100%;
    padding:5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`