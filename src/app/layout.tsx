import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { Analytics } from '@vercel/analytics/react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { profile } from '@/data/profile';
import { config } from '@/lib/config';
import './globals.css';

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: profile.metaDescription,
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: profile.metaDescription,
    url: config.siteUrl,
    images: [{ url: `${config.siteUrl}/og-image.png` }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — ${profile.title}`,
    description: profile.metaDescription,
    images: [`${config.siteUrl}/og-image.png`],
  },
  alternates: {
    canonical: config.siteUrl,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.title,
  url: profile.siteUrl,
  email: profile.email,
  sameAs: [profile.linkedinUrl, `https://github.com/${profile.githubUsername}`],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${GeistSans.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
