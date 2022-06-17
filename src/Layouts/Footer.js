import React from 'react';
import licence from '../Image/licence.png';
import useWindowSize from '../Utilities/Hooks/useWindowSize';

const Footer = () => {
    const { windowWidth } = useWindowSize();

    return (
        <>
            <footer className="footer">
                <div className="wrapper">
                    <div className="footer__content">
                        {
                            windowWidth < 991.98 && windowWidth > 576 ? 
                            <div className="footer__content__upper">
                                <h4><span>0x</span>Pulse</h4>
                                <p>This work is licensed under a Creative Commons <br /> Attribution-NonCommercial 4.0 International License.</p>
                                <img src={licence} alt="licence" />
                            </div> : 
                            <div className="footer__content__upper">
                                <h4><span>0x</span>Pulse</h4>
                            </div>
                        }

                        {
                            windowWidth < 991.98 && windowWidth > 576 ? 
                            null : 
                            <div className="footer__content__middle">
                                <p>This work is licensed under a Creative Commons <br /> Attribution-NonCommercial 4.0 International License.</p>
                                <img src={licence} alt="licence" />
                            </div>
                        }
                        
                        <ul>
                            <li><a href="#terms-conditions">Terms & Conditions</a></li>
                            <li><a href="#privacy-policy">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;