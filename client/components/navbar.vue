<template>
  <div>
    <el-scrollbar>
      <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#001529" text-color="#fff" active-text-color="#2a76f3" :collapse="isCollapse" router>
        <el-menu-item index="/">
          <template>
            <i class="material-icons icon">
              account_balance
            </i>
            <span slot="title">主页</span>
          </template>
        </el-menu-item>
        <el-submenu index="/">
          <template slot="title">
            <i class="material-icons icon">
              view_list
            </i>
            <span>关于</span>
          </template>
          <el-menu-item index="/about">关于</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  props: {
    isCollapse: Boolean
  },
  methods: {
    handleOpen(key, keypath) {
      this.$emit("open", key, keypath);
    },
    handleClose(key, keypath) {
      this.$emit("close", key, keypath);
    }
  }
}
</script>

<style>
.icon {
  margin-right: 10px;
}
</style>
