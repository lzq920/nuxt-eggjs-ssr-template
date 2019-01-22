<template>
  <div>
    <el-scrollbar>
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        router
      >
        <el-menu-item index="/">
          <template>
            <i class="fa fa-h-square fa-lg">&nbsp;&nbsp;</i>
            <span slot="title">主页</span>
          </template>
        </el-menu-item>
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
};
</script>

<style>
</style>
