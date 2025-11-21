"use client"

import React, { useState, useEffect, useRef } from 'react';
// import Image from "next/image"; // Removed Image as it's not used here

// These lines ensure your external CSS files are imported
import "../../app/css/main.css";
import "../../app/css/navbar.css";
import Link from 'next/link';

export default function bibliography() {
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
        
        <div className="conclusionTitle">Annotated Bibliography</div>
        <div className="bib-content1">Masich, Matt. “The Life, Death and Afterlife of Joe Hill.” Utahlifemag.com, UtahLife, 14 Nov. 2024, www.utahlifemag.com/blog/post/the-life-death-and-afterlife-of-joe-hill. Accessed 17 Oct. 2025. This is a secondary source online article from November 14th, 2024 written by Matt Masich and published by UtahLife. The author wrote this source in order to tell the story of John Hill, a Member of the IWW group who was executed in Utah. He wrote it to show how his life, trial, and death became important for workers and their rights as well as justice. This online article is about the life of a musical man named Joe Hill, his trial, and his execution. It also talks about how he became an inspiration for the rights of workers and labor movements after his execution. This source is helpful to my research since it explained how Joe Hill’s music was used to spread ideas about labor rights and inspire workers. His music was used as a tool for reform by introducing a social change that impacted many people.</div>
        <div className="bib-content2">Ann, Kimberly. “Don’t Mourn ... Organize! Remembering Joe Hill and His Music - Left Voice.” Left Voice, International Network, 19 Nov. 2021, www.leftvoice.org/dont-mourn-organize-remembering-joe-hills-music/. Accessed 18 Oct. 2025. This is a secondary source online article from November 19th, 2021 written by Kimberly Ann and published by Left Voice. The author wrote this source in order to appreciate Joe Hill on the anniversary of his death and show how his music inspired workers to resist unfair treatment, and show how his work can still be seen in society today. This online article is about Joe Hill’s influence on society, showing how his music encouraged modern workers to take action for workers rights rather than only remembering him. This source is helpful for my research because it shows how Joe Hill used songs to make a change in society and demonstrates how music was a tool for reform by motivating people and influencing workers’ rights.</div>
        <div className="bib-content3">“Joe Hill’s Last Will (1915).” Joe Hill, WordPress, 6 Feb. 2015, joehill100.com/joe-hill-songs/joe-hills-last-will-1915/. Accessed 6 Nov. 2025. This is a primary source website consisting of song lyrics Joe Hill wrote himself from February 6th, 2015 written by HLF and published by WordPress. The author wrote this source in order to share and preserve the text of his last song which was written on the day before his execution so readers can remember him and his work. This online article is about a song Joe Hill wrote a day before his execution, showing the full text of the song and therefore showing his activism, even before his death. This source is helpful for my research because it shows an example of how Joe Hill used music as a form of activism and protest, inspiring workers to be aware of their rights, even at his weakest point, before his death.</div>
        <div className="bib-content4">TB, Rudolf. “Music and the IWW: The Creation of a Working Class Counterculture - RudolfTB.” Libcom.org, Libcom, 24 Mar. 2010, libcom.org/article/music-and-iww-creation-working-class-counterculture-rudolftb. Accessed 10 Nov. 2025. This is a secondary source online informational article from March 24th, 2010 written by Rudolf TB and published by Libcom. The author wrote this source in order to explain how the IWW used music as a tool for uniting workers and explain the role of songs in labor and social change. This online article is about how the IWW used music to organize and inspire workers, as well as resist the social system of the time. This source is helpful for my research because it shows how the IWW used songs to encourage social change and unite workers which includes the use of music.</div>
        <div className="bib-content5">Richard, Joe. “The Legacy of the IWW” Isreview.org, International Socialist Review, isreview.org/issue/86/legacy-iww/index.html. Accessed 12 Nov. 2025. This is a secondary source online article written by Joe Richard and published by International Socialist Review. The author wrote this source in order to explain the impact of the IWW and show why the group’s ideas and strategies still matter today. This online article is about the history of the IWW, and about how it challenged labor conditions. It explains the successes as well as failures of the IWW, along with influence on workers after the IWW. This source is helpful for my research because it shows how the IWW aimed for big changes in the labor community helping me to understand the musical reform a lot better, especially from the point of view of Joe Hill.</div>

        <div className='spacing-bib'></div>
        </div>
    )
}