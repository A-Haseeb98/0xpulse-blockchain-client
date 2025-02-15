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
                        <Link to="/home"><span>0x</span>Pulse</Link>
                        <ul>
                            <li>
                                <a href="#connect" target="_blank" rel="noopener noreferrer">MARKETPLACE
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