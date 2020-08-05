<template>
 <div class="index">
     <div id="text">欢迎登录</div>
     <button>我是用户</button>
     <button>我是管理员</button>
     <button>我要注册</button>
 </div>
</template>
 
<script>
 
export default {
 
}
</script>
 
<style scoped>
 .index{
     display: flex;
     flex-direction: column;
     height: 100vh;
     width: 100vw;
     justify-content: center;
     align-items: center;
     background-color:rgba(0, 0, 0, 0.651);
 }
 #text{
     font-size: 25px;
     font-weight: 500;
     letter-spacing: 6px;
     color: white;
 }
 .index button{
     width: 40vw;
     padding: 4vw;
     margin-top:8vh; 
     border-radius: 5px;
     border: none;
     background-color: rgba(26, 224, 158, 0.89);
     color: white;
 }
</style>