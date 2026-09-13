import {API_URL} from "../constants";
import styles from '../../../styles/movie-info.module.css';

async function getMovie(id: string) {
  // await new Promise((resolve) => setTimeout(resolve, 500));
  // throw new Error("API DATA를 가져오는 동안 문제가 발생했습니다.");
  const response = await fetch(`${API_URL}/${id}`, {
    next: { revalidate: 3600 },
  });

  return response.json();
}

export default async function MovieInfo({id}: {id: string;}) {
  const movie = await getMovie(id);
  
  return (
    <div className={styles.container}>
      <img src={movie.poster_path} className={styles.poster} />
      <div className={styles.info}>
        <h1>{movie.title}</h1>
        <h3>⭐ {movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target="_bland">Original HomgPage →</a>
      </div>
    </div>
  );
}