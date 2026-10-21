/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/articles/how-ai-learns-to-sing', destination: '/articles/how-blob-opera-works', permanent: true },
      { source: '/articles/real-time-vocal-synthesis', destination: '/articles/how-blob-opera-works', permanent: true },
      { source: '/articles/from-recordings-to-ai-voice', destination: '/articles/how-blob-opera-works', permanent: true },
      { source: '/articles/the-harmony-engine', destination: '/articles/how-blob-opera-works', permanent: true },
      { source: '/articles/neural-vocoders-explained', destination: '/articles/how-blob-opera-works', permanent: true },
      { source: '/articles/history-of-algorithmic-composition', destination: '/articles/how-blob-opera-works', permanent: true },
      { source: '/articles/understanding-harmony-through-play', destination: '/articles/harmony-and-melody-in-blob-opera', permanent: true },
      { source: '/articles/tips-for-beautiful-melodies', destination: '/articles/harmony-and-melody-in-blob-opera', permanent: true },
      { source: '/articles/what-is-vibrato', destination: '/articles/vocal-expression-in-blob-opera', permanent: true },
      { source: '/articles/vowel-shapes-ah-vs-oo', destination: '/articles/vocal-expression-in-blob-opera', permanent: true },
      { source: '/articles/what-is-portamento', destination: '/articles/vocal-expression-in-blob-opera', permanent: true },
      { source: '/articles/dynamic-range-in-singing', destination: '/articles/vocal-expression-in-blob-opera', permanent: true },
      { source: '/articles/opera-history-in-5-minutes', destination: '/articles/what-is-opera', permanent: true },
      { source: '/articles/psychology-of-musical-preference', destination: '/articles/why-blob-opera-is-genius', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Permissions-Policy',
            value: 'clipboard-write=*',
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
    ],
  },
};

module.exports = nextConfig;
