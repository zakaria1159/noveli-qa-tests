/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Add Babel config for coverage
  webpack: (config, { isServer }) => {
    if (!isServer && process.env.NODE_ENV === 'test') {
      config.module.rules.push({
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['istanbul']
          }
        }
      });
    }
    return config;
  }
}

module.exports = nextConfig;