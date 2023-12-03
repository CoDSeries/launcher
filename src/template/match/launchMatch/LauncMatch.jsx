import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import styles from './LaunchMatch.module.css';

const LaunchMatch = () => {
    const location = useLocation();
    const { matchType, gameMode } = location.state || {};

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };


    return (
        <section className={styles.container}>
            <h1>Launching {matchType} {gameMode} Match</h1>
            <button onClick={goBack}>GO back</button>
        </section>
    );
};

export default LaunchMatch;
