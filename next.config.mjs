/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'yrdhniebzjazignetisf.supabase.co',
                port: '',
                pathname: '/storage/v1/object/public/emp/**',
            },
        ],
    },
};

export default nextConfig;
