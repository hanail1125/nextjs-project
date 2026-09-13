import type { Metadata } from "next";
import Navigation from "./(home)/components/navigation";
import './globals.css';
import Footer from "./(home)/components/footer/footer";

export const metadata: Metadata = {
  title: {
    template: '%s | NextJS',
    default: '제목없음'
  },
  description: "홈페이지에 대한 설명입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-full flex flex-col">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
