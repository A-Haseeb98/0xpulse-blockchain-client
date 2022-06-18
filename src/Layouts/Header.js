import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import linkIcon from '../Image/link.svg';

const Header = () => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scrollHeight = window.scrollY;
            setScroll(scrollHeight > 5);
        })
    }, []);

    return (
        <>
           <header className={scroll ? "header fixed-header" : "header"} id="header">
                <div className="wrapper">
                    <div className="header__nav">
                        <Link to="/home">0xPulse</Link>
                        <ul>
                            <li>
                                <a href="#twitter" target="_blank" rel="noopener noreferrer">TWITTER
                                    <img src={linkIcon} alt="link" />
                                </a>
                            </li>
                            <li>
                                <a href="#connect" target="_blank" rel="noopener noreferrer">CONNECT
                                    <img src={linkIcon} alt="link" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header> 
        </>
    );
};

export default Header;