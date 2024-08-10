/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: "https://trello-task-management-server.onrender.com/api",
        // API_URL: "http://localhost:3001/api",
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
