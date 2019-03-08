module.exports = {
  srcDir: "client/",
  css: [],
  head: {
    titleTemplate: "%s",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Eggjs-Nuxt-SSR" }
    ]
  },
  loading: {
    color: "#409EFF",
    failedColor: "#F56C6C",
    height: "2px"
  },
  plugins: [],
  router: {
    scrollBehavior: function(to, from, savedPosition) {
      return { x: 0, y: 0 };
    }
  }
};
