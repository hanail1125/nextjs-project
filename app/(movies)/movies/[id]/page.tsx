import {Suspense} from 'react';
import MovieInfo from '@/app/(home)/components/movie-info';
import MovieVideos from '@/app/(home)/components/movie-videos';

interface IParams {
  params: {id: string;};
}

export async function generateMetadata({params: {id}}: IParams) {

}

async function MovieDetailPage(props: {
  params: Promise<{id: string;}>;
  searchParams: Promise<{[key: string]: string | string[] | undefined;}>;
}) {
  const params = await props.params;
  const searchParams = await props.searchParams;

  console.log('params ===>', params);
  console.log('searchParams ===>', searchParams);


  return (
    <div>
      <Suspense fallback={<h1>영화 정보 로딩 중...</h1>}>
        <MovieInfo id={params.id} />
      </Suspense>
      <Suspense fallback={<h1>비디오 정보 로딩 중...</h1>}>
        <MovieVideos id={params.id} />
      </Suspense>
    </div>
  );
}

export default MovieDetailPage;