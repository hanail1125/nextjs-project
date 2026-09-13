import {API_URL} from './constants';
import Movie from './components/movie';
import styles from '../../styles/home.module.css';

export const metadata = {
  title: 'Home',
  description: '홈페이지에 대한 설명입니다.'
};

const getMovies = async () => {
  const response = await fetch(API_URL);
  const json = await response.json();

  return json;
};

export default async function Home() {
  const movies = await getMovies();

  return (
    <ul className={styles.container}>
      {movies.map(movie => (
        <li key={movie.id}>
          <Movie
						key={movie.id}
						id={movie.id}
						poster_path={movie.poster_path}
						title={movie.title}
					/>
        </li>
      ))}
    </ul>
  );
}
