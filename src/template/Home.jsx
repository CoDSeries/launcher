// src/template/Home.jsx

import React, { useEffect, useState } from 'react';
import { useAuth } from '../AuthProvider';

const Home = () => {
    const [userInfo, setUserInfo] = useState(null);
    const { user } = useAuth();

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await fetch('http://localhost:3002/me', {
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    setUserInfo(data.user);
                } else {
                    console.error('Erreur lors de la récupération des informations de l\'utilisateur');
                }
            } catch (error) {
                console.error('Erreur:', error);
            }
        };

        if (user && user.token) {
            fetchUserInfo();
        }
    }, [user]);

    return (
        <div>
            <h1>Home</h1>
            {userInfo && (
                <div>
                    <p>Nom: {userInfo.name}</p>
                    <p>Email: {userInfo.email}</p>
                </div>
            )}
        </div>
    );
};

export default Home;
