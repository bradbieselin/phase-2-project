import React from 'react';
import styled from 'styled-components'

const Image = styled.img`
    max-width: 250px;
    max-height: 250px;
    margin: 2.5rem;
`

const SubmissionCard = ({ submission }) => {
    return (
        <div>
            <Image src={submission.image} alt={submission.caption} />
            <h2>{submission.photographer}</h2>
            <h3>{submission.caption}</h3>
        </div>
    );
};

export default SubmissionCard;