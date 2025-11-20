"use client"

import React, { useState, useEffect, useRef } from 'react';
// import Image from "next/image"; // Removed Image as it's not used here

// These lines ensure your external CSS files are imported
import "../../app/css/main.css";
import "../../app/css/navbar.css";
import Link from 'next/link';

export default function explore() {
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
        <Link href="/explore/introduction" className='intro'>THE SINGING REVOLUTION</Link>
        <Link href="/explore/first-claim" className='claim1'>PROPAGANDA YOU COULD SING</Link>
        <Link href="/explore/second-claim" className='claim2'>MORE THAN JUST MUSIC</Link>
        <Link href="/explore/third-claim" className='claim3'>PROTEST THROUGH MUSIC</Link>
        <Link href="/explore/conclusion" className='conclusion'>A LASTING INFLUENCE</Link>
        </div>
    );
}