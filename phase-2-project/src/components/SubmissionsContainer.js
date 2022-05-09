import React from 'react';
import styled from 'styled-components'
import SubmissionCard from './SubmissionCard';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    margin: 2.5rem;
    `

const ChallengeTitle = styled.h1`
    color: red;
    `

const SubmissionsContainer = ({ challenge }) => {
    // console.log(challenge)
    return (
        <div>
            <ChallengeTitle>{challenge.challenge}</ChallengeTitle>
            <Container>
                {challenge.submissions.map((submission) => <SubmissionCard key={submission.id} submission={submission} /> )}
            </Container>
        </div>
    );
};

export default SubmissionsContainer;