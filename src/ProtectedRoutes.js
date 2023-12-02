import React from 'react';
import {Navigate, Route} from 'react-router-dom';
import { useAuth } from './AuthProvider'; // Mettez à jour le chemin

export const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
};