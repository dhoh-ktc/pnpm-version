/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@repo/ui'],

  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/identity/:path*',
  //       destination: 'http://identity.dev.ktcloudservice.com/v1/:path*',
  //     },
  //     {
  //       source: '/api/network/:path*',
  //       destination: 'http://networking.dev.ktcloudservice.com/v2.0/:path*',
  //     },
  //   ]
  // },

  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/identity/v1/:path*',
  //       destination: 'http://identity.dev.ktcloudservice.com/identity/:path*',
  //     },
  //   ]
  // },

  trailingSlash: true,
  // async rewrites() {
  //   return [
  //     {
  //       source: `/projects`,
  //       destination: 'http://next-front-test.svc-dev.14-63-204-35.nip.io/v1/projects', // 백엔드 API 주소
  //     },
  //   ]
  // },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          { key: 'Access-Control-Allow-Credentials', value: 'true' }, // 쿠키 포함 허용
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,PATCH,POST,DELETE,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
}

export default nextConfig
