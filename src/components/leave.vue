<template>
  <div class="divs">
      <div id="starrySky" @click="starrySky_s">
          <div
          class="bulletScreen"
          >
            <ul v-for="(item,index) in marque" :key="index"
              class="aas"
            v-html="item">
            </ul>
          </div>
      </div>
      <div class="comment">
          <div class="comment_s"
          v-if="flag"
              ref="comment_sA"
          @click="comment_s">
            <p>点</p>
             <p>击</p>
            <p>评</p>
            <p>论</p>
          </div>
          <div class="comment_s"
          v-if="flags"
          @click="comment_s">
            <p>关</p>
             <p>闭</p>
            <p>评</p>
            <p>论</p>
          </div>
          <div class="comment_Div" ref="comment_Div">
              <div class="text_com">
                    <img
                      v-for="(item,index) in datala.imgsrc" :key="index"
                    :src="item"
                  @click="clickimg($event,index)"
                    alt="">
              </div>
              <p class="p_login">
                登陆或者输入昵称进行评论
                <input type="text"
                v-if="this.$store.state.module100.userName==''"
                  v-model="user"
                  @blur="blur"
                 placeholder="请输入昵称">
                  <a href="#"
                  v-if="this.$store.state.module100.userName==''"
                  >未登陆</a>
                  <a href="#" v-else>
                    已登陆
                  </a>
                   <a href="#" v-if="Gs_userName">
                   用户名格式错误
                  </a>
              </p>
              <textarea name="" id="" cols="30" rows="10"
              v-model="dynamic"
              style="resize:none"
                class="text_com_text"
               >
              </textarea>
             <button class="but" @click="good()">发表评论</button>
          </div>
      </div>
  </div>
</template>
<script>
import store from "../vuex/store";
export default {
  data() {
    return {
      datala: {

        $fala: [
          ":smile:",
          ":blush:",
          ":relaxed:",
          ":smiley:",
          ":wink:",
          ":heart_eyes:",
          ":kissing_heart:",
          ":kissing_closed_eyes:",
          ":flushed:",
          ":grin:",
          ":lol:",
          ":mad:",
          ":twisted:",
          ":rolleyes:",
          ":wink:",
          ":cool:",
          ":arrow:",
          ":neutral:",
          ":cry:",
          ":mrgreen:",
          ":drooling:",
          ":cowboy:",
          ":persevering:",
          ":symbols:",
          ":shit:"
        ],
        imgsrc: [
          "../../static/expression/1.png",
          "../../static/expression/2.png",
          "../../static/expression/3.png",
          "../../static/expression/4.png",
          "../../static/expression/5.png",
          "../../static/expression/6.png",
          "../../static/expression/7.png",
          "../../static/expression/8.png",
          "../../static/expression/9.png",
          "../../static/expression/10.png",
          "../../static/expression/11.png",
          "../../static/expression/12.png",
          "../../static/expression/13.png",
          "../../static/expression/14.png",
          "../../static/expression/15.png",
          "../../static/expression/16.png",
          "../../static/expression/17.png",
          "../../static/expression/18.png",
          "../../static/expression/19.png",
          "../../static/expression/20.png",
          "../../static/expression/21.png",
          "../../static/expression/22.png",
          "../../static/expression/23.png",
          "../../static/expression/24.png",
          "../../static/expression/25.png"
        ]
      },
      marque:[],
      text: "",
      dynamic: "",
      Gs_userName:false,
      user: "",
      userZ:/^[a-zA-Z\u4e00-\u9fa5]+$/,

      uPattern: /^[a-zA-Z\u4e00-\u9fa5]+$/,
      ePattern: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
      http: /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/,

      leave: [],
      flag:true,
      flags:false
    };
  },
  store,
  methods: {
    comment_s(){
      if(this.flag){
          this.$refs.comment_Div.className="comment_Div_S"
          this.flag=false
            this.flags=true;
      }else{
          this.$refs.comment_Div.className="comment_Div"
          this.flag=true;
          this.flags=false;
      }
    },
    starrySky_s(){
        this.flags=false;
        this.flag=true;
        this.$refs.comment_Div.className="comment_Div"
    },
    blur(){
       if(this.userZ.test(this.user)||this.user==""){
          this.Gs_userName=false;

       }
       else{
          this.Gs_userName=true;
       }
    },
    good() {
      if(this.user==""&&this.$store.state.module100.userName ==""){
          alert("请输入账号或者登陆进行评论");
      }
      else{
        if(this.userZ.test(this.user)||this.$store.state.module100.userName!=""){
           if(this.dynamic==""){
              alert("评论内容不可为空");
              return false;
          }
        var obj = {};
        var str= this.dynamic;
        var str2= this.dynamic;
        obj.userName = this.$store.state.module100.userName==""?this.user:this.$store.state.module100.userName;
        var arr = this.datala.$fala;
        for (var i = 0; i < arr.length; i++) {
          var ss = arr[i];
          var reg = "/" + ss + "/g";
          str = str.replace(
            eval(reg),
            ` <img style="display:inline-block;
              margin-left:1px;
            width:20px;height:20px;" src="${this.datala.imgsrc[i]}" /> `
          );

        }
        this.text = str;
        obj.text = this.text;
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

         for (var i = 0; i < arr.length; i++) {
          var ss = arr[i];
          var reg = "/" + ss + "/g";
          str2 = str2.replace(
            eval(reg),
            "@"
          );

        }
      if(str2.length>=30){
          alert("输入字符超出范围,限制30个");
          return false;
      }
       obj.time =  Item();
        this.$http
          .post("https://wd3164396133mufdfp.wilddogio.com/leave.json", obj)
          .then(function(data) {
            this.$store.commit("Reg","评论成功");
            this.$router.push({
              name: "errorName",
              params: {
                Errer: "您已评论成功"
              }
            });
            this.$refs.comment_Div.className="comment_Div_S"
          });
        }
      }
    },
    clickimg(event, ind) {
      this.dynamic += this.datala.$fala[ind];
    },
        //tanmu函数,参数说明.content:弹幕内容;fontcolor:弹幕颜色;speed:运动速度，单位为px/s（每秒运动多少像素）;startTime:开始的时间，单位为毫秒;
      tanmu:function(content, fontColor, speed, startTime) {
          var that = this;
          function add(content, speed) {
              var html = "";
              html += "<marquee   scrolldelay='1000' direction='left' scrollamount='" + speed + "' style='color:" + fontColor + "'>"
                +
                "<div style='padding:5px 15px;width:300px;display: inline-block;'>"+
                   "<img src="+content.img+" alt='' style='width:50px;height:50px;border-radius:50%;float:left;margin-right:10px'>"+
                  "<p style='float:left;color:cornflowerblue;font-weight:bold'>"+content.name+"</p><br/>"+
                  "<span style='font-size:19px;margin-right:5px'> "+content.text+
                      "<br/><span style='font-size:12px;color:#fc9601'>"+content.item+"</span>"+

                  "</span>"
                +
                "</div>"
               "</marquee>";
             that.marque.push(html);
          }
        setTimeout(add(content, speed), startTime);
    },
  },
  created() {
    this.$http
      .get("https://wd3164396133mufdfp.wilddogio.com/leave.json")
      .then(function(data) {
        return data.json();
      })
      .then(res => {
        for (var key in res) {
          this.leave.push(res[key]);
        }
        var arr = this.leave;
        for (var i = 0; i < arr.length; i++) {
          var timei = new Date(arr[i].item).getTime();
          for (var j = 0; j < arr.length; j++) {
            var timej = new Date(arr[j].item).getTime();
            if (timei > timej) {
              var qq = arr[i];
              arr[i] = arr[j];
              arr[j] = qq;
            }
          }


        }
        arr.reverse();
        var math = function(a,b){
            return parseInt((Math.random()*a)+b);
        }
       for(var is=0; is<arr.length; is++){
          this.tanmu({
              img:"../../static/T_ximg/"+math(30,2)+".jpeg",
              name:arr[is].userName,
              text:arr[is].text,
              item:arr[is].time
          },is==0?"red":"#fff",math(150,40),100);
        }
      });
    },
    mounted(){

    }
};
</script>
<style scoped>

* {
  box-sizing: border-box;
  transition: all 0.5s;
  list-style: none;
  text-decoration: none;
}
#starrySky{
  width: 100%;
  position: absolute;
  top:0px;
  background-image:url("http://ppe.oss-cn-shenzhen.aliyuncs.com/palette/242696/1535729677326/thumb_Fri_Aug_31_2018.jpg");
  background-repeat:no-repeat;
  background-size:cover;

}
#bulletScreen{
  /* width: 100%; */
}
@media screen and (max-width: 840px) {
    .comment_Div_S{
      width: 426px !important;
    }
    .text_com{
          margin-bottom: 26px !important;
    }
}
@media screen and (max-width: 500px) {
    .comment_Div_S{
      width: 302px !important;
    }
    .text_com{
          margin-bottom: 54px !important;
    }
    .text_com_text{
      height: 36px !important;
    }
    .but{
      height: 21px !important;
    }
    .comment{
      bottom: 24px !important;
    }
}

.bulletScreen{
  padding-top: 100px;
  padding-bottom: 400px;
}
.comment{
  width: 50px;
  height:200px;
 background: #000c18;
  position: fixed;
  right:0;
  bottom:0;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  cursor: pointer;
  padding-top: 20px;
  z-index: 4444444;
}
.comment_s>p{
    font-size: 20px;
    color:#fff;
    margin-bottom: 20px;
    text-align: center;
}
.comment_Div_S{
   position: absolute;
  width: 790px;
  overflow: hidden;
  height: 100%;
  background: #000c18;
  padding: 15px;
   border-radius: 10px;
  border-radius: 10px;
  right:50px;
  top:0;
}
.comment_Div{
  position: absolute;
  width: 0px;
  overflow: hidden;
  height: 100%;
  background: #000c18;
   border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  right:50px;
  top:0;
}
.text_com{
  width: 100%;
  height: 30px;
   margin-bottom: 5px;
  padding-top:4px;
}
.text_com img{
  width: 20px;
  height: 20px;
  margin-left: 10px;
}
.text_com_text{
  width: 100%;
  height: 60px;
}
.p_login{
  color:cornflowerblue !important;
  margin-bottom: 10px;
}
.p_login input{
  width: 100px;
  height: 30px;
  font-size: 14px;
  outline: none;
  padding-left: 10px;
  margin-left: 30px;
  margin-right: 30px;
  border:none;
  border-radius:5px;
}
.p_login a{
  font-weight: bold;
  color:chocolate;
  margin-right: 30px;
}
.but{
  width: 100%;
  margin-top: 5px;
  height: 30px;
  background: blue;
  border:none;
  border-radius: 5px;
  color: #fff;
  outline: none;
  font-size: 16px;
  cursor: pointer;
}
</style>
