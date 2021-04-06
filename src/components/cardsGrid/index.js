import { StyledGridContainer } from "./style";

export default function CardsGrid(props){

    return (
        <StyledGridContainer>
            {props.children}
        </StyledGridContainer>
    )
}