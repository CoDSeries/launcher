import React from "react";
import { useParams } from "react-router-dom";

const MatchType = () => {
  // Utilisez useParams pour obtenir les paramètres de l'URL
  const { matchType } = useParams();

  return (
      <div>
        <h1>{matchType} Match</h1>
      </div>
  );
};

export default MatchType;
