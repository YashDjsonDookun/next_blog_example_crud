// next.config.js
module.exports = {
  env: {
    'NEXT_PUBLIC_MYSQL_HOST': '127.0.0.1',
    'NEXT_PUBLIC_MYSQL_PORT': '3306',
    'NEXT_PUBLIC_MYSQL_DATABASE': 'next_blog_example',
    'NEXT_PUBLIC_MYSQL_USER': 'root',
    'NEXT_PUBLIC_MYSQL_PASSWORD': '',
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
      }
    }

    return config
  }
}