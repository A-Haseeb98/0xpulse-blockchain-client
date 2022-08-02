import React from 'react';
import useWindowSize from '../../Utilities/Hooks/useWindowSize';

const Auctor = () => {
    const { windowWidth } = useWindowSize();

    return (
        <>
            <section className="auctor">
                {
                    windowWidth > 991.98 ? <div className="greenBg"></div> : null
                }
                <div className="wrapper">
                    <div className="auctor__upper">
                        {
                            windowWidth > 576 ?  <h2>Infinite, Unique and</h2> :  <h2>Infinite, <br /> Unique and</h2>
                        }
                        <div className="auctor__upper__top">
                            
                            {
                                windowWidth > 576 ?  <h3>Impossible to predice</h3> :  <h3>Impossible <br /> to predict</h3>
                            }
                            {
                                windowWidth > 576 ?  <p>Quae te hic 64 moriar te est firmissime ut <br /> zelose, sufficit sed meritorius mi docebit.</p> : <p>Quae te hic 64 moriar te est firmissime ut zelose, sufficit sed meritorius mi docebit.</p>
                            }
                            
                        </div>
                    </div>
                    <div className="auctor__below">
                        <div className="auctor__below__left">
                            <p>Auctor moderno dis quam dolor, hic earum praedam ad est dolor nemo nam est fames dis meruerunt arcui te arcu omnis (2-7, s-s), per leo metus facer nonummy ex est quos sed hic irritare, quasi te quovis ut modo id est 64 cuncta. Quo fusce fioniam ut o dispendio sint poenas modo fuga ullo et ita usus, rem est successore porta mus nisl morbi vincit y populo justo malevolentia maiores orci: dui kopenhagen rem id id magni Φ et aut mazim porta quia vel odit mirum.</p>
                            
                            {
                                windowWidth > 991.98 ? <p className="mt8 b0">Memoriam, dis 64 legere subiungam hic <br /> observatis’e nibh, dextram, sem laesio.</p> : null
                            }
                            
                        </div>
                        <div className="auctor__below__right">
                            <p>Notitiam adverso earum culpa et vel etninentis elit hosticum te occurent y rem culpa iste vero quo magni periclitanti. Non sparsim mi debila: ad eget ea Scandala nulla, ac elit CoRpori.</p>
                            <p className="mt3">Praeveniri at reverti carbone ita quarta cursum ad hic natus cras, hac dui porta quae in vestimentorum: iste ea ad diebus urna eius leo orci nobis modo elit ad, natione elit ab unde quam orci PrOprio illo sunt typi oceani est importunas’y duis nisi.</p>
                        </div>

                        {
                            windowWidth < 992 ? <div className="auctor__below__p">
                                <p>Memoriam, dis 64 legere subiungam hic <br /> observatis’e nibh, dextram, sem laesio.</p>
                            </div> : null
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Auctor;