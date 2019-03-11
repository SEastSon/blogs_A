<template>
  <div id="showBlog">
    <div class="toLoad" v-if="loader">
      <img
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551896386316&di=5ece12d1a18c0131e5c6b5f86e752ffd&imgtype=0&src=http%3A%2F%2Ffso-static.bj.bcebos.com%2Fmall%2Farticle%2F20170506%2F590ca9b1b3054.gif"
        alt
      >
    </div>
    <ul class="showBlog_nav">
      <div class="label">
          <p v-if="options.b==undefined&&options.a==undefined">标签:
            <a href="#">{{options}}</a></p>
          <p
          v-if="options.b!=undefined&&options.a==undefined">
          归档日期:
            <a href="#">{{options.b.getFullYears}} -
              {{options.b.getMonths}} -
              {{options.b.getDates}}
              </a>
          </p>
          <p v-if="options.a!=undefined">搜索结果:
            <a href="#">{{options.a}} </a>
          </p>
      </div>
      <div class="label" v-if = "showData.length==0">
          <p >
            抱歉未找到你要的结果
          </p>
      </div>
      <li
        class="showBlog_navLi"

        v-for="(item,index) in showData"
        :key="index"
      >
        <router-link :to="'/blog/'+item.id">
          <img :src="item.img" alt>
          <div class="cobers"></div>
          <div class="cover">
            <p>{{item.title}}</p>
            <span>{{item.content}}</span>
          </div>
          <div class="Date">
            <a href>
              <i class="iconfont icon-rili"></i>
              {{item.data.getFullYears}}-{{item.data.getMonths}}-{{item.data.getDates}}
            </a>
            <a href>
              <i class="iconfont icon-yuedu"></i>
              {{item.read}}条阅读
            </a>
            <a href>
              <i class="iconfont icon-liuyan"></i>
              {{item.comment}}条评论
            </a>
            <a href>
              <i class="iconfont icon-dianzan2"></i>
              {{item.spot}}条点赞
            </a>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import store from "../vuex/store";
export default {
  name: "showBlog",
  data() {
    return {
      showData: [],
      showDatas:[],
      loader: true,
      options:""
    };
  },
  store,
  methods: {},
  created() {
    this.options = this.$store.state.module100.option;
    // 获取数据
    this.$http
      .get("https://wd3164396133mufdfp.wilddogio.com/posts.json")
      .then(res => {
        return res.json();
      })
      .then(data => {
        for (var key in data) {
          data[key].id = key;
          this.showDatas.push(data[key]);
          this.loader = false;
        }
        this.showDatas.reverse();

        if (this.options == "前端") {
          this.showDatas = this.showDatas.filter(function(item, index) {
              var ss = /[a-zA-Z]/;
              return ss.test(item.createBlog);
          });
        }
        if (this.options == "文章") {
          this.showDatas = this.showDatas.filter(function(item, index) {
            var ss = /[\u4e00-\u9fa5]/;
            return ss.test(item.createBlog);
          });
        }
        var that = this;
        var ss_Cn = /[\u4e00-\u9fa5]/;
        if (
          ss_Cn.test(that.options) &&
          that.options != "文章" &&
          that.options != "前端"
        ) {
          that.showDatas = that.showDatas.filter(function(item, index) {
            return item.createBlog == that.options;
          });
        }
       if (that.options.b != undefined) {
          that.showDatas = that.showDatas.filter(function(item, index) {
            return (
              that.options.b.getDates === item.data.getDates &&
              that.options.b.getFullYears === item.data.getFullYears &&
              that.options.b.getMonths === item.data.getMonths
            );
          });
        }
        if (that.options.a != undefined) {
          this.searchResult = true;
          this.searchResult_s = false;
          this.searchResult_date = false;
          that.showDatas = that.showDatas.filter(function(item, index) {
            return item.title.indexOf(that.options.a) != -1;
          });
        }
        var ss_En = /[a-z ]*[a-z]+[a-z ]*$/;
        if (ss_En.test(that.options)) {
          that.showDatas = that.showDatas.filter(function(item, index) {
            return item.createBlog == that.options;
          });
        }
         var i=0;
        var time = setInterval(function(){
          if(i>=that.showDatas.length){
              clearInterval(time);
              return false;
          }
          that.showData.push(that.showDatas[i]);
                i++;
          },500);
      });
  }
};
</script>

<style scoped>
* {
  list-style: none;
  transition: all 0.5s;
  box-sizing: border-box;
}
.label{
  width: 100%;
  height: 40px;
  background: red;
  margin: auto;
  margin-bottom: 30px;
  padding: 10px 50px;
  font-size: 20px;
  font-weight: bold;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

}
.label>p{
  line-height: 19px;
  color: #555;
}
.label>p>a{
  color: red;
  text-decoration: none;
}
@media screen and (max-width: 1240px) {
  .Date {
    display: none !important;
  }
  .showBlog_navLi {
    margin-left: 33px !important;
    transform: scale(0.9) !important;
  }
}
@media screen and (max-width: 1160px) {
  .showBlog_navLi {
    margin-left: 10px !important;
  }
  .showBlog_nav {
    padding-left: 135px !important;
  }
}
@media screen and (max-width: 1134px) {
  .showBlog_navLi {
    margin-left: 10px !important;
  }
  .showBlog_nav {
    padding-left: 135px !important;
  }
}
@media screen and (max-width: 1134px) {
  .showBlog_navLi {
    margin-left: 70px !important;
    width: 40% !important;
    transform: scale(1) !important;
  }
  .showBlog_nav {
    padding-left: 20px !important;
  }
}

@media screen and (max-width: 870px) {
  .showBlog_navLi {
    /* margin-left: 70px !important;
        width: 40% !important; */
    transform: scale(0.9) !important;
  }
  .showBlog_nav {
    padding: 50px 20px !important;
  }
}
@media screen and (max-width: 800px) {
  .showBlog_navLi {
    margin-left: 41px !important;
  }
}
@media screen and (max-width: 550px) {
  .showBlog_navLi {
    width: 80% !important;
  }
}
@media screen and (max-width: 1134px) {
      .toLoad > img{
        left: -59px !important;
      }
}
.toLoad {
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 99999999;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.toLoad > img {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
#showBlog {
  height: auto;
}

.showBlog_nav {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 50px 100px 20px 20px;
  background: #f1f1f1;
}
.showBlog_navLi {
  width: 30%;
  height: 350px;
  background: #fff;
  margin-bottom: 20px;
  margin-left: 35px;
  position: relative;
}
.showBlog_navLi > a > img {
  width: 100%;
  height: 200px;
}
.cover {
  width: 100%;
  height: 116px;
  /* background: red; */
  position: absolute;
  padding: 20px 20px;
  bottom: 30px;
}
.cobers {
  width: 100%;
  height: 0px;
  background: #016dab;
  position: absolute;
  bottom: 30px;
}
.cover p {
  color: #000;
  font-size: 18px;
  margin-bottom: 10px;
}
.cover span {
  display: inline-block;
  width: 100%;
  height: 40px;
  color: #555;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-wrap;
}
.Date {
  width: 100%;
  padding: 0px 20px;
  margin-top: 6px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 5px;
}
.Date a {
  font-size: 13px;
  text-decoration: none;
  color: #555;
}
.showBlog_navLi:hover .cobers {
  height: 116px;
}
.showBlog_navLi:hover .cover span,
.showBlog_navLi:hover .cover p {
  color: #fff;
}
</style>
