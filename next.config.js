const withImages = require("next-images");
module.exports = withImages();

module.exports = {
  reactStrictMode: true,
  images: {
    deviceSizes: [360, 768, 1366],
    imageSizes: [767, 1365, 1920],
    domains: [
      "idoojin.co.kr",
      "data.1freewallpapers.com",
      "images.pexels.com",
      "cdn.crowdpic.net",
      "www.su-wan.co.kr",
      "www.shillahotels.com",
      "images.pexels.com",
    ],
  },
};
