<template>
  <div>
    <div class="nav_img"></div>
    <div class="fixation">
       <a @click.stop="backBottm()"
          v-show="btnFlagS"
        title="向下跳转">
        <i class="iconfont icon-xiangxia"></i>
      </a>
       <router-link to=""
       class="Gddate"
       title="归档日期">
        <i class="iconfont icon-guidang"></i>
        <div id="box">
              <ul>
                <li v-for="(item,index) in dateOfFiling" @click="liS(item)" :key="index">
                  {{item.getFullYears}}年
                  {{item.getMonths}}月
                  {{item.getDates}}日
                </li>
              </ul>
        </div>
      </router-link>
       <router-link to="/pigeonhole" @click.native="backTop()"
       title="友情链接">
        <i class="iconfont icon-lianjie1"></i>
      </router-link>
      <router-link to=""
        class="seach"
        title="搜索">
        <i class="iconfont icon-fangdajing"></i>
         <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search…"
                  v-model="seach"
                  @keyup.enter="enter(seach)"
                >
          </div>
      </router-link>
      <a href="#" title="微信" class="Wx">
        <i class="iconfont icon-weixin"></i>
        <img src="../assets/mmqrcode1551064482860.png" alt>
      </a>
      <a @click.stop="backTop()" v-if="btnFlag" title="向上跳转">
        <i class="iconfont icon-een"></i>
      </a>
    </div>
  </div>
</template>

<script>
import store from "../vuex/store";
export default {
  data() {
    return {
      seach: "",
      btnFlag: true,
      labeAggregation: [],
      dateOfFiling: [],
      datess: [],
      btnFlagS:true,
      swiperOption: {
        effect: "cube",
        autoplay: true,
        delay: 10000,
        speed: 1000,
        stopOnLastSlide: true
      }
    };
  },
  store,
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
    this.$http
      .get("https://wd3164396133mufdfp.wilddogio.com/posts.json")
      .then(function(data) {
        for (var key in data.body) {
          data.body[key].id = key;
          this.datess.push(data.body[key].data);
          this.dateOfFiling.push(data.body[key].data);
          this.labeAggregation.push(data.body[key].createBlog);
        }

        function unique10(arr) {
          return Array.from(new Set(arr));
        }
        this.labeAggregation = unique10(this.labeAggregation);

        function deteleObject(obj) {
          var uniques = [];
          var stringify = {};
          for (var i = 0; i < obj.length; i++) {
            var keys = Object.keys(obj[i]);
            keys.sort(function(a, b) {
              return Number(a) - Number(b);
            });
            var str = "";
            for (var j = 0; j < keys.length; j++) {
              str += JSON.stringify(keys[j]);
              str += JSON.stringify(obj[i][keys[j]]);
            }
            if (!stringify.hasOwnProperty(str)) {
              uniques.push(obj[i]);
              stringify[str] = true;
            }
          }
          uniques = uniques;
          return uniques;
        }
        this.dateOfFiling = deteleObject(this.dateOfFiling);
      });
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },
  methods: {
    router_s: function() {
      this.$router.push({
        path: "/showblog"
      });
      if (this.$route.path == "/showblog") {
        this.$router.go(0);
      }
    },
    aggregation: function(e) {
      this.router_s();
    },
    liS: function(item) {
      this.router_s();
      this.$store.commit("web", { b: item });
    },
    enter: function(item) {
      this.router_s();
      this.$store.commit("web", { a: item });
      this.seach = "";
    },
    backTop() {
      let that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 20);
    },
    backBottm(){
      let that = this;
      let timer = setInterval(() => {
      if ((document.documentElement.scrollHeight-document.documentElement.clientHeight)-document.documentElement.scrollTop >100 ) {
        console.log((document.documentElement.scrollHeight-document.documentElement.clientHeight),'hhh')
        console.log(document.documentElement.scrollTop)
            document.documentElement.scrollTo(0, document.documentElement.scrollTop+=189);

        }else{
           document.documentElement.scrollTo(0, document.documentElement.scrollHeight);
            clearInterval(timer);
        }
      }, 15);
    },
    scrollToTop() {
      let that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let height = document.documentElement.scrollHeight||document.body.scrollHeight;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 60) {
        that.btnFlag = true;
      } else {
        that.btnFlag = false;
      }
       if(that.scrollTop<700){
          that.btnFlagS = true;
       }else{
          that.btnFlagS = false;
       }
    },
    created() {
      this.showCalendar();
      that.$http
        .get("https://wd3164396133mufdfp.wilddogio.com/posts.json")
        .then(function(data) {
          for (var key in data.body) {
            data.body[key].id = key;
            that.datess.push(data.body[key].data);
          }
        });
    }
  }
};
</script>
<style scoped>
*{
  list-style: none;
  text-decoration: none;
}
@media screen and (max-width: 1190px) {
    .fixation{
      display: none;
    }
}
@media screen and (max-width: 800px) {
  .nav_img{
    background-position: 0px -20px !important;
  }
}
@media screen and (max-width: 800px) {
  .nav_img{
    background-position: 0px -3px !important;
  }
}
.nav_img{
  width: 100%;
  height:300px;
  background-image: url("http://ppe.oss-cn-shenzhen.aliyuncs.com/palette/9272/1541463066115/thumb_Mon_Nov_05_2018.jpg");
  background-size:cover;
  background-repeat:no-repeat;
  background-position:0px -200px;
}
#sidebar {
  padding: 20px;
  margin-top: 10px;
  width: 360px;
  box-sizing: border-box;
  float: right;
  margin-bottom: 30px;
  margin-right: 30px;
}
.filsex{
  position: fixed;
  right:0;
  top:0;
}
.filsex1{
  position: fixed;
  right:0;
  top:-1100px;
}
.xh-btn {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 3px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  background: #fff;
  color: #000;
  text-decoration: none;
  margin-left: 7px;
  margin-right: 7px;
  user-select: none;
  border-color: #ccc;
}
.advertising > img {
  width: 100%;
  height: 150px;
}
.advertising p {
  font-size: 16px;
  margin-left: 20px;
}
* {
  box-sizing: border-box;
  transition: all 1s;
}
.swiper {
  height: 300px;
  z-index: 0;
}
.col-md-4 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}
.aside {
  display: block;
}

.xh-wechat-social-widget {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
}
#kratos-widget-area .widget {
  margin: 0 0 25px;
  padding: 30px;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 0;
}
.clearfix {
  display: block;
}
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
#kratos-widget-area .widget-title {
  position: relative;
  margin: 0 0 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #e7e7e7;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  color: #333;
  font-weight: 400;
  margin: 0 0 30px 0;
}
.mejs-offscreen {
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  -webkit-clip-path: inset(50%);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  word-wrap: normal;
}
.mejs-container {
  background: #222;
}
.mejs-container {
  clear: both;
  max-width: 100%;
}
.mejs-container {
  background: #000;
  font-family: Helvetica, Arial, serif;
  position: relative;
  text-align: left;
  text-indent: 0;
  vertical-align: top;
}
.mejs-container * {
  font-family: Helvetica, Arial;
}
.mejs-mediaelement {
  height: 100%;
  width: 100%;
  z-index: 0;
}
.mejs-mediaelement {
  left: 0;
  position: absolute;
  top: 0;
}
.mejs-container * {
  font-family: Helvetica, Arial;
}
form {
  display: block;
  margin-top: 0em;
}

.widget_kratos_search input {
  height: 35px;
  border: 1px solid #ccc;
  border-radius: 0;
}
.seach{
  position: relative;
}
.seach:hover .form-group{
  width: 200px;
}
.form-group{
  overflow: hidden;
  height: 100%;
  width: 0px;
  position: absolute;
  right:50px;
  z-index: 0;
}
.form-control {
  display: block;
  width: 100%;
  height:100%;
  padding: 6px 12px;
  font-size: 16px;
  border-radius: 5px;
  border-top-right-radius:0px;
  border-bottom-right-radius:0px;
  line-height: 1.42857143;
  outline: none;
  background:#a9a9a9;
  color:#fff;
  background-image: none;
  border: 1px solid #a9a9a9;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
}
img {
  border: 0;
}
#kratos-widget-area .widget-title::after {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2.5px !important;
  width: 73px;
  background-color: #00a2ff;
  content: "";
}
.audio {
  width: 264px !important;
  height: 49px !important;
  overflow: hidden;
  border: 0;
  margin-right: 20px;
  cursor: pointer;
}
.swiper img {
  width: 100%;
  height: 100%;
}
.fixation {
    position: fixed;
    width: 50px;
    height: 180px;
    top: 50%;
    margin-top: -90px;
    right: 25px;
    z-index: 44;
}
.fixation a {
  display: block;
  width: 50px;
  height: 50px;
  background: #a9a9a9;
  border-radius: 0;
  display: flex;
  margin-bottom: 15px;
  transition: all 0.5s;
  position: relative;
  cursor: pointer;
}
.fixation i {
  font-size: 22px;
  margin: 0 auto;
  color: #fff;
  line-height: 50px;
}
.fixation > a:nth-of-type(1):hover {
  background: #ff0000;
}
.fixation a:nth-of-type(2):hover {
  background: #00bd3c;
}
.fixation a:nth-of-type(4):hover img {
  display: block;
}
.fixation a:nth-of-type(3):hover {
  background: #009cff;
}
.fixation a:nth-of-type(4):hover{
  background: coral;
}
.fixation a:nth-of-type(5):hover{
  background: blue;
}
.fixation a:nth-of-type(6):hover{
  background: hotpink;
}
.fixation a img {
  width: 150px;
  height: 150px;
  position: absolute;
  left: -170px;
  top: -50px;
  display: none;
}
.fixation span{
  font-size: 12px;
  position: absolute;
  bottom: 0px;
  right:5px;
  color: red;

}
.labelAggregation > a {
  font-size: 16px;
  font-weight: normal;
  display: inline-block;
  margin: 0 6px 7px 0;
  padding: 4px 12px;
  border: 1px solid #f0f0f0;
  border-radius: 3px;
  color: #666;
  text-transform: uppercase;
  line-height: 19px;
  font-size: 13px !important;
}
.labelAggregation > a:hover {
  color: #009cff;
}
ul {
  margin-bottom: 1em;
  font-size: 16px;
  color: #333;
  margin-top: 0;
}
.widget li {
  padding-top: 2px;
  padding-bottom: 2px;
}
.widget a {
  color: #4c4c4c;
  text-decoration: none;
  -webkit-transition: color 0.3s;
  transition: color 0.3s;
}
.httpHref img {
  max-width: 100%;
  height: auto;
  margin-top: -10px;
  transition: all 0.4s;
}
.httpHref img:hover {
  transform: scale(1.2);
}
.httpHref h4 {
  font-size: 13px;
}
.httpHref h4 em {
  color: chocolate;
  font-weight: bold;
  font-size: 17px;
}
.httpHref h4 a {
  font-size: 14px;
  margin-left: 20px;
  margin-top: 20px;

  color: #009cff;
}
.httpHref h4 a:hover {
  text-decoration: underline;
}
.httpHref > a {
  display: block;
  width: 100%;
  margin-top: -27px;
  overflow: hidden;
}
.Gddate{
  position: relative;
}
.Gddate:hover #box{
  height: 600px;
}
.Wx:hover img{
  display: block;
}
#box{
  width: 200px;
  height: 0px;
  overflow: hidden;
  background: rgba(0, 0, 0, .6);
  position: fixed;
  top:50%;
  margin-top: -290px;
  right: 90px;
  text-align: center;
  /* padding: 0px 20px; */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  /* display: none; */
}
#box > ul > li:hover{
  background: #009cff;
}
#box > ul > li {
  font-weight: bold;
  color: #fff;
  padding: 15px 20px;
  text-decoration: underline;
  cursor: pointer;
}
#box > ul > li:nth-of-type(1){
  margin-top: 30px;
}
</style>
