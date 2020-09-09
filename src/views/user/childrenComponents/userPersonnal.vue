<template>
  <div>
    <div class="personal-msg">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span class="title">个人资料</span>
          <el-button @click="drawer = true" type="primary" style="float: right; padding:  5px">修改资料</el-button>
          <el-drawer
            title="请修改你的资料"
            :visible.sync="drawer"
            :direction="direction"
            :before-close="handleClose"
          >
            <div>
              <el-form :label-position="labelPosition" label-width="50px" :model="formLabelAlign">
                <el-form-item label="昵称">
                  <el-input v-model="formLabelAlign.changeName"></el-input>
                </el-form-item>
                <el-form-item label="年龄">
                  <el-input v-model="formLabelAlign.changeAge"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                  <el-input v-model="formLabelAlign.changeEmail"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                  <el-input v-model="formLabelAlign.changePassword"></el-input>
                </el-form-item>
              </el-form>
              <el-row>
                <el-button type="success" round @click="storge()">保存资料</el-button>
              </el-row>
            </div>
          </el-drawer>
        </div>
        <div class="text item">
          <span>昵称：</span>
          <span>{{userName}}</span>
        </div>
        <div class="text item">
          <span>年龄：</span>
          <span>{{age}}</span>
        </div>
        <div class="text item">
          <span>邮箱：</span>
          <span>{{email}}</span>
        </div>
        <div class="text item">
          <span>密码：</span>
          <span>{{password}}</span>
        </div>
        <div class="text item">
          <span>ID：</span>
          <span>{{userId}}</span>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import {
  getInformation,
  changeInformation,
} from "@/network/userAll/userAll.js";
export default {
  name: "Profile",
  data() {
    return {
      user: {
        userName: "xxx",
        age: "xxxx",
        userId: "xxx",
        email: "xxx",
        password: "xxx",
      },
      drawer: false,
      direction: "rtl",
      labelPosition: "right",
      formLabelAlign: {
        changeName: "",
        changeSex: "",
        changePhone: "",
      },
    };
  },
  mounted() {
    // 初始话人员
    getInformation().then((res) => {
      this.user = res.data.data.user;
    });
  },

  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },

    storge() {
      let data = {
        userName: this.formLabelAlign.changeName,
        age: this.formLabelAlign.changeAge,
        email: this.formLabelAlign.changeEmail,
        password: this.formLabelAlign.changePassword,
      };
      changeInformation(data).then((res) => {
        alert(res.data.Msg)
        this.user = res.data.data.user;
      });
    },
  },
};
</script>

<style>
.text {
  width: 100%;
  height: 30px;
  font-size: 16px;
}

.item {
  margin-bottom: 18px;
}
.text span {
  padding: 0 30px 0 0;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  margin: 0 auto;
  width: 100vw;
}

.el-card {
  background-color: none;
}
</style>