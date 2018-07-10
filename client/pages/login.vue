<template>
  <div>
    <el-input v-model="username"></el-input>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "用户登录"
    }
  },
  data() {
    return {
      username: ""
    }
  }
}
</script>

<style>
</style>
