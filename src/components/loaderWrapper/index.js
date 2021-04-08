import { FlapperSpinner  } from 'react-spinners-kit';


export function LoaderWrapper(props)  {
    const Loading = () => {
        return <FlapperSpinner size={30}
        color="#686769"
        loading={props.isLoading}/>
    }

    const NotLoading = () => {
        if(!props.isLoading){
            return (
                <>
                    {props.children}
                </>
            )
        }
        return (<></>);
    }
    
    return(
        <>
            <Loading/>
            <NotLoading/>
        </>
    )
}