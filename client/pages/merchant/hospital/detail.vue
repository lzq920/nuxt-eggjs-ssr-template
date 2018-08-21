<template>
  <div>
    <el-card>
      <div slot="header">
        医院详情
      </div>
      <el-form :model="DetailForm" :rules="rules" ref="detailForm" label-width="200px">
        <el-form-item label="医院名称" prop="Name">
          <el-input v-model="DetailForm.Name"></el-input>
        </el-form-item>
        <el-form-item label="医院等级" prop="">
          <el-select v-model="DetailForm.LevelId">
            <el-option v-for="item in levelOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="医院性质" prop="">
          <el-radio-group v-model="DetailForm.Type">
            <el-radio class="radio" border :label="1">综合医院</el-radio>
            <el-radio class="radio" border :label="2">专科医院</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="院长姓名" prop="">
          <el-input v-model="DetailForm.Contact"></el-input>
        </el-form-item>
        <el-form-item label="联系方式" prop="">
          <el-input v-model="DetailForm.ContactTel"></el-input>
        </el-form-item>
        <el-form-item label="身份证号" prop="">
          <el-input v-model="DetailForm.IDnumber"></el-input>
        </el-form-item>
        <el-form-item label="所在地" prop="">
          <el-cascader :options="citydata" v-model="AddressOptions" :props="{label:'text',value:'value'}" style="width:100%" filterable @change="ItemChange"></el-cascader>
        </el-form-item>
        <el-form-item label="详细地址" prop="">
          <el-input v-model="DetailForm.Address" @blur="getAddress"></el-input>
        </el-form-item>
        <el-form-item label="经度" prop="">
          <el-input v-model="DetailForm.Lng"></el-input>
        </el-form-item>
        <el-form-item label="纬度" prop="">
          <el-input v-model="DetailForm.Lat"></el-input>
        </el-form-item>
        <el-form-item label="到期时间">
          <el-form-item prop="">
            <el-date-picker type="date" placeholder="选择日期" v-model="DetailForm.Expire"></el-date-picker>
          </el-form-item>
        </el-form-item>
        <el-form-item label="平台手续费" prop="">
          <el-input v-model="DetailForm.Ratio"></el-input>
        </el-form-item>
        <el-form-item label="共享转诊给上级医院分润(%)" prop="">
          <el-input v-model="DetailForm.DistributionOutB"></el-input>
        </el-form-item>
        <el-form-item label="共享转诊给网点分润(%)" prop="">
          <el-input v-model="DetailForm.DistributionOut"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('detailForm')">立即创建</el-button>
          <el-button @click="resetForm('detailForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import citydata from "~/util/citydata";
export default {
  head() {
    return {
      title: "详情"
    };
  },
  data() {
    return {
      DetailForm: {},
      rules: {},
      city: [],
      AddressOptions: [],
      citydata: citydata,
      levelOptions: [
        { label: "一级甲等", value: 1 },
        { label: "一级乙等", value: 2 },
        { label: "一级丙等", value: 3 },
        { label: "一级其他等级", value: 4 },
        { label: "二级甲等", value: 5 },
        { label: "二级乙等", value: 6 },
        { label: "二级丙等", value: 7 },
        { label: "二级其他等级", value: 8 },
        { label: "三级特等", value: 9 },
        { label: "三级甲等", value: 10 },
        { label: "三级乙等", value: 11 },
        { label: "三级丙等", value: 12 },
        { label: "三级其他等级", value: 13 },
        { label: "其他等级", value: 14 }
      ]
    };
  },
  methods: {
    getDetail() {
      this.$axios
        .post("/api/merchant/hospital/detail", {
          Id: this.$route.query.Id
        })
        .then(res => {
          this.DetailForm = res.data;
          this.AddressOptions = [
            res.data.ProvinceId,
            res.data.CityId,
            res.data.AreaId
          ];
        })
        .catch(err => {
          this.$message.error(err.message);
        });
    },
    getAddress() {
      let address = this.city[0] + this.city[1] + this.DetailForm.Address;
      this.getGeo(address);
    },
    ItemChange(val) {
      let items = [];
      for (let one in this.citydata) {
        if (this.citydata[one].value === val[0]) {
          items.push(this.citydata[one].text);
          for (let two in this.citydata[one].children) {
            if (this.citydata[one].children[two].value === val[1]) {
              items.push(this.citydata[one].children[two].text);
            }
          }
        }
      }
      this.city = items;
    },
    getGeo(address) {
      axios
        .get("https://restapi.amap.com/v3/geocode/geo", {
          params: {
            key: "cc7a0788ca7815d001337d625770985d",
            address: address
          }
        })
        .then(res => {
          console.log(res);
          this.$notify({
            title: "地址解析",
            dangerouslyUseHTMLString: true,
            duration: 0,
            message:
              "<p>解析结果:" +
              res.data.geocodes[0].formatted_address +
              "</p><p>坐标:" +
              res.data.geocodes[0].location +
              "</p>"
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  mounted() {
    this.getDetail();
  }
};
</script>

<style>
</style>
