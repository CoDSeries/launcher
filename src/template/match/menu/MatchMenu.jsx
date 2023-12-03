import { Link, Routes, Route } from "react-router-dom";
import MatchType from "../matchType/MatchType";
import styles from "./MatchMenu.module.css";

const MatchMenu = () => {
    function getAvailableMenu() {
        // TODO: get available matches from API
    }

    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <h2>
                    <span className={styles.title}>origins - matches</span>
                </h2>
            </div>
            <div className={styles.cardContainer}>
                <div className={styles.cardMatch}>
                    <Link to="/match/origins/ranked">Ranked</Link>
                </div>

                <div className={styles.cardMatch}>
                    <Link to="/match/origins/unranked">Unranked</Link>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.quitContainer}>
                    <Link to="/">
                        BACK HOME
                    </Link>
                </div>
            </div>
            <Routes>
                <Route path="/match/origins/ranked" element={<MatchType matchType="Ranked" />} />
                <Route path="/match/origins/unranked" element={<MatchType matchType="Unranked" />} />
            </Routes>
        </section>
    )
}

export default MatchMenu;
