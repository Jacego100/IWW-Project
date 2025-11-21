"use client"

import React, { useState, useEffect, useRef } from 'react';
// import Image from "next/image"; // Removed Image as it's not used here

// These lines ensure your external CSS files are imported
import "../../../app/css/main.css";
import "../../../app/css/navbar.css";
import Link from 'next/link';

export default function conclusion() {
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
        
        <div className="conclusionTitle">A Lasting Influence</div>
        <div className="conclusionText">Through the use of music, the IWW successfully made a union and pushed for social change. They created a community where everyone felt like they belonged, and the music related to all workers, not just a select few. IWW’s work inspired workers to protest, which left a cultural impact that is still seen today.</div>
        <Link href="/bibliography" className="bib-button">
          <div className="bib-button-text">Bibliography</div>
        </Link>
        </div>
    );
}