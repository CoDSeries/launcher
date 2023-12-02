import React, { useEffect, useState } from 'react';
import { useAuth } from '../AuthProvider';
import {Link} from "react-router-dom";

const Home = () => {
    const [userInfo, setUserInfo] = useState(null);
    const { user } = useAuth();

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await fetch('http://localhost:5001/api/me', {
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log(data);
                    setUserInfo(data); // Modifiez cette ligne
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
                    <p>Nom: {userInfo.username}</p>
                    <p>Email: {userInfo.email}</p>
                </div>
            )}
            <Link to="/match">Accéder aux Matches</Link> {/* Lien vers MatchMenu */}
        </div>
    );
};

export default Home;
