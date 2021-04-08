// import '../App.css';
import {StyledSection,StyledInfoSide,StyledMediaSide,StyledHeadline,StyledInfo} from './style'

export function HomePageInfoStripe({ headline, info, videoUrl,videoPoster, direction }) {
    return (
            <StyledSection direction={direction}>
                <StyledInfoSide>
                    <StyledHeadline>{headline}</StyledHeadline>
                    <StyledInfo>{info}</StyledInfo>
                </StyledInfoSide>
                
                <StyledMediaSide src={videoUrl} poster={videoPoster} autoPlay muted/>
            </StyledSection>

    )
}