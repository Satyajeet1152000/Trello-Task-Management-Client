/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: "http://localhost:3000/api",
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "w7.pngwing.com",
            },
        ],
    },
};

export default nextConfig;
