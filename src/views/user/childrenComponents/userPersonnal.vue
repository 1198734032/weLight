<template>
  <div>
    <div class="personal-msg">
      <el-card class="box-card">
        <div slot="header">
          <span class="title">个人资料</span>
          <el-button @click="drawer = true" type="primary" style="float: right; padding:  5px">修改资料</el-button>
          <el-drawer title="请修改你的资料" :visible.sync="drawer" :direction="direction">
            <div>
              <el-form :label-position="labelPosition" label-width="100%" :model="formLabelAlign">
                <el-form-item label="年龄:">
                  <el-input v-model="formLabelAlign.changeAge"></el-input>
                </el-form-item>
                <el-form-item label="邮箱:">
                  <el-input v-model="formLabelAlign.changeEmail"></el-input>
                </el-form-item>
                <el-form-item label="密码:">
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
          <span>{{user.userName}}</span>
        </div>
        <div class="text item">
          <span>年龄：</span>
          <span>{{user.age}}</span>
        </div>
        <div class="text item">
          <span>邮箱：</span>
          <span>{{user.email}}</span>
        </div>
        <div class="text item">
          <span>密码：</span>
          <span>{{user.password}}</span>
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
      direction: "ttb",
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
      done()
    },

    storge() {
      let data = {
        userName: this.user.userName,
        age: this.formLabelAlign.changeAge,
        email: this.formLabelAlign.changeEmail,
        password: this.formLabelAlign.changePassword,
      };
      (this.formLabelAlign.changeAge = ""),
        (this.formLabelAlign.changeEmail = ""),
        (this.formLabelAlign.changePassword = "");
      changeInformation(data).then((res) => {
        // if(!res.data.data.success) return alert("出错啦~")
        // this.handleClose()
        alert(res.data.Msg);
        this.user = res.data.data.user;
      });
    },
  },
};
</script scoped>

<style>
.text {
  width: 100%;
  height: 30px;
  font-size: 16px;
}
.box-card {
  background-color: transparent;
  color: white;
}
.item {
  margin-bottom: 18px;
}
.text span {
  padding: 0 30px 0 0;
}

.box-card {
  margin: 0 auto;
}

.personal-msg /deep/ .el-card {
  color: #ffffff;
  background: linear-gradient(to top, rgb(36, 49, 84), rgb(110, 111, 119));
}

.el-drawer__open .el-drawer.ttb {
  height: 50vh !important;
  padding: 0 20px;
}
.el-form-item__label {
  text-align: left;
}
.el-form-item {
  width: 50px;
}
.el-input {
  width: 250px;
}
.el-row {
  text-align: center;
}
</style>

