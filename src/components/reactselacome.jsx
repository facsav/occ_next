"use client";


import React, { useRef, useState } from 'react';
import './../styles/ReproductorVideos.css';

export default function Reactselacome({video}) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    videoRef.current.muted = !isMuted;
  };

  return (
    <div className="video-player-container">
      <video
        ref={videoRef}
        controls={false}
        preload="metadata"
        onClick={togglePlayPause}
       className="portada-video"
      >
        <source src={video} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <button
        className={`play-pause-button ${isPlaying ? 'opaque' : ''}`}
        onClick={togglePlayPause}
      >
      {isPlaying ? '\u275A\u275A' : '\u25B6'}
      </button>
      <button className="mute-button" onClick={toggleMute}>
      {isMuted ? <span role="img" aria-label="Unmute" style={{ textDecoration: 'line-through' }}>&#128266;</span> : <span role="img" aria-label="Mute">&#128266;</span>}
      </button>
    </div>
  );
};