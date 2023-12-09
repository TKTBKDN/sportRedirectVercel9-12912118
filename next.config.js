module.exports = {
  async redirects() {
    return [
      {
        source: "/:slug",
        destination: "https://sportsandtravelonline.com/:slug",
        permanent: true,
        has: [
          {
            type: "header",
            key: "user-agent",
            value: "(^(?!.*facebook).*$)",
          },
        ],
      },
      {
        source: "/doc-bao/:slug",
        destination: "https://sportsandtravelonline.com/doc-bao/:slug",
        permanent: true,
        has: [
          {
            type: "header",
            key: "user-agent",
            value: "(^(?!.*facebook).*$)",
          },
        ],
      },
    ];
  },
};
