<template>
  <div>
    <h1>{{info}}</h1>
  </div>
</template>

<script>
import axios from "axios";
export default {
  asyncData({ params }) {
    return axios.get("http://127.0.0.1:7001/api/info").then(res => {
      return { info: res.data };
    });
  }
};
</script>

<style>
</style>
