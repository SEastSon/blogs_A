<template>
  <el-row
      :class="class_name?'nav':'nas'"
  type="flex" justify="space-between" >
    <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="4" class="imgs">
      <img src="../assets/imgs.png" alt
        :class="class_name?'':'imgs_A'"
      >
    </el-col>
    <div class="quit" v-if="showQuit">
      <div>
          <p>您确定要退出吗？</p>
        <div>
          <button @click.stop="quit_s();$store.commit('onUserName','');$store.commit('Admin',false)">确定</button>
          <button @click="cancel">取消</button>
        </div>
      </div>

    </div>
    <el-col :xs="24" :sm="24" :md="24" :lg="16" :xl="24" class="nav-titS_show">
      <ul class="nav-titS" ref="nav_S">
        <router-link to="/" id="tit">首页</router-link>
        <router-link to
        @click.native="showblogs();$store.commit('web','前端')" class="nav-titS_1">前端
            <ul class="nav-titS_ul nav-titS_ulZ" :style="{height:hei}">
              <li
                v-for="item in shoppingGuide_En"
                @click.stop="showblogs();$store.commit('web',item)"
                :key="item"
              >{{item}}</li>
            </ul>
          <i class="iconfont icon-arrow-top"></i>
        </router-link>
        <router-link to
        class="nav-titS_1" @click.native="showblogs();$store.commit('web','文章')">文章
          <ul class="nav-titS_ul  nav-titS_uls">
            <li
              v-for="item in shoppingGuide_Cn"
              @click.stop="showblogs();$store.commit('web',item)"
              :key="item"
            >{{item}}</li>
          </ul>
          <i class="iconfont icon-arrow-top"></i>
        </router-link>
        <router-link to="/leave">留言</router-link>
        <router-link to=" " class="login"
            @click.native="login()">
              {{$store.state.module100.userName!=''&&$store.state.module100.admin?log:logs}}
            <div class="login_divs">
              <div v-if="$store.state.module100.userName!=''&&$store.state.module100.admin">
                   <p>
                      <a href="#" id="userName">
                          {{$store.state.module100.userName}}
                      </a>
                      您好
                    </p>
                  <div class="personage">
                      <a @click.stop="quit()">
                          退出
                      </a>
                  </div>
              </div>
              <div v-else class="hover_register">
                   <p>用户未登陆</p>
                  <a href="#" @click.stop="regist">
                      注册
                  </a>
              </div>
            </div>
        </router-link>
        <router-link to="/admin" class="admin" title="管理员页面,用户请勿操作">
          <i class="iconfont icon-guanliyuan"></i>
        </router-link>
      </ul>
    </el-col>
    <el-dropdown class="drop-downList"
      @visible-change="clicks()"
    trigger="click">
      <span class="el-dropdown-link" >
        <i :class="menu==false?'iconfont icon-menu-two':'iconfont icon-toggle'"></i>
      </span>
      <el-dropdown-menu slot="dropdown" class="drop-downList_one">
        <el-dropdown-item class="elDropdown">
          <router-link to="/" id="tit">首页</router-link>
        </el-dropdown-item>
        <el-dropdown-item class="elDropdown">
          <router-link
            to
            @click.native="showblogs();$store.commit('web','前端')"
                class="nav-titS_1"
          >前端</router-link>
        </el-dropdown-item>
        <el-dropdown-item class="elDropdown">
           <router-link to class="nav-titS_1" @click.native="showblogs();$store.commit('web','文章')">文章
          </router-link>
        </el-dropdown-item>
        <el-dropdown-item class="elDropdown">
          <router-link to="/leave">留言</router-link>
        </el-dropdown-item>
        <el-dropdown-item class="elDropdown">
            <router-link to="/register">注册</router-link>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-row>
</template>
<script>
import store from "../vuex/store";
export default {
  name: "header-nav",
  components: {},
  data() {
    return {
      shoppingGuide: [],
      shoppingGuide_Cn: [],
      shoppingGuide_En: [],
       menu:true,
       class_name:true,
       usName:true,
       showQuit:false,
       log:"已登录",
       logs:"请登录",
       ul:"",
       uls:"",
       hei:""
    };
  },
  store,
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  destroyed: function () {
        window.removeEventListener('scroll', this.scrollToTop);   //  离开页面清除（移除）滚轮滚动事件
  },
  methods: {
    regist(){
        this.$router.push({
          path:"/register"
        })
    },
    quit(){
        this.showQuit=true;
    },
    cancel(){
      this.showQuit=false;
    },
    quit_s(){
      this.showQuit=false;
    },
    login:function(){
        if(this.$store.state.module100.userName!=''&&this.$store.state.module100.admin){
            this.$router.push({
                name: "errorName",
                params: {
                  Errer: "抱歉您已登陆！！！！"
                }
              });
        }else{
          this.$router.push({
            path:"/login"
          })
        }
    },
    clicks:function(){
      this.menu=this.menu==true?false:true;
    },
    showblogs: function() {
      this.$router.push({
        path: "/showblog"
      });
      if (this.$route.path == "/showblog") {
        this.$router.go(0);
      }
    },
    // 滚轮事件
    scrollToTop(){
      let that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let height = document.documentElement.scrollHeight||document.body.scrollHeight;
      that.scrollTop = scrollTop;
      if(that.scrollTop>233){
        that.class_name=false;
       }else{
        that.class_name=true;
       }
    },
  },
  created() {
    if(this.usName){
      // this.$store.commit('onUserName','');
      this.usName=false;
    }
    this.$http
      .get("https://wd3164396133mufdfp.wilddogio.com/posts.json")
      .then(function(data) {
        for (var key in data.body) {
          this.shoppingGuide.push(data.body[key].createBlog);
        }
        function unique10(arr) {
          return Array.from(new Set(arr));
        }
        var regExp = /^[\u4e00-\u9fa5]+$/;
        this.shoppingGuide = unique10(this.shoppingGuide);
        for (var i = 0; i < this.shoppingGuide.length; i++) {
          if (regExp.test(this.shoppingGuide[i])) {
            this.shoppingGuide_Cn.push(this.shoppingGuide[i]);
          } else {
            this.shoppingGuide_En.push(this.shoppingGuide[i]);
          }
        }
      });
  }
};
</script>
<style scoped>
* {
  transition: all .5s;
  list-style: none;
  box-sizing: border-box;
}
.quit{
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    right:0;
    top:0;
}
.quit>div{
  width: 300px;
  height: 100px;
  border-radius: 6px;
  background: #fff;
  position: absolute;
  padding: 20px;
  top:0;
  right:0;
  left:0;
  bottom:0;
  margin:auto;
}
.quit>div>p{
  text-align: center;
}
.quit>div>div{
  width:200px;
  display: flex;
  margin:10px auto;
  justify-content: space-between;
}
.quit>div>div>button{
  width: 40px;
  height: 30px;
  outline: none;
  border:0;
  cursor: pointer;
  background: #0069b0;
  color:#fff;
  border-radius: 4px;
}
.quit>div>div>button:hover{
  background:coral;
}
.nas{
  height: 73px;
  background: rgba(0, 0, 0, 0.8);
  padding: 12px 100px 0px 91px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
  width: 100%;
}
.imgs_A{
  margin-top: -57px !important;
}
.nav {
  width: 100%;
  height: 110px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
  padding: 30px 100px 0px 100px;
  background: rgba(0, 0, 0, 0);
}
.personage{
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
}
#userName{
  font-size: 17px;
  color: coral;
  font-weight: bold;
}
.login_divs{
  position: absolute;
  left:-75px;
  width: 200px;
  height:0px;
  border-radius: 15px;
   background: rgba(0, 0, 0, 0.5);
   overflow: hidden;
}
.login:hover .login_divs{
    height: 110px;
}
.login_divs>div>p{
  text-align: center;
  font-size: 15px;
  letter-spacing:5px
}
.login_divs>div>a,
.personage a{
  display: block;
  width: 70px;
  height: 35px !important;
  font-size: 15px !important;
  border:1px solid #fff;
  text-align: center !important;
  margin:0 auto;
  border-radius: 5px;
  line-height: 33px !important;
}
.login_divs>a:hover,
.personage a:hover{
  background: #0069b0;
}
.imgs > img {
  width: 110%;
  height: 281%;
  margin-top: -59px;
  cursor: pointer;
}
.drop-downList {
  display: none;
  overflow: hidden;
  text-align: center;

}
.drop-downList i{
  font-size: 30px;
  color: #fff;
  line-height: 50px;
}
@media screen and (max-width: 992px) {
  .imgs {
    display: none;
  }
  .nav {
      background: rgba(0, 0, 0, 0.5);
  }
}
@media screen and (max-width: 768px) {
  .nav {
    padding: 30px 0px 0px 0px;
  }
  .nav-titS {
    padding: 0px 50px !important;
  }
}
@media screen and (max-width: 480px) {
  .imgs {
    margin-left: 10px;
    width: 200px;
    display: block;
  }
  .nav-titS_show {
    display: none !important;
  }
  .drop-downList{
    display: block;
  }
}
@media screen and (max-width: 480px) {
  .drop-downList_one{
    opacity:1 !important;
  }
}
@media screen and (max-width: 680px) {
  .nas{
        padding: 12px 0px 0px 0px !important;
  }
}

.drop-downList{
  width: 50px;
  height: 50px;
  margin-right: 20px;
  background:rgba(0, 0, 0, 0.2);
  text-align: center;
  cursor: pointer;
}
.drop-downList{
  position: relative;
}
.drop-downList_one{
  position: fixed !important;
    width: 100px;
    text-align: center;
    background:rgba(0, 0, 0, 0.5);
    opacity:0;
    top: 60px;
    left: 326px;
    border: none;
}
.elDropdown:hover{
 background:#006aff;
}
.drop-downList_one a{
  color: #fff;
  font-size: 16px;
  text-decoration: none;
}
.nav-titS {
  width: 100%;
  height: 100%;
  padding: 0px 100px;
  display: flex;
  justify-content: space-between;
  float: right;
}
.nav-titS a {
  font-size: 20px;
  color: #fff;
  height: 40px;
  line-height: 50px;
  text-decoration: none;
  position: relative;
}
.nav-titS a:after {
  content: "";
  position: absolute;
  bottom: -9px;
  left: 50%;
  height: 2px;
  width: 0px;
  background: #0d6fa6;
  transition: all 0.5s;
}
.nav-titS>a:not(:last-child):hover:after {
  width: 50px;
  left: -3px;
}
.nav-titS a:hover .nav-titS_uls{
    height: 328px;
}
.nav-titS a:hover .nav-titS_ulZ{
    height: 248px;
}
.nav-titS_ul {
  height: 0;
  overflow: hidden;
    border-radius: 5px;
    /*padding: 10px 0px;*/
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
  position: absolute;
  left:-40px;
  top:50px;
  z-index: 0;
}
.nav-titS_ul li{
    height: 30px;
    line-height: 30px;
    margin-bottom: 10px;
    border-radius: 5px;
   padding: 0px 20px;
  width: 100%;
  font-size: 13px;
}
.nav-titS_ul li:hover{
  background:#0069b0;
}

.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  /* width: 100%; */
  /* height: 50px; */
  border-radius: 4px;
  min-height: 36px;
}
</style>
