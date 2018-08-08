module.exports = {
  srcDir: "client/",
  css: [
    "normalize.css/normalize.css",
    "animate.css/animate.min.css",
    "element-ui/lib/theme-chalk/index.css",
    "font-awesome/css/font-awesome.min.css"
  ],
  head: {
    titleTemplate: "%s - 后台管理",
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
  transition: {
    name: "page",
    mode: "out-in",
    enterActiveClass: "animated zoomIn",
    leaveActiveClass: "animated zoomOut"
  },
  plugins: [
    {
      src: "~/plugins/element.js",
      ssr: true
    }
  ],
  router: {
    scrollBehavior: function(to, from, savedPosition) {
      return { x: 0, y: 0 };
    }
  },
  build: {
    analyze: true,
    vendor: [
      "axios",
      "moment",
      "~/util/axios.js",
      "~/plugins/element.js",
      "~/util/citydata.js"
    ]
  }
};
