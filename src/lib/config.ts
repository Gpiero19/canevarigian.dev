export const config = {
  githubToken: process.env.GITHUB_TOKEN ?? null,
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://canevarigian.dev',
} as const;
