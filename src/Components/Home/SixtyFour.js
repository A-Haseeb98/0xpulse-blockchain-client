import React from 'react';
import useWindowSize from '../../Utilities/Hooks/useWindowSize';

const SixtyFour = () => {
    const { windowWidth } = useWindowSize();

    return (
        <>
            <section className="pieces">
                <div className="wrapper">
                    <div className="pieces__upper">
                        <h2><span>0x</span>Pulse:</h2>
                    </div>
                    <div className="pieces__below">
                        <h3>the 64 pieces</h3>
                        {
                            windowWidth > 575.98 ? 
                            <div className="pieces__below__tag">
                                <p>Block 14922540 — Tue, 07 Jun 2022 19:23:33:<br />
                                0x<span>d37e562a863c778f3e2caffbadb8de11b1d0b793f665dad0ff325fb1bd9a5e10</span></p>
                            </div> : null
                        }

                        {
                            windowWidth < 576 ? 
                            <div className="pieces__below__tag">
                                <p>Block 14922540 <br /> Tue, 07 Jun 2022 19:23:33:<br />
                                0x<span>d37e562a863c778f3e2caffbadb8de1<br />1b1d0b793f665dad0ff325fb1bd9a5e10</span></p>
                            </div> : null
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default SixtyFour;