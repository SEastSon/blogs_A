<template>
<div class="Bgc">
  <div class="addBlog">
    <form action v-if="!flag">
      <label for>添加标题:</label>
      <input type="text" value="blog.title"
      placeholder="添加文章的标题"
      v-model="blog.title">
      <label for>添加内容:</label>
      <textarea value="blog.content"
       style="resize:none"
      placeholder="添加页面展示的所有内容"
       v-model="blog.content"></textarea>
      <label for="">添加展示内容</label>
      <textarea value="blog.show"
       style="resize:none"
         placeholder="添加首页展示的内容"
       v-model="blog.show"></textarea>
      <label for>添加图片:</label>
      <input
        type="text"
        value="blog.img"
        v-model="blog.img"
        class="cheackboxs"
        placeholder="请输入图片路径"
      >
       <label for>分类:</label>
        <input type="text"
          placeholder="请输入文章的类型(前端分类为英文，文章为中文)"
        value="blog.createBlog" v-model="blog.createBlog" class="cheackboxs">
      <div id="autor">
        <label for>作者:</label>
        <input type="text"
        placeholder="请输入上传文章的作者"
        v-model="blog.author">
        <input type="button" value="添加博客"
          class="but"
        v-on:click.prevent="post">
      </div>
    </form>
    <div v-if="flag">博客添加成功</div>
  </div>
</div>
</template>
<script>
export default {
  name: "addblog",
  data() {
    return {
      blog: {
        title: "",
        content: "",
        createBlog: "",
        author: "",
        read: 0,
        spot: 0,
        comment: 0,
        img: "",
        show:"",
        data: {
          getFullYears: "",
          getMonths: "",
          getDates: ""
        }
      },
      flag: false
    };
  },
  methods: {
    post: function() {
      var data = new Date();
      this.blog.data.getFullYears = data.getFullYear();
      this.blog.data.getMonths = data.getMonth() + 1;
      this.blog.data.getDates = data.getDate();
      if (
        this.blog.title != "" &&
        this.blog.content != "" &&
        this.blog.createBlog != [] &&
        this.blog.author != ""
      ) {
        this.$http
          .post(
            "https://wd3164396133mufdfp.wilddogio.com/posts.json",
            this.blog
          )
          .then(function(data) {
            this.flag = true;
            setTimeout(() => {
              this.$router.push({ path: "/" });
            }, 1500);
          });
      } else {
        alert("内容不可为空");
      }
    }
  }
};
</script>

<style scoped>
.Bgc{
  width: 100%;
  margin-top: -600px;
  position: relative;
  background-image:url("http://ppe.oss-cn-shenzhen.aliyuncs.com/collections/43/10/thumb.jpg");
  background-repeat:no-repeat;
  background-size:cover;
  padding-top:300px;
  padding-bottom: 30px;
}
.addBlog {
  margin-top:400px;
  padding: 10px 60px;
  overflow: hidden;
}
input,
label {
  display: inline-block;
  color: #fff;
}
label {
  margin-top: 20px;
}
input[type="text"],
textarea,
select {
  width: 100%;
  margin-top: 10px;
  border-radius:5px;
  outline: none;
  border:none;
  padding-left: 20px;
  color: #000;
  font-size: 16px;
}
textarea{
  padding-top: 20px;
}
input[type="text"]{
  height: 30px;
}
textarea {
  height: 300px;
  border-radius: 5px;
  outline: none;
}

#autor p {
  margin-bottom: 0;
}
#autor select {
  margin-bottom: 20px;
}
.but {
  padding: 10px 90px;
  font-size: 20px;
  background-color: #78bfff;
  outline: none;
  border:none;
  border-radius: 4px;
  color: #fff;
  display: block;
  margin: 30px auto;
  cursor: pointer;
}
.textareds {
  height: 30px !important;
  font-size: 20px;
}
.cheackboxs {
  width: 100% !important;
}
</style>
