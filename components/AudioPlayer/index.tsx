"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaPause, FaPlay } from "react-icons/fa6";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";

import styles from "./AudioPlayer.module.scss";
const {
  Wrapper,
  Content,
  TextContainer,
  Minimize,
  FlexContainer,
  RecordPlayer,
  AudioContainer,
  Rotate,
} = styles;

export interface Isongs {
  title: string;
  artist: string;
  url: string;
}

const AudioPlayer = ({ songs }: { songs: Isongs[] }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [expandDisk, setExpandDisk] = useState<boolean>(true);

  const currentSong = songs[currentSongIndex];

  const handlePrevious = () => {
    setCurrentSongIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? songs.length - 1 : prevIndex - 1;
      return newIndex;
    });
  };

  const handleNext = () => {
    setCurrentSongIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % songs.length;
      return newIndex;
    });
  };

  const handlePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
  };

  const handleSongEnd = () => {
    handleNext();
  };

  const playCurrentSong = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error: Error) => {
        console.error("Error playing audio:", error);
      });
    }
  };

  const pauseCurrentSong = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  useEffect(() => {
    if (isPlaying) {
      playCurrentSong();
    } else {
      pauseCurrentSong();
    }
  }, [isPlaying, currentSongIndex]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = currentSong.url;
    }
  }, [currentSong.url]);

  return (
    <div className={AudioContainer} draggable={true}>
      <div className={`${Wrapper} ${expandDisk ? "" : Minimize} `}>
        <div className={Content}>
          <div className={TextContainer}>
            <h2>{currentSong.title}</h2>
            <h3>{currentSong.artist}</h3>
          </div>

          <audio
            ref={audioRef}
            src={currentSong.url}
            onEnded={handleSongEnd}
            autoPlay={isPlaying}
          ></audio>

          <div className={FlexContainer}>
            <button onClick={handlePrevious}>
              <MdSkipPrevious size={32} />
            </button>
            <button onClick={handlePlayPause}>
              {isPlaying ? <FaPause size={34} /> : <FaPlay size={34} />}
            </button>
            <button onClick={handleNext}>
              <MdSkipNext size={32} />
            </button>
          </div>
        </div>
      </div>
      <Image
        src="/img/cd-2.png"
        alt="Record disc"
        width={115}
        height={115}
        draggable="false"
        className={`${RecordPlayer} ${expandDisk ? "" : Minimize} `}
      />

      <Image
        src="/img/record.png"
        alt="Record Player"
        width={120}
        height={120}
        draggable="false"
        className={`${RecordPlayer} ${!isPlaying ? "" : Rotate} `}
        onClick={() => setExpandDisk(!expandDisk)}
      />
    </div>
  );
};

export default AudioPlayer;
