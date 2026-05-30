import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Michael Harms Construction",
  description: "Professional services by Michael Harms Construction",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
