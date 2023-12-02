import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Login from './modules/login/Login';
import Home from './template/Home';
import { AuthProvider } from './AuthProvider';
import {ProtectedRoute} from "./ProtectedRoutes"; // Mettez à jour le chemin

const App = () => {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                    <Route path="/" element={<Navigate replace to="/login" />} />
                </Routes>
            </AuthProvider>
        </Router>
    );
};

export default App;
