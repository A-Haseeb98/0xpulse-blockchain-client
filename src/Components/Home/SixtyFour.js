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
      <section >
        <div className="wrapper">
          <div className="pieces__upper">
            <div className="pieces__upper__title">
              <h2><span>0x</span>Pulse:</h2>
            </div>
            <div className="pieces__upper__subtitle">
              <h3>the title</h3>

            </div>
          </div>

        </div>
            </section>
        </>
    );
};

export default SixtyFour;