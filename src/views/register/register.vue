<template>
  <div id="register_page">
    <div class="register">
      <p id="title">欢迎注册</p>
      <div>请输入用户名:</div>
      <input type="text" v-model="userName" />
      <div>请输入邮箱:</div>
      <input type="text" v-model="email" />
      <div>请输入您的年龄:</div>
      <input type="text" v-model="age" />
      <div>请输入密码:</div>
      <input type="password" v-model="psw1" />
      <div>请确认密码:</div>
      <input type="password" v-model="psw2" />
      <div>
        <input type="submit" value="注册" id="submit" @click="sub" />
      </div>
    </div>
  </div>
</template>

<script>
import { register } from "@/network/register/register.js";
export default {
  data() {
    return {
      userName: "",
      email: "",
      age: "",
      psw: "",
      psw1: "",
      psw2: "",
    };
  },
  methods: {
    pswTest() {
      if (this.psw1&&this.psw1 === this.psw2) {
        this.psw = this.psw1;
        return 1;
      } else return 0;
    },
    emailTest(){
      if(/^\w+((\.|-)\w+)*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(this.email)){
        return 1;
      }
      return 0;
    },
    sub() {
      if(!this.userName||!this.age) return alert("请完善信息！")
      if(!this.emailTest()) return alert("请输入正确的邮箱!");
      if (!this.pswTest()) return alert("请确保密码不为空且两次密码输入一致！");
      let data = {
        userName: this.userName,
        age: this.age,
        email: this.email,
        password: this.psw,
      };
      
      register(data)
        .then((res) => {
          if(!res.data.success){
            return alert(res.data.Msg);
          };
          alert(res.data.Msg+",即将返回登陆页面登录");
          //this.$router.replace("/login").catch(() => {});
        })
        .catch(function (error) {
          console.log(error);
        });

      /*****/
    },
  },
};
</script>

<style scoped>
#register_page {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.register {
  border-radius: 5px;
  width: 55%;
  line-height: 30px;
  padding: 25px;
  background-color: white;
  border: 1px solid rgb(196, 190, 190);
  box-shadow: 3px 3px 3px rgb(212, 211, 211);
}
#title {
  text-align: center;
}
.register input {
  width: 90%;
  line-height: 30px;
  border: 1px solid rgb(221, 218, 218);
  border-radius: 5px;
  padding: 0 5px;
}

#submit {
  margin-top: 30px;
  background-color: rgb(8, 185, 103);
  color: white;
  border: none;
  height: 40px;
  margin-left: 4px;
}
</style>