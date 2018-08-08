<template>
  <div>
    <el-card>
      <div slot="header">
        <span>欢迎使用桃子互联网医院云转诊平台</span>
      </div>
      <el-row :gutter="20">
        <el-col :span="8">
          医院数量
          <h1>
            <count :startVal="0" :endVal="Info.HospitalAmount" :duration="3000" suffix="家"></count>
          </h1>
        </el-col>
        <el-col :span="8">
          网点数量
          <h1>
            <count :startVal="0" :endVal="Info.SlaveAmount" :duration="3000" suffix="个"></count>
          </h1>
        </el-col>
        <el-col :span="8">
          转诊单数量
          <h1>
            <count :startVal="0" :endVal="Info.TransferAmount" :duration="3000" suffix="单"></count>
          </h1>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import axios from '~/util/axios';
import count from 'vue-count-to';
export default {
  components: {
    count
  },
  head() {
    return {
      title: "首页"
    }
  },
  data() {
    return {
      Info: {
        HospitalAmount: 0,
        SlaveAmount: 0,
        TransferAmount: 0
      }
    }
  },
  methods: {
    getInfo() {
      axios.post("/api/info").then(res => {
        this.Info = res.data;
      }).catch(err => {
        console.log(err.response.statusText);
      })
    }
  },
  mounted() {
    this.getInfo();
  }
}
</script>

<style>
</style>
