/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
          {
            source: '/logo.png',
            headers: [
              {
                key: 'Link',
                value: '/logo.png',
              },
            ],
          },
        ];
      },
}

module.exports = nextConfig
