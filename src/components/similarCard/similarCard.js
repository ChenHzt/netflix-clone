import React, { useState } from 'react';
import { RoundBtn } from '../../style'
import { Card , Image,Details,Year,Title,Description} from './style'


export function SimilarCard({details}) {

    return (
        <Card>
            <Image src={details.backdrop_path}/>
            <Details>
                <Title>{details.title}</Title>
                <Year>{details.release_date.slice(0,4)}</Year>
                <Description>{details.overview}{details.overview}</Description>
            </Details>
        </Card>
    )
}

