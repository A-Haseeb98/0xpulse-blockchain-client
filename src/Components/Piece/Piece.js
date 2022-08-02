import React, { memo, useEffect, useRef } from "react";
import linkIcon from "../../Image/link.svg";
import Sketch from "react-p5";
import { useSelector } from "react-redux";
import { getCounter } from "../../Selectors/counter";
import useWindowSize from "../../Utilities/Hooks/useWindowSize";
import { Link } from "react-router-dom";


const Piece = ({piece}) => {
  const {tokenId} = piece;
  const p5ContainerRef = useRef();
  const {hash, d} = useSelector(getCounter)
  const {windowWidth} = useWindowSize();
  let marginRight = 20 + windowWidth/57
  if(windowWidth < 400) marginRight = 3
  else if(windowWidth < 590) marginRight = 10
  let width = windowWidth < 590 ? windowWidth*.9  - marginRight : ((windowWidth) / 4)  - marginRight;
  const height = width / 1.618

  const RenderP5 = ({p5ContainerRef, ID}) => {
    const {hash, d} = useSelector(getCounter)
    const p5Object = useRef(null)
    useEffect(() => {
      p5Object.current?.redraw()
    }, [hash, d])
    const setup = (p5,) => {
      p5Object.current = p5

      // use parent to render the canvas in this ref
      // (without that p5 will render the canvas outside of your component)
      p5.createCanvas(width, height).parent(p5ContainerRef.current);
    };

    const draw = (p5) => {
      p5.noLoop()
      p5.background(0);
      p5.ellipse(1, 100, 70, 70);
      // NOTE: Do not use setState in the draw function or in functions that are executed
      // in the draw function...
      // please use normal variables or class properties for these purposes
      p5.fill("white")
      p5.textSize(10);
      p5.text(d, 10, 10);
      p5.text(Math.random(), 20, 20);
      p5.stroke("red")
      p5.line(0, 50, windowWidth, 50)
    };

    return <Sketch setup={setup} draw={draw}/>;
  };

  return (
    <>
        <div className="pieces__cards__single">
          <span>{piece.title}</span>
          <a href={"http://progress.iftikharrasha.com/"+tokenId} target="_blank" rel="noopener noreferrer">
              <div className="heartbeat" ref={p5ContainerRef}>
                      <RenderP5 p5ContainerRef={p5ContainerRef} tokenId={tokenId}/>
              </div>
          </a>
          {
            !piece.reserved ? <ul>
              <li><p>{piece.price}</p></li>
              <li>
                <a target="_blank" rel="noopener noreferrer">Buy Now
                  <img src={linkIcon} alt="link"/>
                </a>
              </li>
            </ul> : <ul>
              <li></li>
              <li className="reserved">
                <h6>reserved</h6>
              </li>
            </ul>
          }
        </div>
    </>)
}

export default memo(Piece)