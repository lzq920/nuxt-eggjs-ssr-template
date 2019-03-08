<template>
  <div class="index">Hello World!</div>
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
.index {
  height: 100vh;
  font-size: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
