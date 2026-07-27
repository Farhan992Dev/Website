import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Agency portfolio website'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}