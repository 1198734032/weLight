<template>
  <div class="admin_upload">
    <div><input id="movie_name_ipt" placeholder="请输入您将上传的电影名称" type="text" v-model="name" /></div>
    <el-upload class="upload-demo" drag action="/upload"  :data="{'movieName':this.name}" multiple :before-upload="beforeUpload">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        将文件拖到此处，或
        <em>点击上传</em>
      </div>
      <div class="el-upload__tip" slot="tip">只能上传mp4文件，且不超过500MB</div>
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
    beforeUpload(file) {
      let { type, size } = file;
      //校验文件名
      if(!this.name){
        alert("请输入您将上传的电影名称后重新上传");
        return false
      }
      //校验文件格式
      if (!/(mp4)|(png)/i.test(type)) {
        alert("文件格式不正确");
        return false;
      }
      //校验文件大小（500MB）
      if (size > 500 * 1024 * 1024) {
        alert("文件太大啦");
        return false;
      }
    },
  },
};
</script>
 
<style scope>
.admin_upload {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.651);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
#movie_name_ipt{
  width: 50vw;
  border: 1px solid black;
  padding: 0 10px;
  line-height: 30px;
  border-radius: 5px;
  margin-bottom: 8vh;
}

</style>