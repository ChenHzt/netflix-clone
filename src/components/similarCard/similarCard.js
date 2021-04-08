import React from 'react';
import { StyledCard, StyledDescription, StyledDetails, StyledImage, StyledTitle, StyledYear } from './style';


export function SimilarCard({details}) {

    return (
        <StyledCard>
            <StyledImage src={details.backdrop_path}/>
            <StyledDetails>
                <StyledTitle>{details.title}</StyledTitle>
                {details.release_date && <StyledYear>{details.release_date.slice(0,4)}</StyledYear>}
                <StyledDescription>{details.overview}{details.overview}</StyledDescription>
            </StyledDetails>
        </StyledCard>
    )
}


