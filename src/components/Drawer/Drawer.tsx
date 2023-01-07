import { useSpring, animated } from '@react-spring/web';
import React from 'react';

const Drawer = ({ show }: any) => {
  const props = useSpring({
    left: show ? window.innerWidth - 300 : window.innerWidth,
    position: 'absolute',
    top: 0,
    backgroundColor: '#806290',
    height: '100vh',
    width: '300px',
  });

  return (
    <animated.div>
      <div className='drawer'>Animated Drawer!</div>
    </animated.div>
  );
};

export default Drawer;
