<template>
  <div>
    <el-card>
      <div v-for="item in 100" :key="item">{{item}}</div>
    </el-card>
  </div>
</template>

<script>
export default {
  head() {
    title: "医生管理"
  }
}
</script>

<style>
</style>
