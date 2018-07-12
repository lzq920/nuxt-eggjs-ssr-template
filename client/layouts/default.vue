<template>
  <div>
    <el-container id="container">
      <el-aside :width="isCollapse?'65px':'200px'">
        <div class="header-site" @click="SwitchBar">
          <i class="material-icons">
            polymer
          </i>
        </div>
        <navbar @open="handleOpen" @close="handleClose" :isCollapse="isCollapse"></navbar>
      </el-aside>
      <el-container>
        <el-header>
          <div @click="SwitchFullScreen" style="margin-right:20px;cursor:pointer">
            <i class="material-icons">
              {{isFullScreen?'fullscreen_exit':'fullscreen'}}
            </i>
          </div>
          <el-dropdown style="cursor:pointer">
            <span class="el-dropdown-link">
              <i class="material-icons">
                settings
              </i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>
                <span @click="logout">退出登录</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <el-main>
          <nuxt/>
        </el-main>
        <el-footer>
          Powered by
          <a href="https://github.com/lzq920/nuxt-eggjs-ssr-template">nuxt-eggjs-ssr-template</a>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import navbar from "~/components/navbar.vue";
export default {
  middleware: "auth",
  components: {
    navbar
  },
  data() {
    return {
      isCollapse: false,
      msgNumber: 12,
      isFullScreen: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    SwitchBar() {
      this.isCollapse = !this.isCollapse;
    },
    SwitchFullScreen() {
      let element = document.documentElement;
      if (this.isFullScreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.isFullScreen = !this.isFullScreen;
    },
    logout() {
      this.$store.commit("logout");
      this.$router.push("/login");
    }
  }
};
</script>

<style>
#container {
  height: 100vh;
  background-color: #f3f9fb;
}
.el-aside {
  background-color: #001529;
  transition: width 0.5s;
}
.header-site {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
}
.el-menu-vertical-demo {
  border: none;
}
.el-header {
  background-color: #ffffff;
  box-shadow: 0px 3px 5px #ccccd9;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.el-footer {
  background-color: #ffffff;
  box-shadow: 0px -3px 5px #ccccd9;
  line-height: 60px;
  text-align: center;
}
</style>
