import React, { Suspense } from 'react';
import MovieVideos from '../../../../components/movie-vodeos';
import MovieInfo, { getMovie } from '../../../../components/movie-info';

interface IParams {
	params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
	const movie = await getMovie(id)

	return {
		title: movie.title,
	};
}

export default async function MovieDetailPage({
	params: { id },
}: {
	params: { id: string };
}) {
	return (
		<div>
			<Suspense fallback={<h1>영화 정보 로딩중...</h1>}>
				<MovieInfo id={id} />
			</Suspense>

			<Suspense fallback={<h1>비디오 정보 로딩중...</h1>}>
				<MovieVideos id={id} />
			</Suspense>
		</div>
	);
}
