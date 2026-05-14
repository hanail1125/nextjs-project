import { API_URL } from './constants';
import Movie from '../../components/movie';
import styles from '../../styles/home.module.css';

export const metadata = {
	title: 'Home',
};

async function getMovies() {
	await new Promise((resolve) => setTimeout(resolve, 500));
	const response = await fetch(API_URL);
	const json = await response.json();

	return json;
}

export default async function HomePage() {
	const movies = await getMovies();

	return (
		<ul className={styles.container}>
			{movies.map((movie) => (
				<li>
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
