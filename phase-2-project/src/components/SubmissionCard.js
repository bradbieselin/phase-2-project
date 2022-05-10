import React, { useState } from 'react';
import styled from 'styled-components'

const Image = styled.img`
    max-width: 250px;
    max-height: 250px;
    margin: 2.5rem;
`

const SubmissionCard = ({ submission }) => {
    const [votes, setVotes] = useState(submission.votes)

    function handleClick() {
        setVotes(votes => votes + 1);
    }

    return (
        <div>
            <Image src={submission.image} alt={submission.caption} />
            <h2>{submission.photographer}</h2>
            <h3>{submission.caption}</h3>
            <button onClick={handleClick}>Votes: {votes}</button>
        </div>
    );
};

export default SubmissionCard;