<template>
  <div>
    <el-card>
      <div slot="header">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>首页</el-breadcrumb-item>
          <el-breadcrumb-item>商户中心</el-breadcrumb-item>
          <el-breadcrumb-item>医院管理</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div>
        <el-row :gutter="20">
          <el-col :span="6">
            <el-date-picker v-model="StartTime" type="date" placeholder="选择开始日期" format="yyyy 年 MM 月 dd 日" value-format="timestamp" style="width:100%">
            </el-date-picker>
          </el-col>
          <el-col :span="6">
            <el-date-picker v-model="EndTime" type="date" placeholder="选择结束日期" format="yyyy 年 MM 月 dd 日" value-format="timestamp" style="width:100%">
            </el-date-picker>
          </el-col>
          <el-col :span="6">
            <el-cascader :options="citydata" v-model="AddressOptions" :props="{label:'text',value:'value'}" style="width:100%" placeholder="请选择地址" clearable>
            </el-cascader>
          </el-col>
          <el-col :span="6">
            <el-button type="primary" @click="searchData">搜索</el-button>
          </el-col>
        </el-row>
        <br>
        <el-row :gutter="20">
          <el-col :span="6">
            <el-select v-model="search.Verifyed" placeholder="请选择类型" style="width:100%" clearable>
              <el-option v-for="item in VerifyedOptions" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="6">
            <el-input v-model="search.Name" placeholder="请输入医院名称" style="width:100%" clearable></el-input>
          </el-col>
        </el-row>
      </div>
    </el-card>
    <br>
    <el-card>
      <div slot="header">
        <nuxt-link to="/merchant/hospital/create">
          <el-button type="primary" size="small">新建</el-button>
        </nuxt-link>
      </div>
      <el-table :data="List" border>
        <el-table-column prop="CreateTime" label="创建时间" width="180">
          <template slot-scope="scope">
            {{scope.row.CreateTime | Time}}
          </template>
        </el-table-column>
        <el-table-column prop="MerchantCode" label="商户号" width="150"></el-table-column>
        <el-table-column prop="Name" label="医院名称" width="200"></el-table-column>
        <el-table-column prop="LevelName" label="医院等级"></el-table-column>
        <el-table-column prop="Type" label="医院类型" width="100">
          <template slot-scope="scope">
            <el-tag :type="scope.row.Type==1?'success':'danger'">{{scope.row.Type | Type}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="Contact" label="院长姓名"></el-table-column>
        <el-table-column prop="Phone" label="联系方式" width="150"></el-table-column>
        <el-table-column prop="IsMain" label="商户等级" width="120">
          <template slot-scope="scope">
            <el-tag>{{scope.row.IsMain | Ismain}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="Expire" label="到期时间" width="120"></el-table-column>
        <el-table-column prop="Verifyed" label="是否共享">
          <template slot-scope="scope">
            <el-tag :type="scope.row.Verifyed==1?'success':'danger'">
              {{scope.row.Verifyed | Verifyed}}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="Province" label="省"></el-table-column>
        <el-table-column prop="City" label="市"></el-table-column>
        <el-table-column prop="Area" label="区"></el-table-column>
        <el-table-column fixed="right" label="操作" width="240">
          <template slot-scope="scope">
            <nuxt-link :to="'/merchant/hospital/detail?Id='+scope.row.Id">
              <el-button type="primary" size="small">查看详情</el-button>
            </nuxt-link>
            &nbsp;
            <el-dropdown split-button type="primary" size="small">
              更多操作
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <nuxt-link :to="'/merchant/hospital/log?Id='+scope.row.Id" class="drop-item">操作记录</nuxt-link>
                </el-dropdown-item>
                <el-dropdown-item>
                  <nuxt-link :to="'/merchant/hospital/admin?Id='+scope.row.Id" class="drop-item">设置管理员</nuxt-link>
                </el-dropdown-item>
                <el-dropdown-item>
                  <nuxt-link :to="'/merchant/hospital/update?Id='+scope.row.Id" class="drop-item">升级</nuxt-link>
                </el-dropdown-item>
                <el-dropdown-item>
                  <nuxt-link :to="'/merchant/hospital/superiors?Id='+scope.row.Id" class="drop-item">上级医院</nuxt-link>
                </el-dropdown-item>
                <el-dropdown-item>
                  <nuxt-link :to="'/merchant/hospital/producer?Id='+scope.row.Id" class="drop-item">供应商</nuxt-link>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
      </el-table>
      <br>
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="page.Page" :page-sizes="[10, 20, 50, 100]" :page-size="page.PageSize" layout="sizes, prev, pager, next" :total="page.Count">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
import moment from "moment";
import citydata from "~/util/citydata.js";
export default {
  head() {
    return {
      title: "医院列表"
    };
  },
  data() {
    return {
      List: [],
      citydata: citydata,
      AddressOptions: [],
      VerifyedOptions: [
        {
          value: 1,
          label: "自有"
        },
        {
          value: 2,
          label: "共享"
        }
      ],
      StartTime: "",
      EndTime: "",
      search: {
        AreaId: "",
        CityId: "",
        EndTime: "",
        Name: "",
        ProvinceId: "",
        StartTime: "",
        Verifyed: ""
      },
      page: {
        Page: 1,
        PageSize: 10,
        Count: 10,
        TotalPage: 1
      }
    };
  },
  methods: {
    searchData() {
      this.search.StartTime = this.StartTime / 1000;
      this.search.EndTime = this.EndTime / 1000;
      this.search.ProvinceId = this.AddressOptions[0];
      this.search.CityId = this.AddressOptions[1];
      this.search.AreaId = this.AddressOptions[2];
      this.getList();
    },
    getList() {
      let params = Object.assign({}, this.page, this.search);
      this.$axios
        .post("/api/merchant/hospital/list", params)
        .then(res => {
          this.List = res.data.Data;
          this.page.Page = parseInt(res.data.PageInfo.Page);
          this.page.Count = res.data.PageInfo.Count;
          this.page.TotalPage = res.data.PageInfo.TotalPage;
        })
        .catch(error => {
          this.$message.error(error.message);
        });
    },
    handleSizeChange(val) {
      this.page.PageSize = val;
      this.getList();
    },
    handleCurrentChange(val) {
      this.getList();
    }
  },
  mounted() {
    this.getList();
  },
  filters: {
    Time(val) {
      return moment(val * 1000).format("YYYY-MM-DD HH:mm:ss");
    },
    Verifyed(val) {
      if (val == 2) {
        return "共享";
      } else {
        return "自有";
      }
    },
    Type(val) {
      if (val == 1) {
        return "综合医院";
      } else {
        return "专科医院";
      }
    },
    Ismain(val) {
      if (val == 1) {
        return "一级供应商";
      } else if (val == 3) {
        return "二级供应商";
      }
    }
  }
};
</script>

<style>
.drop-item {
  text-decoration: none;
}
</style>
