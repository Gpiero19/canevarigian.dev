import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gian Canevari — Software Developer',
  description: 'Personal portfolio of Gian Canevari, software developer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
