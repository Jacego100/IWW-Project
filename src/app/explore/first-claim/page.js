"use client"

import React, { useState, useEffect, useRef } from 'react';
// import Image from "next/image"; // Removed Image as it's not used here

// These lines ensure your external CSS files are imported
import "../../../app/css/main.css";
import "../../../app/css/navbar.css";
import Link from 'next/link';

export default function firstClaim() {
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
        <div className="claim1-panga">
          <div className="claim1-strike"></div>
          <div className='clmim1-title'>1. The IWW’s use of catchy and understandable songs easily spread awareness of labor inequality and suggested reform among workers.</div>
        </div>
        <div className="claim1-to-ev1"></div>
        <div className="claim1-ev1Panga">
          <div className="c1-ev1-strike"></div>
          <div className="c1-ev1-title">EVIDENCE 1:</div>
          <div className='c1-ev1-para'>“By using popular tunes of the day it became a lot easier for workers (who usually couldn’t read notation) to instantly recognize the melodies and sing the songs themselves.”</div>
        </div>

        <div className="c1ev1-to-analysis"></div>

        <div className='claim1-analysis-title'>Analysis:</div>
        <div className="claim1-analysis">This quote shows why music IWW made worked so well. By taking catchy tunes that everyone already knew made it possible for workers to easily recognize those melodies. By using simple, understandable language in their songs, the IWW easily spread awareness from person to person.<br></br><br></br><div className="bold">Source:</div>Richard, Joe. “The Legacy of the IWW” Isreview.org, International Socialist Review, isreview.org/issue/86/legacy-iww/index.html. Accessed 12 Nov. 2025. 
        </div>
      
        <div className="claim1-to-ev2"></div>
        
        <div className="claim1-ev2Panga">
          <div className="c1-ev1-strike"></div>
          <div className="c1-ev1-title">EVIDENCE 2:</div>
          <div className='c1-ev2-para'>“The ideas of the IWW spread far beyond its formal membership, through its easily recognizable propaganda, its art, and through its famous songs written by, among others, Ralph Chaplin.”</div>
        </div>

        <div className="c1ev2-to-analysis"></div>
        <div className='claim1-analysis-title'>Analysis:</div>
        <div className="claim1-analysis">This quote shows how the IWW’s ideas spread. Their songs were so popular and easy to catch that they reached many people. This shows that those famous songs combined with recognizable propaganda were very effective and easy to spread. The IWW was therefore able to spread the things they believed and the changes they wanted to see.<br></br><br></br><div className="bold">Source:</div>Richard, Joe. “The Legacy of the IWW” Isreview.org, International Socialist Review, isreview.org/issue/86/legacy-iww/index.html. Accessed 12 Nov. 2025. 
        </div>

        <div className="claim1-to-ev3"></div>
        <div className="claim1-panga">
          <div className="claim1-strike"></div>
          <div className="c1-ev1-title">EVIDENCE 3:</div>
          <div className='c1-ev2-para'>“Songs were one of the key methods the Wobblies used to win hearts and minds.”</div>
        </div>

        <div className="c1ev3-to-analysis"></div>
        <div className='claim1-analysis-title'>Analysis:</div>
        <div className="claim1-analysis">This quote shows how songs were the key methods the IWW used to “win hearts and minds.” This means that they were successfully convincing workers to believe in their ideas and the need for reform. Music was the most effective way to spread awareness and show people why they should fight against labor inequality.<br></br><br></br><div className="bold">Source:</div>Masich, Matt. “The Life, Death and Afterlife of Joe Hill.” Utahlifemag.com, UtahLife, 14 Nov. 2024, www.utahlifemag.com/blog/post/the-life-death-and-afterlife-of-joe-hill. Accessed 17 Oct. 2025.
        </div>

        <Link href='/explore/second-claim' className="c1-next">
        <div className="c1-btn-text">{"---> Continue to the Next Section  --->"}</div>
        </Link>
        <div className="spacing"></div>
        </div>
    );
}