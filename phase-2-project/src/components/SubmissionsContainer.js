import React from 'react';
import styled from 'styled-components'
import SubmissionCard from './SubmissionCard';

const Container = styled.div`
        width: 100%;
        color: red;
    `

const SubmissionsContainer = ({ challenge }) => {
    // console.log(challenge)
    return (
        <Container>
            {challenge.submissions.map((submission) => <SubmissionCard key={submission.name} submission={submission} /> )}
        </Container>
    );
};

export default SubmissionsContainer;