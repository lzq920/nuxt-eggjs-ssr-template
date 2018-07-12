module.exports = {
  srcDir: "client/",
  css: [
    "normalize.css/normalize.css",
    "animate.css/animate.min.css",
    "material-design-icons/iconfont/material-icons.css",
    "element-ui/lib/theme-chalk/index.css"
  ],
  head: {
    titleTemplate: "%s - Eggjs-Nuxt-SSR",
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
  router: {},
  build: {
    vendor: ["axios", "~/plugins/element.js"]
  }
};
