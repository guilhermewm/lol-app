import React, { MutableRefObject, useRef, useState } from 'react';
import { animated, useSpring } from 'react-spring';

import './card.css';

const trans = (x: number, y: number, s: number) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Card: React.FC = ({children}) => {
  const ref = useRef<any>();
  const [isHovered, setHovered] = useState(false);

  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      xys: [0, 0, 1],
      config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 }
    };
  });
       
  return (
    <animated.div
        ref={ref as MutableRefObject<any>}
        className="card"
        onMouseEnter={() => setHovered(true)}
        onMouseMove={({ clientX, clientY }) => {
        const x = clientX - (ref?.current?.offsetLeft - (window.scrollX || window.pageXOffset || document.body.scrollLeft));
        const y = clientY - (ref?.current?.offsetTop - (window.scrollY || window.pageYOffset || document.body.scrollTop));
        const dampen = 50;
        const xys = [
            -(y - ref?.current?.clientHeight / 2) / dampen,
            (x - ref?.current?.clientWidth / 2) / dampen,
            1.07
        ];
        setAnimatedProps({ xys: xys });
        }}
        onMouseLeave={() => {
        setHovered(false);
        setAnimatedProps({ xys: [0, 0, 1] });
        }}
        style={{
            zIndex: isHovered ? 2 : 1,
            transform: animatedProps.xys.interpolate(trans as any)
        }}
    >
        {children}
    </animated.div>
  )
}

export default Card;