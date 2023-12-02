import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Login from './modules/login/Login';
import Home from './template/Home';
import { AuthProvider } from './AuthProvider';
import MatchMenu from "./template/match/menu/MatchMenu";
import './App.css';
import './index.css'
import MatchType from "./template/match/matchType/MatchType";

const App = () => {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/match" element={<MatchMenu />}>
                        <Route path="origins/ranked" element={<MatchType matchType="Ranked" />} />
                        <Route path="origins/unranked" element={<MatchType matchType="Unranked" />} />
                    </Route>
                    <Route path="/" element={<Navigate replace to="/login" />} />
                </Routes>
            </AuthProvider>
        </Router>
    );
};

export default App;
