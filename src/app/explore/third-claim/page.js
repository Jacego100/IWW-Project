"use client"

import React, { useState, useEffect, useRef } from 'react';
// import Image from "next/image"; // Removed Image as it's not used here

// These lines ensure your external CSS files are imported
import "../../../app/css/main.css";
import "../../../app/css/navbar.css";
import Link from 'next/link';

export default function thirdClaim() {
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
        <div className='clmim1-title'>3. Music created by the IWW group inspired workers to protest against unfair working conditions, demanding for change.</div>
      </div>
      <div className="claim1-to-ev1"></div>
      <div className="claim1-ev1Panga">
        <div className="c1-ev1-strike"></div>
        <div className="c1-ev1-title">EVIDENCE 1:</div>
        <div className='c1-ev1-para'>“They kept on propagating their idea…by handing out cards with alternative lyrics to psalm tunes, and got the people who gathered to sing along.”</div>
      </div>

      <div className="c1ev1-to-analysis"></div>

      <div className='claim1-analysis-title'>Analysis:</div>
      <div className="claim1-analysis">This quote shows how the IWW successfully used known melodies such as psalm tunes with alternative lyrics which related to all of the workers. They were able to create a unity in the labor movement, which connected the workers together into one community that protested against unfair working conditions.<br></br><br></br><div className="bold">Source:</div>TB, Rudolf. “Music and the IWW: The Creation of a Working Class Counterculture - RudolfTB.” Libcom.org, Libcom, 24 Mar. 2010, libcom.org/article/music-and-iww-creation-working-class-counterculture-rudolftb. Accessed 10 Nov. 2025.
      </div>
    
      <div className="oioi3"></div>
      
      <div className="claim1-ev1Panga">
        <div className="c1-ev1-strike"></div>
        <div className="c1-ev1-title">EVIDENCE 2:</div>
        <div className='c1-ev2-para'>“The cultural impact of the IWW on the history of the US Left persists to this day, with many of the songs written by its bards still being sung at protests and demonstrations.”</div>
      </div>

      <div className="oioi4"></div>
      <div className='claim1-analysis-title'>Analysis:</div>
      <div className="claim1-analysis">This quote shows that the IWW’s songs not only had an impact on the workers, but it also had an impact on the culture and history of the U.S. in which is seen today. Through music, IWW artists slowly made political change and united people, creating a strong labor movement. Many of the IWW’s songs are still sung at protests today.<br></br><br></br><div className="bold">Source:</div>Richard, Joe. “The Legacy of the IWW” Isreview.org, International Socialist Review, isreview.org/issue/86/legacy-iww/index.html. Accessed 12 Nov. 2025. 
      </div>

      <div className="oioi5"></div>
      <div className="claim3-ev3Panga">
        <div className="c3-ev3-strike"></div>
        <div className="c1-ev1-title">EVIDENCE 3:</div>
        <div className='c1-ev2-para'>“This is my last and final will. Good luck to all of you.”</div>
      </div>

      <div className="oioi6"></div>
      <div className='claim1-analysis-title'>Analysis:</div>
      <div className="claim1-analysis">This quote shows how even in his final moments, Joe Hill was still standing strong being committed in keeping his movement alive. By saying “Good luck,” he asks everyone to continue his work in protesting, and that he wishes everyone good luck, as a way to say goodbye.<br></br><br></br><div className="bold">Source:</div>“Joe Hill’s Last Will (1915).” Joe Hill, WordPress, 6 Feb. 2015, joehill100.com/joe-hill-songs/joe-hills-last-will-1915/. Accessed 6 Nov. 2025.
      </div>

      <Link href='/explore/conclusion' className="c1-next">
      <div className="c1-btn-text">{"---> Continue to the Next Section  --->"}</div>
      </Link>
      <div className="spacing2"></div>
      </div>
    );
}