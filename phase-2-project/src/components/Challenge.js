import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import SubmitForm from './SubmitForm';
import SubmissionsContainer from './SubmissionsContainer';

const Challenge = () => {
    const [challenge, setChallenge] = useState([]);
    const { challengeType } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/${challengeType}`)
        .then(res => res.json())
        .then(setChallenge)
    }, [challengeType]);

    return (
        <div>
            {challenge.map(selectedChallenge => <SubmissionsContainer challenge={selectedChallenge} key={selectedChallenge.challenge} /> )}
            <SubmitForm challengeType={challengeType} />
        </div>
    );
};

export default Challenge;