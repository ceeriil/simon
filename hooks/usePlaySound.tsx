import { useSound } from "@/contexts/SoundProvider";

export const usePlaySound = (soundSrc: string) => {
  const { isMuted } = useSound();

  const playSound = () => {
    if (!isMuted) {
      const audio = new Audio(soundSrc);
      audio.volume = 0.5;
      audio.play();
    }
  };

  return playSound;
};
