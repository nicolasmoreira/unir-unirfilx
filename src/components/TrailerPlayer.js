import React from 'react';
import './TrailerPlayer.css';

const TrailerPlayer = ({ trailerUrl }) => (
    <div className="trailer-player">
        <iframe
            width="560"
            height="315"
            src={trailerUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    </div>
);

export default TrailerPlayer;
