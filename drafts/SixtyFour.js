import React, { useEffect, useRef, useState } from 'react';
import { pieces } from '../../Data/pieces.js';
import useWindowSize from '../../Utilities/Hooks/useWindowSize';
import { useSelector } from "react-redux";
import { getCounter } from "../../Selectors/counter";
import Piece from "../../Components/Piece/Piece";

const SixtyFour = () => {
  const {windowWidth} = useWindowSize();
  const {hash, d} = useSelector(getCounter)

  return (
    <>
      <section className="pieces">
        <div className="wrapper">
          <div className="pieces__upper">
            <div className="pieces__upper__title">
              <h2><span>0x</span>Pulse:</h2>
            </div>
            <div className="pieces__upper__subtitle">
              <h3>the 64 pieces</h3>
              {
                windowWidth > 575.98 ?
                  <div className="pieces__upper__subtitle__tag">
                    <p>{d}<br/>
                      <span>{hash}</span></p>
                  </div> : null
              }

              {
                windowWidth < 576 ?
                  <div className="pieces__upper__subtitle__tag">
                    <p>Block 14922540 <br/> Tue, 07 Jun 2022 19:23:33:<br/>
                      0x<span>d37e562a863c778f3e2caffbadb8de1<br/>1b1d0b793f665dad0ff325fb1bd9a5e10</span></p>
                  </div> : null
              }
            </div>
          </div>
          <div className="pieces__cards">
            {hash !== null && d !== null &&
              pieces.map((piece, index) => (
                <Piece piece={piece} key={index}/>
              ))
            }
          </div>
        </div>
            </section>
        </>
    );
};

export default SixtyFour;