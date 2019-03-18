<template>
  <div class="index" @click="login">Hello World!</div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    login() {
      axios
        .post("http://127.0.0.1:7001/api/login", {
          username: "root",
          password: "123123"
        })
        .then(res => {
          console.log(res);
          this.$router.push("/about");
        })
        .catch(err => {
          console.log(err);
        });
    }
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
