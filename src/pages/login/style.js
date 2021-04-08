import styled from "styled-components";

export const PageBackground = styled.div`
    width:100vw;
    height:100vh;
    background:url(${props => props.src}) no-repeat center center/cover;
    position:relative;
    

   
`
export const Overlay = styled.div`
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background-color: rgba(0,0,0,0.6);
    z-index:1;
    display:flex;
    justify-content:center;
    align-items:center;
`
export const Box = styled.div`
    z-index:100;
    width:30%;
    background-color:rgba(0,0,0,0.7);
    min-height:380px;
    min-width:300px;
    border-radius:4px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
`

export const Headline = styled.h1`
    font-size:2em;
    text-align:center;
    padding:10px;
`

export const FormItem = styled.div`
    display:flex;
    width:100%;
    padding:0 10px ;
    justify-content:center;
    
`
export const CustomInput = styled.div`
    height:2.5rem;
    width:80%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    background-color:green;
    margin: 8px 0;
    background-color:#E8F0FE;
    padding:5px;
    border-radius:5px;
`
export const CustomInputLabel = styled.div`
    font-size:0.5rem;
    color:black;
`
export const InputField = styled.input`
    background:transparent;
    border:none;
    outline:none;

`

export const Input = (props) =>{
    return (
        <CustomInput>
            <CustomInputLabel>{props.label}</CustomInputLabel>
            <InputField name={props.name} value={props.value} onChange={props.onChange} type={props.inputType}/>
        </CustomInput>
    )
}

export const PrimaryBtn = styled.button`
    background-color: #E50914;
    padding:10px 0;
    font-weight:bold;
    border-radius:5px;
    border:none;
    outline:none;
    font-size:1rem;
    width:80%;
    margin:10px ;
    display:flex;
    justify-content:center;
    align-items:center;
    text-decoration:none;
    color:white;
    &:visited{
        color:white;
    }
`

export const SecondaryBtn = styled.button`
    background-color: transparent;
    padding:10px 0;
    border-radius:5px;
    border:none;
    outline:none;
    font-size:1rem;
    // width:80%;
    margin:10px;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    color:#737373
`

export const Text = styled.p`
    color:#737373; 
    display:block;
`