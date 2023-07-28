/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { 
        domains: ['avatars.githubusercontent.com', 'github.githubassets.com'], 
        formats: ['image/avif', 'image/webp'],
     },
}

module.exports = nextConfig
