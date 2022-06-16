import React from 'react';
import useWindowSize from '../../Utilities/Hooks/useWindowSize';

const WhyDoes = () => {
    const { windowWidth } = useWindowSize();

    return (
        <>
            <section className="why">
                {
                    windowWidth > 991.98 ? <div className="greenBg"></div> : null
                }
                <div className="wrapper">
                    <div className="why__upper">
                        <h2>Why does it <span>Matter?</span></h2>
                    </div>
                    <div className="why__below">
                        <div className="why__below__left">
                            <p>voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.  <br /><br />
                                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo</p>
                        </div>
                        <div className="why__below__right">
                            <p>†At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhyDoes;