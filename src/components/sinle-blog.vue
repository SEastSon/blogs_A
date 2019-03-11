<template>
  <div id="sinle-bloh">
    <div id="upload" v-if="onload==true">
      <img
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551690406975&di=1540671bda171b99ace3f6a320f06ba9&imgtype=0&src=http%3A%2F%2Ffso-static.bj.bcebos.com%2Fmall%2Farticle%2F20170506%2F590ca9b1b3054.gif"
        alt
      >
    </div>
    <div class="post">
    <div class="sinle-bloh_s" v-if="onload==false">
      <h2 class="H2_tite">{{detailPge.title}}</h2>
      <p class="p_tite">
        <span>
          <i class="iconfont icon-rili">
          {{date.getFullYears}}年
           {{date.getMonths}}月
            {{date.getDates}}日
          </i>
        </span>
        <span>
          <i class="iconfont icon-xinxi"></i>
          {{detailPge.comment}}条评论
        </span>
        <span>
          <i class="iconfont icon-yuedu"></i>
          {{detailPge.read}}次阅读
        </span>
        <span>
          <i class="iconfont icon-dianzan2"></i>
          {{detailPge.spot}}人点赞
        </span>
      </p>
      <img :src="detailPge.img" alt>
            <textarea name=""
            :style="{height:heigh}"
            id="textArea"
            cols="30" rows="10"
          disabled
          style="resize:none"
        v-model="detailPge.content"
        >
        </textarea>
      <div class="give">
        <a @click="spot()">
          <i class="iconfont icon-dianzan2"></i> 点赞
        </a>
        <router-link to="/fight">
          <i class="iconfont icon-dashang"></i>打赏
        </router-link>
      </div>
    </div>
    <div class="TheNext">
      <ul>
        <li v-show="presentIndexTop">
          <a @click="previousPosts()">
            &lt;
            上一篇
          </a>
        </li>
        <li v-show="presentIndexBottom">
          <a @click="nextPosts()">
            下一篇
            &gt;
          </a>
        </li>
      </ul>
    </div>
    <div
      class="discuss"
      v-for="(item,index) in conent_faces"
      ref="len"
      :key="index"
      v-if="item.faces==undefined?item.comment.id==id:item.faces.id==id"
    >
      <div v-if="item.faces==undefined">
        <p id="discuss_p">{{item.comment.userName}}:&nbsp;</p>
        <p class="imgP">
          <img :src="imgs" alt v-for="(imgs,index) in item.comment.imgSrc" :key="index">
        </p>
        <span class="items">{{item.comment.item}}</span>
        <div
          class="delate"
          v-if="$store.state.module100.userName==item.comment.userName"
          @click="delateFaces(item.idx,item)"
        >删除</div>
      </div>
      <div v-if="item.comment==undefined">
        <p id="discuss_p">{{item.faces.userName}}:&nbsp;</p>
        <p class="imgP imgText">{{item.faces.text}}</p>
        <span class="items">{{item.faces.item}}</span>
        <div
          class="delate"
          v-if="$store.state.module100.userName==item.faces.userName"
          @click="delateFaces(item.idx,item)"
        >删除</div>
      </div>
    </div>
    <div class="discuss">
      <h4>发表评论</h4>
      <p v-if="$store.state.module100.userName==''">
        <span>未登陆&nbsp;&nbsp;&nbsp;&nbsp;
          <router-link :to="{path:'/login',query:{ss:id}}" id="logIn" @click.native="$store.commit('fan_hui',true)">登陆</router-link>
        </span>
      </p>
      <p v-if="$store.state.module100.userName!=''">
        <span>
          已登陆为&nbsp;{{$store.state.module100.userName}}&nbsp;&nbsp;&nbsp;
          <router-link to id="logIn" @click.native="$store.commit('onUserName','')">退出登陆</router-link>
        </span>
      </p>
      <div id="expression">
        <img
          v-for="(item,index) in expression"
          :src="getImgUrl(index+1)"
          @click="brow(item,index,getImgUrl(index+1))"
          :key="index"
          :title="item"
        >
      </div>
      <div id="Add_expression">
        <div>
          <p v-if="imgSrc.length==0" id="astrict">表情最多发送20个</p>
          <img v-for="(item,index) in imgSrc" :src="item" :key="index">
        </div>
      </div>
      <div class="show_expressions show_expressions_1" @click="expressions_1()">😊发表表情😊</div>
      <textarea
        name
        id="character"
        @focus="blurBlogin"
        cols="30"
        rows="10"
        v-model="blugin"
        style="resize:none"
      ></textarea>
    </div>
    <div id="show_expression">
      <div id="show_expressions" class="show_expressions" @click="review()">发表评论</div>
    </div>
    </div>
  </div>
</template>

<script>

import store from "../vuex/store";
export default {
  name: "sinle-blog",
  components: {},
  data() {
    return {
      id: this.$route.params.id,
      detailPge: [],
      blugin: "",
      presentIndex: 0,
      presentIndexTop: true,
      presentIndexBottom: true,
      https: "",
      allComplete: [],
      Href: "",
      spots: 0,
      Bq_show: [],
      Bq_name: [],
      faces: [],
      comment: [],
      heigh:"",
      conent_faces: [],
      onload: true,
      date:{
        fuers:"",
        mount:"",
        dates:""
      },
      expression: [
        "razz",
        "evil",
        "exclaim",
        "smile",
        "redface",
        "biggrin",
        "surprised",
        "eek",
        "confused",
        "idea",
        "lol",
        "mad",
        "twisted",
        "rolleyes",
        "wink",
        "cool",
        "arrow",
        "neutral",
        "cry",
        "mrgreen",
        "drooling",
        "cowboy",
        "persevering",
        "symbols",
        "shit"
      ],
      imgSrc: [],
      comment_face: {
        comment: {}
      },
      face: {
        comment: {}
      },
      sum: 0
    };
  },
  store,
  mounted() {


    window.addEventListener("scroll", this.scrollToTop);
  },
  created: function() {
    this.$http
      .get("https://wd3164396133mufdfp.wilddogio.com/comment.json")
      .then(res => {
        this.onload = false;
        return res.json();
      })
      .then(data => {
        for (var key in data) {
          data[key].idx = key;
          this.comment.push(data[key]);
        }
        this.$http
          .get("https://wd3164396133mufdfp.wilddogio.com/face.json")
          .then(res => {
            this.onload = false;
            return res.json();
          })
          .then(data => {
            for (var key in data) {
              data[key].idx = key;
              this.faces.push(data[key]);
            }
            this.conent_faces = this.comment.concat(this.faces);
            for (var k = 0; k < this.conent_faces.length; k++) {
              if (this.conent_faces[k].comment == undefined) {
                if (this.conent_faces[k].faces.id == this.id) {
                  this.sum++;
                }
              } else {
                if (this.conent_faces[k].comment.id == this.id) {
                  this.sum++;
                }
              }
            }
            this.detailPge.comment = this.sum;
            this.detailPge.read ++;
            this.$http
              .put(
                "https://wd3164396133mufdfp.wilddogio.com/posts/" +
                  this.id +
                  ".json",
                this.detailPge
              )
              .then(function(data) {


              });

            var arr = this.conent_faces;
            for (var i = 0; i < arr.length; i++) {
              var ind = arr[i].comment == undefined ? "faces" : "comment";
              var timei = new Date(arr[i][ind].item).getTime();
              for (var j = 0; j < arr.length; j++) {
                var indj = arr[j].comment == undefined ? "faces" : "comment";
                var timej = new Date(arr[j][indj].item).getTime();
                if (timei > timej) {
                  var qq = arr[i];
                  arr[i] = arr[j];
                  arr[j] = qq;
                }
              }
            }
            this.conent_faces = arr;
          });
      });
    var Href = () => {
      let timer = setInterval(() => {
        let ispeed = Math.floor(-this.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          this.scrollTop + ispeed;
        if (this.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 20);
    };
    this.Href = Href;
    this.https = function() {
      this.$http
        .get(
          "https://wd3164396133mufdfp.wilddogio.com/posts/" + this.id + ".json"
        )
        .then(function(data) {
          this.onload = false;
          return data.json();
        })
        .then(data => {
            var textArea = document.getElementById("textArea");
          this.detailPge = data;
          this.date=this.detailPge.data;
              var that = this;
              setTimeout(function(){
                 that.heigh=textArea.scrollHeight +"px";
              },200)
        });
    };

    this.https();
    this.$http
      .get("https://wd3164396133mufdfp.wilddogio.com/posts/.json")
      .then(function(res) {
        return res.json();
      })
      .then(data => {
        for (var key in data) {
          data[key].id = key;
          this.allComplete.push(data[key]);
        }
        for (var i = 0; i < this.allComplete.length; i++) {
          if (this.allComplete[i].id == this.id) {
            if (i >= this.allComplete.length - 1) {
              this.presentIndexBottom = false;
            }
            if (i <= 0) {
              this.presentIndexTop = false;
            }
            this.presentIndex = i;
          }
        }
      });
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },
  methods: {
    // 删除选项
    delateFaces(idx, Item) {
      if (Item.comment == undefined) {
        this.$http
          .delete(
            "https://wd3164396133mufdfp.wilddogio.com/comment/" + idx + ".json"
          )
          .then(function(data) {
             this.$store.commit("Reg","发表为空");
            this.$router.push({
              name: "errorName",
              params: {
                Errer: "当前评论删除成功",
                idx:this.id
              }
            });
          });
      } else {
        this.$http
          .delete(
            "https://wd3164396133mufdfp.wilddogio.com/face/" + idx + ".json"
          )
          .then(function(data) {
             this.$store.commit("Reg","发表为空");
            this.$router.push({
              name: "errorName",
              params: {
                Errer: "当前评论删除成功",
                idx:this.id
              }
            });
          });
      }
    },
    // textare获取焦点事件
    blurBlogin() {
      if (this.$store.state.module100.userName == "") {
         this.$store.commit("Reg","发表为空");
        this.$router.push({
          name: "errorName",
          params: {
            Errer: "请先登陆在进行评论",
            idx:this.id
          }
        });
        return false;
      }
    },
    //发表评论
    review() {
      if (this.$store.state.module100.userName == "") {
        this.$store.commit("Reg","发表为空");
        this.$router.push({
          name: "errorName",
          params: {
            Errer: "请先登陆在进行评论",
            idx:this.id
          }
        });
        return false;
      } else {
        function Item() {
          var now = new Date(),
            y = now.getFullYear(),
            m = now.getMonth() + 1,
            d = now.getDate();
          return (
            y +
            "-" +
            (m < 10 ? "0" + m : m) +
            "-" +
            (d < 10 ? "0" + d : d) +
            " " +
            now.toTimeString().substr(0, 8)
          );
        }
        var obj = {};
        obj.text = this.blugin;
        obj.userName = this.$store.state.module100.userName;
        obj.id = this.id;
        obj.item = Item();
        this.face.faces = obj;
        this.$store.commit("Reg","发表为空");
            if(this.blugin==""){
                this.$router.push({
                  name: "errorName",
                  params: {
                    Errer: "评论内容不可为空",
                    idx:this.id
                  }
                });
                return false;
            }
            else if(this.blugin.length>=30){
                alert("评论内容超出范围,限制字符30ge");
                return false;
            }
            else{
              this.$http
          .post(
            "https://wd3164396133mufdfp.wilddogio.com/comment.json",
            this.face
          )
          .then(function(data) {
            this.$store.commit("Reg","发表为空");
              this.$router.push({
                name: "errorName",
                params: {
                  Errer: "感谢您的评论🙏",
                  idx:this.id
                }
              });
          });

            }


      }
    },

    //点击表情
    brow(item, idx, src) {
      if (this.$store.state.module100.userName == "") {
         this.$store.commit("Reg","发表为空");
        this.$router.push({
          name: "errorName",
          params: {
            Errer: "请先登陆在进行评论",
            idx:this.id

          }
        });
        return false;
      }
      if (this.imgSrc.length >= 20) {
        return false;
      } else {
        this.imgSrc.push(src);
      }
    },

    //发表图片
    expressions_1() {
      if (this.imgSrc.length == 0) {
         this.$store.commit("Reg","发表为空");
        this.$router.push({
          name: "errorName",
          params: {
            Errer: "😊表情😊内容不可为空",
            idx:this.id
          }
        });
      } else {
        if (this.$store.state.module100.userName == "") {
           this.$store.commit("Reg","发表为空");
          this.$router.push({
            name: "errorName",
            params: {
              Errer: "请先登陆在进行评论",
              idx:this.id
            }
          });
          return false;
        } else {
          function Item() {
            var now = new Date(),
              y = now.getFullYear(),
              m = now.getMonth() + 1,
              d = now.getDate();
            return (
              y +
              "-" +
              (m < 10 ? "0" + m : m) +
              "-" +
              (d < 10 ? "0" + d : d) +
              " " +
              now.toTimeString().substr(0, 8)
            );
          }
          var obj = {};
          obj.imgSrc = this.imgSrc;
          obj.userName = this.$store.state.module100.userName;
          obj.id = this.id;
          obj.item = Item();
          this.comment_face.comment = obj;
          this.$http
            .post(
              "https://wd3164396133mufdfp.wilddogio.com/face.json",
              this.comment_face
            )
            .then(function(data) {
               this.$store.commit("Reg","发表为空");
              this.imgSrc = [];
              this.$router.push({
                name: "errorName",
                params: {
                  Errer: "感谢您的评论🙏",
                  idx:this.id
                }
              });
            });
        }
      }
    },
    spot() {
      this.detailPge.spot++;
      this.$http
        .put(
          "https://wd3164396133mufdfp.wilddogio.com/posts/" + this.id + ".json",
          this.detailPge
        )
        .then(function(data) {
           this.$store.commit("Reg","发表为空");
          this.$router.push({
            name: "errorName",
            params: {
              Errer: "您的点赞👍像极了爱情！！！",
              idx:this.id
            }
          });
        });
    },
    getImgUrl(icon) {
      return require("../../static/expression/" + icon + ".png");
    },
    scrollToTop() {
      let that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
    },
    //上一篇
    previousPosts() {
      this.presentIndexBottom = true;
      if (this.presentIndex <= 1) {
        this.presentIndexTop = false;
      }
      this.presentIndex--;
      this.id = this.allComplete[this.presentIndex].id;
      this.$router.push({
        path: "/blog/" + this.id
      });
      this.$router.go(0);
      this.Href();
      this.https();
    },
    //下一篇
    nextPosts() {
        this.$router.go(0);
      this.presentIndexTop = true;
      if (this.presentIndex >= this.allComplete.length - 2) {
        this.presentIndexBottom = false;
      }
      this.presentIndex++;
      this.id = this.allComplete[this.presentIndex].id;
      this.$router.push({
        path: "/blog/" + this.id
      });
      this.Href();

      this.https();
    }
  }
};
</script>

<style scope>
* {
  list-style: none;
}
.H2_tite{
  font-size: 18px;
  font-size: 400;
  color: #666;
  margin-bottom: 10px;
}
.p_tite{
  margin-left: 15px;
}
.p_tite,
.p_tite>span>i{

  font-size:13px !important;
}
#sinle-bloh{
  width: 100%;
  margin-top: -600px;
  background:#ececec;
/*  background-image:url("http://ppe.oss-cn-shenzhen.aliyuncs.com/collections/102/2/thumb.jpg");*/
  background-repeat:no-repeat;
  background-size:100%;
  padding-top:300px;
  padding-bottom: 30px;
  margin-top: 0px;

}
#upload {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  z-index: 33;
  background: #fff;
}
#upload > img {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
#astrict {
  margin-top: 20px;
  margin-left: 5px;
  color: #666;
}
.items {
  font-size: 13px;
  color: #666;
  position: absolute;
  right: 20px;
  bottom: 10px;
}
.discuss {
  padding: 15px !important;
  position: relative;
}
#discuss_p {
  margin: 0px !important;
  font-size: 18px !important;
  color: #000 !important;
  font-weight: bold !important;
}
.discuss {
  margin-bottom: 20px;
}
.imgP {
  margin: 0px !important;
  margin-left: 15px !important;
}
.imgP > img {
  width: 20px !important;
  height: 20px !important;
  margin-left: 5px !important;
  margin: 0px;
}
.discuss > li {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}

.sinle-bloh_s,
.TheNext,
.discuss,
#show_expression {
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.8);
  background: #fff;
  width: 1000px;
  margin:0 auto;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 50px;
  box-sizing: border-box;
  margin-top: -252px;
}
.TheNext,
.discuss,
#show_expression{
 box-shadow:none!important;
}
.imgText {
  font-size: 15px;
  color: #666;
  margin-top: 5px !important;
  margin-left: 15px !important;
}
#sinle-bloh > div > h2 {
  text-align: center;
  font-size: 20px;
  color: #333;
}
.delate {
  color: #009cff;
  position: absolute;
  top: 5px;
  right: 10px;
  display: none;
}
.delate:hover {
  color: red;
}
.discuss:hover .delate {
  display: block;
}
#sinle-bloh > div > p {
  margin-top: 20px;
  color: #999;
  font-size: 13px;

}

#textare {
  display: block;
  margin: 0 auto;
  width: 100%;
  height: 1200px;
  border: none;
  font-size: 17px;
  color: #333;
  outline: none;
  margin-top: 20px;
padding-right: 20px;
  cursor: pointer;
      letter-spacing: 3px;
}
.sinle-bloh_s img {
  width: 100%;
  height: 150px;
  margin-bottom: 30px;
  margin-top: 20px;
}
.give {
  width: 332px;
  height: 100px;
  display: flex;
  margin: 20px auto;
  position: relative;
}
.give:before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: -204px;
  width: 740px;
  height: 1px;
  background: #cecece;
}
.give > a {
  width: 130px;
  height: 30px;
  display: block;
  border: 1px solid #e87461;
  border-radius: 0;
  background: #fff;
  box-shadow: none;
  color: #e87461;
  text-align: center;
  text-decoration: none;
  font-size: 15px;
  cursor: pointer;
  line-height: 30px;
  margin: 35px auto;
}
.give > a:nth-of-type(2) {
  border: 1px solid #009cff;
  color: #009cff;
}
.give > a:nth-of-type(2) > i {
  color: #009cff;
}
.give > a:nth-of-type(2):hover {
  color: #fff;
  background: #009cff;
}
.give > a:hover i {
  color: #fff;
}
.give > a:hover {
  color: #fff;
  background: #e87461;
}

.give > a > i {
  font-size: 17px;
}

.TheNext {
  box-shadow: none !important;
  background: transparent !important;
  margin-top: 20px !important;
  padding-top: 0px;
  height: 30px;
  margin-bottom: 20px;
  padding-left: 0px;
  padding-right: 0px;
  position: relative;
}
.discuss{
   margin-top:5px !important;
}
.TheNext > ul > li:nth-of-type(2) {
  position: absolute;
  right: 0;
  top: 0;
}

.TheNext > ul > li:nth-of-type(1) {
  position: absolute;
  left: 0;
  top: 0;
}

.TheNext > ul > li {
  width: 100px;
  height: 30px;
  text-align: center;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-weight: 500;
  background:  #009cff;
}
.TheNext > ul > li:hover{
  background:#e87461;
   font-weight: 600;
}
.TheNext > ul > li > a {
  color: #666;
  font-size: 14.5px;
  line-height: 30px;
}
.discuss {
  padding-top: 20px;
  padding-bottom: 20px;
  cursor: pointer;
}


.discuss > h4 {
  font-size: 19px;
  margin-bottom: 20px;
}

.discuss > p {
  margin-bottom: 20px;
  color: #999;
}

.discuss > p > span {
  text-align: left;
}

#character {
  width: 100%;
  height: 100px;
  margin: 0 auto;
  outline: none;
  margin-top: 10px;
  padding: 10px;
  box-sizing: border-box;
}

#show_expression {
  padding-top: 10px;
  padding-bottom: 10px;
  box-sizing: border-box;
  margin-bottom: 40px;
}

.show_expressions_1 {
  margin: 10px auto;
}

#show_expressions,
.show_expressions {
  width: 100%;
  height: 40px;
  background: #009cff;
  text-align: center;
  line-height: 40px;
  color: #fff;
  cursor: pointer;
}

#show_expression {
  margin-top: 30px;
}

#expression {
  width: 100%;
}
#Add_expression > div {
  margin-top:13px;
}
#expression > img,
#Add_expression > div > img {
  margin-left: 4px;
  width: 25px;
  height: 25px;
  cursor: pointer;
}

#logIn {
  color: #666;
  font-size: 15px;
  font-weight: normal;
}

#logIn:hover {
  color: #009cff;
}

#Add_expression {
  overflow: hidden;
  width: 100%;
  height: 50px;
  margin-top: 10px;
  border: 1px solid #ececec;
}

#textArea{
  width:96%;
  font-size: 16px;
  color: #000;
  font-weight:500;
  border: none;
  padding: 20px;
  outline: none;
  letter-spacing:2px;
}
.TheNext>ul>li>a{
  color: #fff;
}
@media screen and (max-width: 1240px) {
    .sinle-bloh_s,
    .TheNext,
    .discuss,
    #show_expression{
      width: 950px !important;
    }
}
@media screen and (max-width: 1040px) {
    .sinle-bloh_s,
    .TheNext,
    .discuss,
    #show_expression{
      width: 700px !important;
    }
    .give:before{
      background: transparent !important;
    }
}
@media screen and (max-width: 800px) {
    .sinle-bloh_s,
    .TheNext,
    .discuss,
    #show_expression{
      width:500px !important;
    }

}
@media screen and (max-width:760px) {
  .sinle-bloh_s,
    .TheNext,
    .discuss,
    #show_expression{
      overflow: hidden;

    }
    .TheNext{
          height: 35px !important;
    }

}
@media screen and (max-width:540px) {
  .sinle-bloh_s,
    .TheNext,
    .discuss,
    #show_expression{
      width:400px !important;
    }

}
@media screen and (max-width:430px) {
    .sinle-bloh_s,
    .TheNext,
    .discuss,
    #show_expression{
      width:350px !important;
    }
}


</style>
