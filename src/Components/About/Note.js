import React from 'react';
import useWindowSize from '../../Utilities/Hooks/useWindowSize';

const Note = () => {
    const { windowWidth } = useWindowSize();

    return (
        <>
            <section className="note">
                <div className="wrapper">
                    <div className="note__upper">
                        <h2>A note on the </h2>
                        <div className="note__upper__top">
                            <h3>block hash</h3>
                        </div>
                    </div>
                    <div className="note__below">
                        <div className="note__below__left">
                            <p>Blockchains move in steps, or “blocks”. In Ethereum’s case around once every 14 seconds. All changes made to the blockchain’s state during that time are digested into the block hash, which can be thought of as a unique digital fingerprint:  </p>
                            <h4>even if just one comma were different, the block hash would be totally different</h4>
                            <p>And as every block takes as part of its input the previous block’s hash, every block hash is in a sense a complete history of the blockchain up to that moment in time.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Note;