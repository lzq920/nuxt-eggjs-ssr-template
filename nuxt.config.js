module.exports = {
  srcDir: "client/",
  css: ["animate.css/animate.min.css", "element-ui/lib/theme-chalk/index.css"],
  head: {
    titleTemplate: "%s - 后台管理系统",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "后台管理系统" }
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
    enterActiveClass: "animated fadeIn",
    leaveActiveClass: "animated fadeOut"
  },
  plugins: [
    {
      src: "~/plugins/element.js",
      ssr: false
    }
  ],
  router: {},
  build: {
    vendor: ["axios", "~/plugins/element.js"]
  }
};
