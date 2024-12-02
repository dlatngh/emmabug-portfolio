import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.discordapp.net',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'hi.com',
                port: '',
                pathname: '/**',
            }
        ],
    },
};

export default nextConfig;
