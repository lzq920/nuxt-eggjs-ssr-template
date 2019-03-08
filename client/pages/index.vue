<template>
  <div>
    <p v-for="item in list" :key="item.name">{{item.name}}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  asyncData({ params }) {
    return axios.get("http://127.0.0.1:7001/api/list").then(res => {
      return { list: res.data };
    });
  }
};
</script>

<style>
</style>
