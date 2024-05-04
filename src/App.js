import React from 'react';
import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
import { useGSAP } from '@gsap/react';

import Router from './router';
import Header from './components/Header';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

function App() {
  return (
    <>
      <Header />
      <Router />
    </>
  );
}

export default App;
