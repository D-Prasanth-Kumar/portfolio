'use client';

import { useRef, useState, useEffect } from 'react';
import { FiPlay, FiPause, FiVolume2, FiVolumeX } from 'react-icons/fi'; 

interface VideoCoverProps {
  src: string;
  poster?: string;
  className?: string;
}

export default function VideoCover({ src, poster, className = '' }: VideoCoverProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true); 
  const [isMuted, setIsMuted] = useState(true);     
  const [progress, setProgress] = useState(0);

  // Toggle Play/Pause
  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Toggle Mute/Unmute
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      // Toggle the muted property on the video element
      const newMutedState = !videoRef.current.muted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      if (duration > 0) {
        setProgress((current / duration) * 100);
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    setProgress(newValue); 
    
    if (videoRef.current && videoRef.current.duration) {
      const newTime = (newValue / 100) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
    }
  };

  return (
    <div
      className={`relative w-full h-full overflow-hidden group bg-black/5 dark:bg-black/40 flex items-center justify-center ${className}`}
    >
      {/* VIDEO */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-contain"
        playsInline
        autoPlay       // Starts automatically
        muted={isMuted} 
        loop
        onClick={togglePlay}
        onTimeUpdate={handleTimeUpdate} 
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* CONTROLS OVERLAY */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">
        
        {/* Play/Pause Center Button */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white">
                <FiPlay size={32} className="ml-1" />
             </div>
          </div>
        )}

        {/* BOTTOM CONTROLS BAR */}
        <div className="w-full p-4 flex items-center gap-4">
          
          {/* Play/Pause Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              togglePlay();
            }}
            className="text-white hover:text-neutral-300 transition-colors"
          >
            {isPlaying ? <FiPause size={20} /> : <FiPlay size={20} />}
          </button>

          {/* Volume Button */}
          <button
            onClick={toggleMute}
            className="text-white hover:text-neutral-300 transition-colors"
          >
            {isMuted ? <FiVolumeX size={20} /> : <FiVolume2 size={20} />}
          </button>

          {/* Progress Slider */}
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleSeek}
            onClick={(e) => e.stopPropagation()} 
            className="flex-1 h-1.5 bg-white/30 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white hover:[&::-webkit-slider-thumb]:scale-125 transition-all"
            style={{
              background: `linear-gradient(to right, white ${progress}%, rgba(255,255,255,0.2) ${progress}%)`
            }}
          />
        </div>
      </div>
    </div>
  );
}