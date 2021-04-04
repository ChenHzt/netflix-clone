// import '../App.css';
import {Section,InfoSide,MediaSide,Headline,Info} from './style'

export function HomePageInfoStripe({ headline, info, videoUrl,videoPoster, direction }) {
    return (
            <Section direction={direction}>
                <InfoSide>
                    <Headline>{headline}</Headline>
                    <Info>{info}</Info>
                </InfoSide>
                
                <MediaSide src={videoUrl} poster={videoPoster} autoPlay muted/>
            </Section>

    )
}