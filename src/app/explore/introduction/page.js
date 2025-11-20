"use client"

import React, { useState, useEffect, useRef } from 'react';
// import Image from "next/image"; // Removed Image as it's not used here

// These lines ensure your external CSS files are imported
import "../../../app/css/main.css";
import "../../../app/css/navbar.css";
import Link from 'next/link';

export default function introduction() {
    return (
        <div>
        <div className="homeBackground"></div>
         <div className="overlay"></div>
        <div className="homepage-header">
          {/* NAV BAR ELEMENTS */}
          <div className="header-logo-overlay">
            <div className="header-logo"></div>
          </div>
          <Link href="/" className="home-button">
            <div className="home-text">Home</div>
          </Link>
          <Link href="/explore" className="explore-button">
            <div className="explore-text">Learn More...</div>
          </Link>
        </div>
        
        <div className='intro-title'>The music that Built the American Labor Movement</div>
        <div className='intro-description'>Think about your favorite song being played by a group of people as a form of protest. Yeah, that’s exactly the story of the IWW group, short for the Industrial Workers of the World. This was all back in the early 20th century. Back then life for the average worker was pretty bad. All from low pays, to poor treatment by their bosses. This is only a fraction of what the IWW had concerns for. They were trying to fight, but it wasn’t going well since, well, most workers didn’t really have time to listen or read long letters. So the IWW got creative. They started taking popular songs that everyone knew, and completely rewrote the lyrics. Genius! A fast way to communicate something important. As we go on, we will explore the musical activism of IWW musical artists that influenced reform during the American labor movement, spreading awareness of labor inequality and uniting workers using shared experiences while also inspiring workers to take actions against unfair conditions.</div>
        <div className='poster-intro'></div>
        <div className='intro-poster-description'>Poster Pushing for a Union Made by Father Thomas J. Hagerty and used in the Little Red Songbook of the IWW.
        </div>
        <Link href='/explore/first-claim' className="intro-next">
        <div className="intro-btn-text">{"---> Continue to the Next Section  --->"}</div>
        </Link>
        </div>
    );
}