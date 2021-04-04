import styled from "styled-components";

export const Title = styled.span`
    display:block;
    margin:1rem 0;
    font-size:${props => props.fontSize? props.fontSize : '2.5em' } ;   
`
export const Description = styled.p`
    font-size:${props => props.fontSize? props.fontSize : '1em' } ;   
    
`
export const FlexContainer = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirection || 'column'};
    align-items: center;
`

