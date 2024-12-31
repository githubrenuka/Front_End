import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Animation = () => {
  return (
    <TypeAnimation
      sequence={[
        'Creative  Solutions for Growth', // Types the text
        5000, // Waits for 2 seconds
       
        
      ]}
      wrapper="h1"
      speed={25} // Adjusted speed for slower typing
      style={{ fontSize: '1.5em', display: 'inline-block' ,fontWeight:'bold'}}
      repeat={Infinity}
      cursor={false} // Disables the blinking cursor
    />
  );
};

export default Animation;
