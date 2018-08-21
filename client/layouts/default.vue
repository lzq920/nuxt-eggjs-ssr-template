<template>
  <div>
    <el-container id="container">
      <el-aside :width="isCollapse?'65px':'200px'">
        <div class="header-site" @click="SwitchBar">
          <i class="fa fa-tripadvisor fa-2x" aria-hidden="true"></i>
        </div>
        <navbar @open="handleOpen" @close="handleClose" :isCollapse="isCollapse"></navbar>
      </el-aside>
      <el-container>
        <el-header>
          <el-dropdown>
            <span class="el-dropdown-link">
              {{$store.state.userinfo.Name}}
              <i class="fa fa-wrench fa-lg" aria-hidden="true"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-menu>修改密码</el-dropdown-menu>
              <el-dropdown-item>
                <span @click="logout">退出登录</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <el-main>
          <nuxt/>
        </el-main>
        <!-- <el-footer>
          All Rights Reserved
        </el-footer> -->
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
      isCollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    SwitchBar() {
      this.isCollapse = !this.isCollapse;
    },
    logout() {
      this.$axios
        .post("/api/home/logout")
        .then(res => {
          this.$store.commit("logout");
          this.$router.push("/login");
        })
        .catch(err => {
          this.$message.error(err);
        });
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
  /* background-color: #001529; */
  background: #ffffff;
  transition: width 0.5s;
}
.header-site {
  height: 60px;
  display: flex;
  justify-content: center;
  background: #001529;
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
