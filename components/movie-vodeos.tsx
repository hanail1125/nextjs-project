import { API_URL } from '../app/(home)/constants';

async function getVideos(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  throw new Error('API DATA를 가져오는 동안 문제가 발생했습니다.')
	// const response = await fetch(`${API_URL}/${id}/videos`);

	// return response.json();
}

export default async function MovieVideos({ id }: { id: string; }) {
  const videos = await getVideos(id);

  return (
    <h6>{JSON.stringify(videos)}</h6>
  )
}
