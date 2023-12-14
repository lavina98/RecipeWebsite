/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost', process.env.VERCEL_URL],
    },
    env: {
        VERCEL_URL: process.env.VERCEL_URL,
    },
}

module.exports = nextConfig
 