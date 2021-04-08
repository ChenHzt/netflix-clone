import {StyledJumbo,StyledContent,StyledContainer} from './style';

export default function Jumbotron(props) {

    return (
        <StyledJumbo src={props.backgroundImg} height={props.height ? props.height :'100vh' }>
            <StyledContent>
                <StyledContainer className='container'>
                    {props.children}

                </StyledContainer>
            </StyledContent>
        </StyledJumbo>
    )
}