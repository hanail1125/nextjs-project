'use client';

import { useState } from 'react';
import styles from '../../../styles/movie-videos.module.css';

interface YoutubePlayerProps {
  videoId: string;
  title: string;
}

export default function YoutubePlayer({ videoId, title }: YoutubePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <iframe
        className={styles.player}
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={title}
      />
    );
  }

  return (
    <button
      type="button"
      className={styles.facade}
      onClick={() => setIsPlaying(true)}
      aria-label={`${title} 재생`}
    >
      <img
        className={styles.thumbnail}
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        loading="lazy"
        decoding="async"
      />
      <span className={styles.playButton} aria-hidden="true" />
    </button>
  );
}
