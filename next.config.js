const { withFaust } = require("@faustjs/next");
 
/**
 * @type {import('next').NextConfig}
 **/

// next.config.js

/* module.exports = withFaust({
  images: {
    domains: ["kapstaging.com"]
  },
}); */

module.exports = {
  images: {
      domains: ['kapstaging.com', 'res.cloudinary.com'],
      formats: ['image/avif', 'image/webp']
  }
};