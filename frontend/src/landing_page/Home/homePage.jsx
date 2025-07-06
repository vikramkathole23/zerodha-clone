import React from 'react';
import Hero from './hero';
import Education from './education';
import Pricing from './pricing';
import Stats from './stats';
import Navbar from '../../Navbar';
import Signup from '../../OpenAccount';
import Footer from '../../Footer';



const HomePage = () => {
  return (
    <div>
      {/* <h1>Hello from HomePage</h1> */}
      <Hero />
      <Stats/>
      <Pricing />
      <Education />
      <Signup />
    </div>
  );
};

export default HomePage;
