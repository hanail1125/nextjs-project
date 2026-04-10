import React, { Suspense } from 'react';
import MovieVideos from '../../../../components/movie-vodeos';
import MovieInfo from '../../../../components/movie-info';

export default async function MovieDetail({
	params: { id }
}: {
	params: { id: string };
}) {
	return (
		<div>
			<h3>영화 상세 정보</h3>
			<Suspense fallback={<h1>영화 정보 로딩중...</h1>}>
				<MovieInfo id={id} />
			</Suspense>
			<h3>Videos</h3>
			<Suspense fallback={<h1>비디오 정보 로딩중...</h1>}>
				<MovieVideos id={id} />
			</Suspense>
		</div>
	);
}
