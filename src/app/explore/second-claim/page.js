"use client"

import React, { useState, useEffect, useRef } from 'react';
// import Image from "next/image"; // Removed Image as it's not used here

// These lines ensure your external CSS files are imported
import "../../../app/css/main.css";
import "../../../app/css/navbar.css";
import Link from 'next/link';

export default function secondClaim() {
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
        <div className='clmim1-title'>2. IWW’s songs, including Joe Hill's, united workers by relating to all workers, therefore creating a unity and a strong labor movement.</div>
      </div>
      <div className="claim1-to-ev1"></div>
      <div className="claim1-ev1Panga">
        <div className="c1-ev1-strike"></div>
        <div className="c1-ev1-title">EVIDENCE 1:</div>
        <div className='c1-ev1-para'>“Another important function of music…is that it can help to create a feeling of belonging to a greater whole, and thus to meld a community together”</div>
      </div>

      <div className="c1ev1-to-analysis"></div>

      <div className='claim1-analysis-title'>Analysis:</div>
      <div className="claim1-analysis">This quote shows that the songs of the IWW achieved success by creating a union where everyone was included. Their music allowed the workers to feel like they belong and share experiences with many other workers.<br></br><br></br><div className="bold">Source:</div>TB, Rudolf. “Music and the IWW: The Creation of a Working Class Counterculture - RudolfTB.” Libcom.org, Libcom, 24 Mar. 2010, libcom.org/article/music-and-iww-creation-working-class-counterculture-rudolftb. Accessed 10 Nov. 2025.
      </div>
    
      <div className="claim1-to-ev2"></div>
      
      <div className="claim1-panga">
        <div className="claim1-strike"></div>
        <div className="c1-ev1-title">EVIDENCE 2:</div>
        <div className='c1-ev2-para'>“Joe Hill, who wrote some of the most famous labor ballads and hymns ever produced for the world working-class movement.”</div>
      </div>

      <div className="c2ev3-to-analysis"></div>
      <div className='claim1-analysis-title'>Analysis:</div>
      <div className="claim1-analysis">This quote shows how music was and still is a strong tool for social change due to the fact that it can easily unite people by being straightforward with sharing ideas. By adding humor to the songs, IWW artists, including Joe Hill created simple songs that unified and built a community.<br></br><br></br><div className="bold">Source:</div>Richard, Joe. “The Legacy of the IWW” Isreview.org, International Socialist Review, isreview.org/issue/86/legacy-iww/index.html. Accessed 12 Nov. 2025. 
      </div>

      <div className="arrow-oi"></div>
      <div className="claim1-ev1Panga">
        <div className="c1-ev1-strike"></div>
        <div className="c1-ev1-title">EVIDENCE 3:</div>
        <div className='c1-ev2-para'>“Utilizing well-known melodies, mostly from hymns, he wrote sharply funny lyrics that mock the capitalist system, aimed at rallying the working class to rise up.”</div>
      </div>

      <div className="oioi2"></div>
      <div className='claim1-analysis-title'>Analysis:</div>
      <div className="claim1-analysis">This quote shows that music was a highly effective tool for creating a community that could take action since it was very easily interpreted through the use of well-known melodies, and replacing them with funny lyrics which actually mocked the labor system. By using familiar tunes, the message was easily spread, allowing the workers to have a powerful voice.<br></br><br></br><div className="bold">Source:</div>Ann, Kimberly. “Don’t Mourn ... Organize! Remembering Joe Hill and His Music - Left Voice.” Left Voice, International Network, 19 Nov. 2021, www.leftvoice.org/dont-mourn-organize-remembering-joe-hills-music/. Accessed 18 Oct. 2025.
      </div>

      <Link href='/explore/third-claim' className="c1-next">
      <div className="c1-btn-text">{"---> Continue to the Next Section  --->"}</div>
      </Link>
      <div className="spacing"></div>
      </div>
    );
}