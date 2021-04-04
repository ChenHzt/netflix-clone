import {Jumbo,Content,Container} from './style';

export default function Jumbotron(props) {

    return (
        <Jumbo src={props.backgroundImg} height={props.height ? props.height :'100vh' }>
            <Content>
                <Container className='container'>
                    {props.children}

                </Container>
            </Content>
        </Jumbo>
    )
}