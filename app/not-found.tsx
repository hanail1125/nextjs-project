import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Not Found',
}

export default function NotFound() {
  return (
    <div>
      <p>해당 페이지는 존재하지 않습니다!</p>
    </div>
  );
};