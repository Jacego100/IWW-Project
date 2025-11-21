"use client"

import React, { useState, useEffect, useRef } from 'react';
// import Image from "next/image"; // Removed Image as it's not used here

// These lines ensure your external CSS files are imported
import "../app/css/main.css";
import "../app/css/navbar.css";
import Link from 'next/link';

// --- Rotating Text Logic (Integrated) ---

const ROTATING_WORDS = ['Unity', 'Protest', 'Change', 'Action', 'Solidarity']; // Assuming leading spaces are removed
const PAUSE_DURATION = 5000; 

const ScrollingTextWheel = () => {
  const [wordOffset, setWordOffset] = useState(0);
  const [maxWidth, setMaxWidth] = useState(null);
  const maskRef = useRef(null); 
  
  // Define the width calculation function outside of the effects
  const calculateMaxWidth = () => {
    if (typeof window === 'undefined') return;

    // Create a temporary, hidden element to measure the words
    const measureElement = document.createElement('span');
    measureElement.style.visibility = 'hidden';
    measureElement.style.position = 'absolute';
    
    // CRITICAL: Must match the styling of the words in .homepage-title
    measureElement.style.fontFamily = 'font-face';
    measureElement.style.fontWeight = 'bold';
    measureElement.style.fontSize = '5.0vw'; // Use VW for accurate measurement
    measureElement.style.whiteSpace = 'nowrap';

    document.body.appendChild(measureElement);

    let maxW = 0;
    
    ROTATING_WORDS.forEach(word => {
      measureElement.textContent = word;
      const currentWidth = measureElement.offsetWidth;
      if (currentWidth > maxW) {
        maxW = currentWidth;
      }
    });

    document.body.removeChild(measureElement);

    // Add a small buffer (e.g., 5px) for the 3D effect/padding
    const buffer = 5; 
    const finalWidth = maxW + buffer; 
    
    // Set the state and the CSS variable
    if (maskRef.current) {
        maskRef.current.style.setProperty('--max-word-width', `${finalWidth}px`);
    }
    setMaxWidth(finalWidth);
  };
  

  // --- EFFECT 1: Calculate Max Width on Mount AND Resize ---
  useEffect(() => {
    // 1. Run once on mount
    calculateMaxWidth();
    
    // 2. Run every time the window is resized
    window.addEventListener('resize', calculateMaxWidth);

    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', calculateMaxWidth);
    };
  }, []); // Empty dependency array means this runs only on mount/unmount


  // --- EFFECT 2: Word Rotation Loop (No Change) ---
  useEffect(() => {
    const intervalId = setInterval(() => {
      setWordOffset(currentOffset => {
        return (currentOffset + 1) % ROTATING_WORDS.length;
      });
    }, PAUSE_DURATION); 

    return () => clearInterval(intervalId);
  }, []); 

  // Calculate the vertical transform unit
  const translateYValue = wordOffset * -1; 

  return (
    <div 
        className="scrolling-wheel-mask"
        ref={maskRef} 
        style={{ 
            '--word-offset': `${translateYValue}`,
            // We set the --max-word-width via ref in useEffect, but keep this fallback
            '--max-word-width': maxWidth ? `${maxWidth}px` : undefined 
        }}
    >
      <div className="word-scroller">
        {ROTATING_WORDS.map((word, index) => (
          <div 
            key={word} 
            className={`wheel-word ${index === wordOffset ? 'active' : ''}`}
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Main Page Component (No Changes Needed Here) ---

export default function Home() {
  return (
    <div className="homeBackground">
      <div className="overlay">
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
        
        {/* HOMEPAGE TITLE */}
        <div className="title-container">
            <div className="homepage-title">
                Discover the Songs of 
                <ScrollingTextWheel/> 
            </div>
        </div>
        
        <div className="homepage-description">The IWW built a very strong movement with music, not just pamphlets. Composers such as Joe Hill wrote memorable labor ballads by setting new, relevant lyrics to familiar melodies. The songs drew together the workers, inspired them to rise up against unfavorable conditions, and left their cultural mark even to this day.</div>
      </div>
      <div className="learn-mora">
        <Link href="/explore" className="learn-mora-text">Learn More...</Link>
      </div>
    </div>
  );
}