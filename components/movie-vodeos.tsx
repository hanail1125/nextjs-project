import { API_URL } from '../app/(home)/constants';
import styles from "../styles/movie-videos.module.css";

async function getVideos(id: string) {
	await new Promise((resolve) => setTimeout(resolve, 500));
	// throw new Error('API DATA를 가져오는 동안 문제가 발생했습니다.')
	const response = await fetch(`${API_URL}/${id}/videos`, {
		cache: 'no-store'
	});

	return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
	const data = await getVideos(id);
	const videos = data;

	return (
		<div className={styles.container}>
			{videos.map((video) => (
				<iframe
					key={video.id}
					src={`https://www.youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
					title={video.name}
				/>
			))}
		</div>
	);
}
