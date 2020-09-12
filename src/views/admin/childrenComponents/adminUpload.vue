<template>
  <div class="admin_upload">
    <div><input id="movie_name_ipt" placeholder="请输入您将上传的电影名称" type="text" v-model="name" /></div>
    <el-upload class="upload-demo" drag action="https://47.97.214.211/api/upload" with-credentials :data="{'movieName':this.name}" multiple   :on-error="on_err" :before-upload="beforeUpload" :on-success="on_success">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        将文件拖到此处，或
        <em>点击上传</em>
      </div>
      <div class="el-upload__tip" slot="tip" >只能上传mp4文件，且不超过500MB</div>
    </el-upload>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    //上传之前校验文件信息
    beforeUpload(file) {
      let { type, size } = file;
      //校验文件名
      if(!this.name){
        alert("请输入您将上传的电影名称后重新上传");
        return false
      }
      //校验文件格式
      if (!/(mp4)|(flv)/i.test(type)) {
        alert("文件格式不正确");
        return false;
      }
      //校验文件大小（500MB）
      if (size > 500 * 1024 * 1024) {
        alert("文件太大啦");
        return false;
      }
    },

    //成功回调
    on_success(response, file, fileList){
      console.log(response); 
      alert('上传成功')  
    },

    //失败回调
    on_err(err, file, fileList){
      aler("出错啦，请稍后重试！")
      console.log(err);  
    }
  },

};
</script>
 
<style scope>
.admin_upload {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
#movie_name_ipt{
  width: 50vw;
  border: 1px solid black;
  opacity: .7;
  padding: 0 10px;
  line-height: 30px;
  border-radius: 5px;
  margin-bottom: 8vh;
}
.el-upload-list{
  width: 60vw;
  margin:0 auto
}
</style>