import React from 'react';
import useWindowSize from '../../Utilities/Hooks/useWindowSize';
import greenBG from '../../Image/background_img2.svg';

const HeroScreen = () => {
    const { windowWidth } = useWindowSize();

    return (
        <>
              <section className="heroScreen">
                    <div className="wrapper">
                        <div className="flex">
                            <div className="heroScreen__left">
                                <div className="heroScreen__left__top">
                                    <h1><span>0x</span>PULSE</h1>
                                    <h2>the blockchain's heartbeat</h2>
                                </div>
                                <div className="heroScreen__left__below">
                                    {
                                        windowWidth > 991.98 || windowWidth < 575.98 ? <div className="heroScreen__middle">
                                            <h4>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia<span className="green">†</span></h4>
                                        </div> : <p>0xd4e56740f876aef8c010b86a40d5f56 <br /> 745a118d0906a34e<span className="green">6</span>9aec8c0db1cb8fa3</p>
                                    }
                                </div>
                            </div>

                            <div className="heroScreen__right">
                                <img src={greenBG} alt="greenBG" />
                                {
                                    windowWidth > 991.98 || windowWidth < 575.98 ? 
                                    <p>0xd4e56740f876aef8c010b86a40d5f56 <br /> 745a118d0906a34e<span className="green">6</span>9aec8c0db1cb8fa3</p>
                                    : <h4>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia<span className="green">†</span></h4>
                                }
                            </div>
                        </div>
                    </div>
                </section>
        </>
    );
};

export default HeroScreen;