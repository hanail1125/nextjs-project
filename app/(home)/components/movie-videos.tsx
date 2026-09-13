import {API_URL} from "../constants";
import styles from '../../../styles/movie-videos.module.css';
import YoutubePlayer from './youtube-player';

type Video = {
  id: string;
  key: string;
  name: string;
  type?: string;
  official?: boolean;
};

async function getVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`, {
    next: { revalidate: 3600 },
  });
  return response.json();
}

function sortVideos(videos: Video[]) {
  const priority = (video: Video) => {
    if (video.type === 'Trailer' && video.official) return 0;
    if (video.type === 'Trailer') return 1;
    if (video.type === 'Teaser') return 2;
    return 3;
  };

  return [...videos].sort((a, b) => priority(a) - priority(b));
}

export default async function MovieVideos({id}: {id: string;}) {
  const videos = sortVideos(await getVideos(id));

  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <YoutubePlayer
          key={video.id}
          videoId={video.key}
          title={video.name}
        />
      ))}
    </div>
  );
}
