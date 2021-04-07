import YouTubePlayer from "../../components/youTubePlayer";
import { CloseBtn } from "../../style";

export default function PlayVideoPage(props){
    console.log(props);
    return (
        <>
            {/* <CloseBtn>X</CloseBtn> */}
            <YouTubePlayer id={props.match.params.id} controls={true} />
        </>
    )

}