export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-full flex flex-col">
        {children}
        <h6>&copy; Next JS is great!</h6>
      </body>
    </html>
  );
}
