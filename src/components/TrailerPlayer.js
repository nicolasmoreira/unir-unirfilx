import React from 'react';
import './TrailerPlayer.css';

const TrailerPlayer = ({trailerUrl}) => {
    const videoId = trailerUrl.split('v=')[1];
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="trailer-player">
            <iframe
                width="800"
                height="450"
                src={embedUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default TrailerPlayer;
