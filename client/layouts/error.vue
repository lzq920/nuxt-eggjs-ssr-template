<template>
  <div class="error-page">
    <div class="image">
      <img src="//img.alicdn.com/tfs/TB1UM_Rt49YBuNjy0FfXXXIsVXa-1014-556.png" alt="404" style="width:100%">
    </div>
    <div class="status">
      <h1 class="animated infinite bounce">{{error.statusCode}}</h1>
      <p>{{error.message}}</p>
      <el-button type="primary" @click="toIndex">返回首页</el-button>
      <el-button type="primary" @click="toBack">返回上一页</el-button>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "错误"
    }
  },
  layout: "page",
  props: ["error"],
  methods: {
    toIndex() {
      this.$router.push("/");
    },
    toBack() {
      this.$router.back();
    }
  }
}
</script>

<style>
.error-page {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0f2f5;
}
.image {
  width: 400px;
}
.status {
  width: 400px;
  font-size: 2rem;
  color: #cccccc;
  text-align: center;
}
</style>
