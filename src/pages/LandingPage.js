import React, { useState } from 'react';
import ReactPlayer from 'react-player'
import video from '../video/video.mp4'
import '../css/LandingPage.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {

    const [x, setX] = useState(0);
    const [y, sety] = useState(0);

    function handleMouseMove(e) {
        const rect = e.target.getBoundingClientRect();
        const newX = (e.clientX - rect.left) * 3;
        setX(newX);
    }

    function handleMouseMove1(e) {
        const rect = e.target.getBoundingClientRect();
        const newy = (e.clientX - rect.left) * 3;
        sety(newy);
    }

    return (

        <div className='landing_page'>
            <div className="player-wrapper">
                <ReactPlayer width='50vw' height='50vh' controls muted playing loop={true} url={video} />
            </div>
            <div className='button_style' >
                <div className='gta_button' >
                    <Link to='/empirecitylife'>
                        <button
                            onMouseMove={handleMouseMove}
                            style={{ '--x': `${x}deg` }}
                        >

                            <i></i>
                            <i></i>
                            <span>Empire City Life</span>
                        </button>
                    </Link>
                </div>
                <div className='Empire'>
                </div>
                <div className='mc_button' >
                    <Link to='/empirecity'>
                        <button
                            onMouseMove={handleMouseMove1}
                            style={{ '--x': `${y}deg` }}
                        >

                            <i></i>
                            <i></i>
                            <span>Empire City</span>
                        </button>
                    </Link>
                </div>
            </div>

        </div >
    );
}

export default LandingPage;