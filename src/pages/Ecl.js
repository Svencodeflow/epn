import '../css/Ecl.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import franklin from '../image/kindpng_530.png';
import Server from '../image/server.png';


const Ecl = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [isServerVisible, setIsServerVisible] = useState(false);
    const [isActive, setIsActive] = useState(false);

    function toggleNavigation() {
        setIsActive(!isActive);
    }

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const toggleVisibility_server = () => {
        setIsServerVisible(!isServerVisible);
    };

    const isVisibleClass = () => {
        setIsVisible(false);
    };

    const isVisibleClass_server = () => {
        setIsServerVisible(false);
    };

    const handleClick = (e) => {
        setActiveLink(e);
        toggleVisibility();
        isVisibleClass_server();
    }

    const handleClick_server = (e) => {
        setActiveLink(e);
        isVisibleClass();
        toggleVisibility_server();
    }

    const handlevisibility = (e) => {
        setActiveLink(e);
        isVisibleClass_server();
        isVisibleClass();
    }


    function setActiveLink(e) {
        const listItems = document.querySelectorAll('.list');
        listItems.forEach((item) => {
            item.classList.remove('active');
        });
        e.target.closest('.list').classList.add('active');
    }


    useEffect(() => {
        const ioniconsModule = document.createElement('script');
        ioniconsModule.type = 'module';
        ioniconsModule.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js';
        document.body.appendChild(ioniconsModule);

        const ioniconsNomodule = document.createElement('script');
        ioniconsNomodule.nomodule = true;
        ioniconsNomodule.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js';
        document.body.appendChild(ioniconsNomodule);

        return () => {
            document.body.removeChild(ioniconsModule);
            document.body.removeChild(ioniconsNomodule);
        }
    }, []);




    return (
        <div className="ecl">
            <aside>
                <div className={`navigation ${isActive ? 'active' : ''}`}>
                    <div className="menuToggle" onClick={toggleNavigation}></div>
                    <ul>
                        <li className="list active" onClick={handlevisibility}>
                            <Link to={'/'} style={{ '--clr': '#f44336' }}>
                                <span className="icon"><ion-icon name="home-outline"></ion-icon></span>
                                <span className="text">Home</span>
                            </Link>
                        </li>
                        <li className="list" onClick={handlevisibility}>
                            <a href="#" style={{ '--clr': '#ffa117' }}>
                                <span className="icon"><ion-icon name="terminal-outline"></ion-icon></span>
                                <span className="text">UCP</span>
                            </a>
                        </li>
                        <li className="list" onClick={handleClick}>
                            <a href="#" style={{ '--clr': '#0fc70f' }}>
                                <span className="icon"><ion-icon name="analytics-outline"></ion-icon></span>
                                <span className="text">Changelogs</span>
                            </a>
                        </li>
                        <li className="list" onClick={handlevisibility}>
                            <a href="#" style={{ '--clr': '#2196f3' }}>
                                <span className="icon"><ion-icon name="person-outline"></ion-icon></span>
                                <span className="text">Team</span>
                            </a>
                        </li>
                        <li className="list" onClick={handleClick_server}>
                            <a href="#" style={{ '--clr': '#b145e9' }}>
                                <span className="icon"><ion-icon name="server-outline"></ion-icon></span>
                                <span className="text">Server</span>
                            </a>
                        </li>
                        <div className="indicator"></div>
                    </ul>
                </div>
            </aside>

            <section>
                <div className={`changelogs ${isVisible ? 'visible' : ''}`} >
                    <div className={`title  ${isVisible ? 'visible' : ''}`}>
                        <div>
                            <h1>Changelogs</h1>
                            <p>Here you can find all the changelogs of the server.</p>
                        </div>
                        <div>
                            <h1>ChanglogsV2</h1>
                            <p>Here you can find all the changelogs of the server.</p>
                        </div>
                        <div>
                            <h1>ChanglogsV3</h1>
                            <p>Here you can find all the changelogs of the server.</p>
                        </div>
                        <div>
                            <h1>ChanglogsV4</h1>
                            <p>Here you can find all the changelogs of the server.</p>
                        </div>
                    </div>
                </div>
                <div className={`server ${isServerVisible ? 'server_visible' : ''}`} >
                    <div className={`server_title  ${isServerVisible ? 'server_visible' : ''}`}>
                        <div>
                            <h1>Server</h1>
                            <p>Here you can find all the changelogs of the server.</p>
                        </div>
                        <div>
                            <img src={franklin} alt="franklin" />
                        </div>
                        <div>
                            <img src={Server} alt="server" />
                        </div>
                        <div>
                            <h1>How To Join</h1>
                            <p>Here you can find all the changelogs of the server.</p>
                        </div>
                    </div>
                </div>
            </section>
            <aside>
                <div className="right">
                </div>
            </aside>
        </div>
    );

}

export default Ecl;