import React from "react";
import {useParams, useNavigate, Link, useLocation} from "react-router-dom";
import styles from './MatchType.module.css';

const MatchType = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { matchType, gameMode } = location.state || {};

    const goBack = () => {
        navigate(-1);
    };

    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <h1>Launching {matchType ? `${matchType} ${gameMode}` : "Match"}</h1>
            </div>
            <div className={styles.cardContainer}>
                <div className={styles.cardMatch}>
                    <Link to="/launch/QG" state={{ matchType, gameMode: "Q.G" }}>Q.G</Link>
                </div>
                <div className={styles.cardMatch}>
                    <Link to="/launch/SD" state={{ matchType, gameMode: "S&D" }}>S&D</Link>
                </div>
                <div className={styles.cardMatch}>
                    <Link to="/launch/CTF" state={{ matchType, gameMode: "CTF" }}>CTF</Link>
                </div>
            </div>
            <div className={styles.footer}>
                <button onClick={goBack}>GO back</button>
            </div>
        </section>
    );
};

export default MatchType;
