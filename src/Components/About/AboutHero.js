import React from 'react';
import bgXs from '../../Image/background_img_xs.svg';
import useWindowSize from '../../Utilities/Hooks/useWindowSize';

const AboutHero = () => {
    const { windowWidth } = useWindowSize();

    return (
            <>
                <section className="about">
                    <div className="wrapper">
                        <div className="about__upper">
                            <div className="about__upper__left">
                                <h2>about</h2>
                                <h1><span>0x</span>PULSE</h1>
                            </div>
                        </div>

                        {
                            windowWidth < 575.98 ? <div className="hero__middle">
                                <img src={bgXs} alt="bgXs" />
                            </div> : null
                        }
                    </div>
                </section>
            </>
        );
};

export default AboutHero;