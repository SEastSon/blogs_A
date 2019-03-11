<template>
  <div id="Errer">
    <div>
      <a href="#" @click="upOneLevel">返回</a>
      <p v-text="$route.params.Errer"></p>
    </div>
  </div>
</template>
<script>
import store from "../vuex/store";
export default {
  data() {
    return {};
  },
  store,
  methods: {
    upOneLevel: function() {
      if(this.$store.state.module100.reg=="注册"){

           this.$router.push({
              path:"/register"
           })
      }
      if(this.$store.state.module100.reg=="登录"){
           this.$router.push({
              path:"/login"
           })
      }
       if(this.$store.state.module100.reg=="登录成功"){
             this.$router.push({
              path:"/"
           })
      }
       if(this.$store.state.module100.reg=="id页登录成功"){
             this.$router.push({
              path:"/blog/"+this.$route.params.id
           })
      }
      if(this.$store.state.module100.reg=="发表为空"){
           this.$router.push({
              path:"/blog/"+this.$route.params.idx
           })
      }
      if(this.$store.state.module100.reg=="评论成功"){
            this.$router.push({
              path:"/leave"
           })
      }
    }
  }
};
</script>
<style scoped>
#Errer {
  width: 100%;
  height: 100%;
  background-image:url("http://ppe.oss-cn-shenzhen.aliyuncs.com/collections/118/11/thumb.jpg");
  background-repeat:no-repeat;
  background-size:cover;

  position: fixed;
  top: 0;
  right: 0;
  overflow: hidden;
  z-index: 33;
}
#Errer > div {
  background: #fff;
  color: #444;
  margin: 2em auto;
  padding: 1em 2em;
  max-width: 700px;
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.13);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.13);
  margin-top: 50px;
}
#Errer > div > p {
  font-size: 14px;
  line-height: 1.5;
  margin: 25px 0 20px;
}
#Errer > div > a {
  color: blue;
  text-decoration: underline;
  font-size: 18px;
}
#Errer > div > a:hover {
  color: red;
}
</style>
