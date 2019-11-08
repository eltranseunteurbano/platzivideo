import React from 'react'
import './Player.css';

const Player = () => {
    return(
        <div className="Player">
                <video controls autoPlay>
                    <soucer src="" type="video/mp4" />
                </video>

                <div className="Player-black">
                    <button type="button">
                        Regresar
                    </button>
                </div>
        </div>
        )
}

export default Player;