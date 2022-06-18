import React from 'react';
import { Link } from 'react-router-dom';
import linkIcon from '../../Image/link.svg';
import bgXs from '../../Image/background_img_xs.png';
import useWindowSize from '../../Utilities/Hooks/useWindowSize';

const Hero = () => {
    const { windowWidth } = useWindowSize();
    return (
            <>
                <section className="hero">
                    <div className="wrapper">
                        <div className="hero__upper">
                            <div className="hero__upper__left">
                                <h1><span>0x</span>PULSE:</h1>
                                <h2>The Blockchain's <span>Heartbeat</span></h2>
                            </div>
                            <div className="hero__upper__right">
                                {
                                    windowWidth < 575.98 ? <div className="hero__middle">
                                        <h4>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia†</h4>
                                    </div> : <p>0xd37e562a863c778f3e2caffbadb8de1 <br /> 1b1d0b793f665dad0ff325fb1bd9a5e10</p>
                                }
                            </div>
                        </div>

                        {
                            windowWidth < 575.98 ? <div className="hero__middle">
                                <img src={bgXs} alt="bgXs" />
                            </div> : null
                        }

                        <div className="hero__below">
                            <div className="hero__below__left">{
                                    windowWidth < 575.98 ? <div className="hero__middle">
                                        <p>0xd37e562a863c778f3e2caffbadb8de1 <br /> 1b1d0b793f665dad0ff325fb1bd9a5e10</p>
                                    </div> : <h4>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia†</h4>
                                }
                            </div>
                            <div className="hero__below__right">
                                <ul>
                                    <li>
                                        <Link to="/about">Learn more
                                            <img src={linkIcon} alt="link" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
};

export default Hero;