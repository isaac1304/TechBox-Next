const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: { ignoreDuringBuilds: true },
    typescript: { ignoreBuildErrors: true },
    webpack: (config) => {
        config.resolve = config.resolve || {};
        config.resolve.alias = {
            ...(config.resolve.alias || {}),
            aos: path.resolve(__dirname, 'src/lib/aos.ts'),
            'aos/dist/aos.css': path.resolve(__dirname, 'src/lib/aos.css'),
        };
        return config;
    },
};

module.exports = nextConfig;
