<template>
  <div class="page-container">
    <div class="login-container">
      <el-form :model="user" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm" :status-icon="true">
        <el-form-item prop="username">
          <el-input v-model="user.username" prefix-icon="fa fa-user" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="user.password" type="password" prefix-icon="fa fa-lock" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" style="width:100%">立即登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  layout: "page",
  head() {
    return {
      title: "用户登录"
    };
  },
  data() {
    return {
      user: {
        username: "",
        password: "",
        token: "123"
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios.post("/api/login", this.user).then(res => {
            this.$store.commit("login", res.data.token);
            this.$message.success("登录成功");
            if (this.$route.query.redirect) {
              this.$router.push(this.$route.query.redirect);
            } else {
              this.$router.push("/");
            }
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>
.page-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("http://api.dujin.org/bing/1920.php");
  background-size: cover;
}
.login-container {
  width: 200px;
  height: 200px;
}
</style>