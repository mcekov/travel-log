import './globals.css';

export const metadata = {
  title: 'Travel Log',
  description: 'Keep track of all the places you have been',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
