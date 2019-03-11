<template>
  <div id="divs">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide id="swiper_one">
        <swiper :options="swiperOption_1" id="carousel" class="swiper-no-swiping"> 
          <swiper-slide id="carousel_one">
            <ul>
              <li>
                <img src="../assets/ss.png" alt>
                <img src="../assets/ss.png" alt>
              </li>
              <li>
                <img src="../assets/ss.png" alt>
                <img src="../assets/ss.png" alt>
              </li>
            </ul>
            <div id="encouragement">
              <h1>永不言败，是成功者的最佳品格。</h1>
              <h1>成功不是凭梦想和希望，而是凭努力和实践</h1>
            </div>
            <div id="encouragements_none">
              <h1>永<br/>不<br/>言<br/>败<br/>是<br/>成<br/>功<br/>者<br/>的<br/>最<br/>佳<br/>品<br/>格<br/></h1>
              <h1>成<br/>功<br/>不<br/>是<br/>凭<br/>梦<br/>想<br/>和<br/>希<br/>望<br/></h1>
              <h1>
                而<br/>是<br/>凭<br/>努<br/>力<br/>和<br/>实<br/>践
              </h1>
            </div>
          </swiper-slide>
          <swiper-slide id="carousel_two">
            <div id="carousel_two_1">
              <img src="http://www.eshidu.com/images/banner1-el.png" alt>
            </div>
            <div id="carousel_two_Text">
              <h1>黑发不知勤学早,白发方悔读书迟</h1>
              <h1>学者贵于行之,而不贵于知之</h1>
            </div>
             <div id="carousel_two_Text_none">
              <h1><br/>黑<br/>发<br/>不<br/>知<br/>勤<br/>学<br/>早<br/>,白<br/>发<br/>方<br/>悔<br/>读<br/>书<br/>迟</h1>
              <h1><br/>学<br/>者<br/>贵<br/>于<br/>行<br/>之<br/>,<br/>而<br/>不<br/>贵<br/>于<br/>知<br/>之</h1>
            </div>
          </swiper-slide>
          <swiper-slide id="carousel_three">
            <div class="carousel_three_img">
              <img src="http://www.eshidu.com/images/banner2-el.png" alt>
            </div>
            <div id="carousel_three_text">
              <h1>East son blog</h1>
              <h1>Welcome</h1>
            </div>
            <div id="carousel_three_IMg">
              <div>
                <i class="iconfont icon-qianduan"></i>
                <h4>前端分享</h4>
              </div>
              <div>
                <i class="iconfont icon-taolun"></i>
                <h4>励志文章</h4>
              </div>
              <div>
                <i class="iconfont icon-liuyan1"></i>
                <h4>留言评论</h4>
              </div>
              <div>
                <i class="iconfont icon-wenzhang"></i>
                <h4>技术讨论</h4>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </swiper-slide>
      <swiper-slide id="swiper_three">
        <div class="inRegardTo" ref="aa">
          <div class="inRegardTo-text">
            <h1>
                  关于我
              <p>ABOUT US</p>
            </h1>
            <div class="Zwjs">
              <h3>自我介绍：</h3>
              <p>我是一个已经从事编程行业2年的码农，业余爱好就是写写博客手收藏
                <br>一些大牛写的有关前端的技术文章。
                <br>本博客95%的内容是有关前端行业的文章。
                <br>以后东子还是以虚心学习大牛技术，好好写博客，增加自己的技术能力，不忘初心。
              </p>
            </div>
            <div class="Bksm">
              <h3>博客说明：</h3>
              <p>本博客为技术分享博客，每天更新技术内容，前端相关技术，
                <br>偶尔分享一些励志文章
              </p>
            </div>
            <div class="BkYl">
              <h3>博客预览操作</h3>
              <p>
                点击前端或文章文章为预览，也可以搜索🔍，点击后进行预览，下方可以进行评论
                <br>如果觉得文章很好，小伙伴们记得给个好评哦，
                <br>>
                最后感谢大家的支持，我们一起学习！！！！
              </p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOption_1: {
        paginswiperOption_1ation: {
          el: ".swiper-pagination",
          clickable: true
        },
        mousewheels: false,
        autoplay: {
          delay: 3000 //1秒切换一次
        },
        on: {
          progress: function(progress) {
            var c_text = document.querySelectorAll("#carousel_two_Text h1");
            var img_q = document.querySelector("#carousel_two_1");
            var carousel = document.querySelector("#carousel_three_text");
            var divAll = document.querySelectorAll("#carousel_three_IMg>div");
            var enco = document.querySelector("#encouragement");
            var imgs = document.querySelectorAll("#carousel_one img");
            if (progress == -0) {
              setTimeout(function() {
                enco.style.transform = "scale(1)";
              }, 400);
              setTimeout(function() {
                imgs[0].style.marginLeft = "190px";
                imgs[0].style.marginTop = "170px";
              }, 600);
              setTimeout(function() {
                imgs[1].style.marginTop = "200px";
                imgs[1].style.marginRight = "290px";
              }, 800);
              setTimeout(function() {
                imgs[2].style.marginTop = "-90px";
                imgs[2].style.marginLeft = "-20px";
              }, 1000);
              setTimeout(function() {
                imgs[3].style.marginRight = "-10px";
                imgs[3].style.marginTop = "-250px";
              }, 1200);
            }
            if (progress == 0.5) {
              setTimeout(function() {
                img_q.style.transform = "rotate(360deg)";
              }, 100);

              setTimeout(function() {
                c_text[0].style.transform = "translateY(0px)";
                c_text[1].style.transform = "translateY(0px)";
              }, 600);
            }
            if (progress == 1) {
              enco.style.transform = "scale(0.6)";
              imgs[0].style.marginLeft = "0px";
              imgs[0].style.marginTop = "-40px";

              imgs[1].style.marginTop = "0px";
              imgs[1].style.marginRight = "100px";

              imgs[2].style.marginTop = "0px";
              imgs[2].style.marginLeft = "0px";

              imgs[3].style.marginRight = "0";
              imgs[3].style.marginTop = "100px";
              setTimeout(function() {
                carousel.style.top = "33%";
                carousel.style.left = "32%";
              }, 200);
              setTimeout(function() {
                divAll[0].style.opacity = 1;
              }, 400);
              setTimeout(function() {
                divAll[1].style.opacity = 1;
              }, 700);
              setTimeout(function() {
                divAll[2].style.opacity = 1;
              }, 1000);
              setTimeout(function() {
                divAll[3].style.opacity = 1;
              }, 1300);
            } else {
              for (var i = 0; i < divAll.length; i++) {
                divAll[i].style.opacity = 0;
              }

              carousel.style.top = "10%";
              carousel.style.left = "60%";
              c_text[0].style.transform = "translateY(-200px)";
              c_text[1].style.transform = "translateY(200px)";
              img_q.style.transform = "rotate(0deg)";
            }
          }
        }
      },
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar"
        },
        direction: "vertical",
        mousewheel: true,
        on: {
          progress: function(progress) {
            var dd = document.querySelector(".inRegardTo");
            var text = document.querySelector(".inRegardTo-text");
            var three = document.querySelector("#swiper_three");
            if (progress == 1) {
              setTimeout(function() {
                dd.style.width = "780px";
                text.style.right = "-200px";
                three.style.backgroundPosition = "-200px 0px";
              }, 500);


            } else {
              dd.style.width = "1100px";
              text.style.right = "100px";
              three.style.backgroundPosition = "-60px 0px";
            }
          }
        }
      }
    };
  },
  deactivated() {
    this.$destroy();
  },
  methods: {}
};
</script>
<style scoped>
* {
  width: 100%;
  height: 100%;
  transition: all 0.8s !important;
  list-style: none;
  box-sizing: border-box;
}
@media screen and (max-width: 1075px) {
    #carousel_three_IMg{
      left: 12% !important;
      transform: scale(.9);
    }
    #carousel_three_text{
      transform: translateX(-86px) !important;
    }
    #carousel_two_1{
          left: 12% !important;
    }
    #carousel_two_Text{
        left:25% !important;
        transform: scale(0.9) !important;
    }
    #carousel_one > ul > li:nth-of-type(1){
      left: -30px !important;
    }
    #carousel_one > ul > li:nth-of-type(2){
      left: 40px !important;
    }
}
@media screen and (max-width: 910px) {
     #carousel_three_IMg{
      left: 6% !important;
      transform: scale(.8);
    }
    #carousel_three_text>h1{
      /* font-size: 60px; */

      transform: scale(.8) !important;
    }
    #carousel_three_text{
         transform: translateX(-92px) !important;
    }

    #carousel_two_1{
        top: 26% !important;
        width: 500px !important;
        height: 400px !important;
        left: 24% !important;
    }
    #carousel_two_Text{
        transform: scale(.8) !important;
        left: 23% !important;
    }
    #encouragement > h1{
       transform: scale(.8) !important;
    }
    #carousel_one > ul > li{
      transform: scale(.8) !important;
    }
    #carousel_one > ul > li:nth-of-type(1) {
          left: -160px !important;
    }
    #carousel_one > ul > li:nth-of-type(2) {
         left: -19px !important;
    }
}
#carousel_two_Text_none{
  top:540px !important;
  left:-128px !important;
}
#encouragements_none,
#carousel_two_Text_none{
  width:120px;
  height: 1000px;
  position: absolute;
  top:611px;
  right:0;
  left:0;
  bottom:0;
  margin: auto;
  display: none;
}
#encouragements_none h1,
#carousel_two_Text_none h1{
  display: block;
  width: 10px;
  margin-left: 30px;
  font-size: 24px;
  color:#fff;
  font-weight: 400;
  float: right;
}
@media screen and (max-width: 775px) {
    .inRegardTo-text > h1{
        text-align: center !important;
            margin-left: 0px !important;
    }
    .Zwjs{
      padding-top: 100px !important;
        width: 400px !important;
         margin-left: 200px !important;
         padding-left: 0 !important;

    }
    .BkYl,.Bksm{
      display: none;
    }
    .inRegardTo{
        background:rgba(0,0,0,0.5) !important;
    }
    .inRegardTo-text > h1,
    .Zwjs > h3{
      color: #000 !important;
    }

    .Zwjs p{
        color: #fff !important;
    }
}
@media screen and (max-width: 630px) {
     .Zwjs{
         margin-left:320px !important;
    }
}
@media screen and (max-width:760px) {
    #carousel_three_IMg{
         left: -2% !important;
         transform: scale(.7) !important;
    }
    #carousel_three_text{
        transform: scale(.7) !important;
    }
    #carousel_three_text>h1{
      margin-left: -190px !important;
    }
    #carousel_two_Text{
        transform: scale(.7) !important;
          left: 11% !important;
    }
    #carousel_two_1{
        left: 15% !important;
    }
    #encouragement > h1{
       transform: scale(.6) !important;
    }
}
@media screen and (max-width:660px) {
    #carousel_three_IMg{
        width: 475px !important;
        height: 350px !important;
        display:block !important;
            bottom: 27px !important;
                left: 17% !important;
    }
    #carousel_three_IMg > div{
        float: left !important;
        margin-left: 25px !important;
    }
    #carousel_two_1{
      top: 34% !important;
      width: 400px !important;
      height: 300px !important;
    }
     #carousel_two_Text{
      transform: scale(.6) !important;
      left: 5% !important;
    }
    #encouragement > h1{
        transform: scale(.5) !important;
    }
    #encouragement{
      left: -24px !important;
    }
    #carousel_one > ul > li{
      transform: scale(.6) !important;
    }
    #carousel_one > ul > li:nth-of-type(1) {
        left: -280px !important;
    }
    #carousel_one > ul > li:nth-of-type(2) {
        left: -130px !important;
    }
}
@media screen and (max-width:530px) {
   .Zwjs{
        width: 215px !important;
         margin-left:480px !important;
    }
    .inRegardTo-text > h1{
      padding-top: 72px;
      margin: 0 !important;
    }
   #encouragement,
   #carousel_two_Text,
   #carousel_two_1{
     display: none;
   }
   #encouragements_none,
   #carousel_two_Text_none{
     display: block;
   }
   #carousel_one > ul > li{
        -webkit-transform: scale(.45) !important;
        transform: scale(.45) !important;
    }
    #carousel_one > ul > li:nth-of-type(1) {
    left: -377px !important;
    }
    #carousel_one > ul > li:nth-of-type(2) {
    left: -232px !important;
    }
    #carousel_two_1{
      top: 44% !important;
      left: 22% !important;
      width: 250px !important;
      height: 216px !important;
    }
}
@media screen and (max-width:410px) {
    #carousel_three_text{
      transform: scale(.6) !important;
    }
    #carousel_three_text>h1{
    margin-left: -320px !important;
    }
    #carousel_three_IMg{
      left: -5% !important;
    }
    #carousel_two_1{
      left: 13% !important;
    }
    #carousel_two_Text_none{
          left: -60px !important;
    }
}
#swiper_one,
#carousel_one,
#swiper_three,
#carousel_two,
#carousel_three {
  width: 100% !important;
  height: 100% !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
}
#carousel_two_Text {
  width: 540px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 30%;
  margin: auto;
  text-align: center;
}
#carousel_three_img {
  position: absolute;
  top: 0px;
}

#carousel_three_text {
  position: absolute;
  width: 540px;
  height: 100px;
  position: absolute;
  top: 10%;
  left: 60%;
  margin: auto;
  text-align: center;
}
#carousel_two_Text > h1:nth-of-type(1) {
  transform: translateY(-200px);
}
#carousel_two_Text > h1:nth-of-type(2) {
  transform: translateY(200px);
}
#carousel_three_IMg {
  width: 780px;
  height: 200px;
  position: absolute;
  bottom: 70px;
  left: 25%;
  display: flex;
  justify-content: space-between;
}
#carousel_three_IMg > div {
  opacity: 0;
  text-align: center;
  position: relative;
  width: 160px;
  height: 160px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("http://www.eshidu.com/images/banner2-el2.png");
}
#carousel_three_IMg > div > i,
#carousel_three_IMg > div > h4 {
  color: #fff;
  font-size: 29px;
  position: absolute;
  top: 30px;
  left: 0%;
}
#carousel_three_IMg > div > h4 {
  top: 75px;
  font-size: 20px;
}
#encouragement {
  width: 700px;
  height: 120px;
  position: absolute;
  top: 0;
  right: 0;
  top: 40%;
  left: 0;
  margin: auto;
  text-align: center;
  transform: scale(0.6);
}
#carousel_one {
  background-image: url("http://ppe.oss-cn-shenzhen.aliyuncs.com/palette/111454/1534851310156/thumb_Tue_Aug_21_2018.jpg") !important;
}
#carousel_one > ul {
  width: 500px;
  height: 500px;
}
#encouragement > h1,
#carousel_two_Text > h1,
#carousel_three_text > h1 {
  height: 60px;
  font-size: 36px;
  color: #fff;
}
#carousel_three_text > h1 {
  font-size: 70px;
  margin-bottom: 30px;
}
#carousel_one > ul > li:nth-of-type(1) {
  width: 1200px;
  height: 50px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  left: 150px;
  bottom: 506px;
}
#carousel_one > ul > li:nth-of-type(2) {
  width: 900px;
  height: 50px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  left: 290px;
  bottom: 300px;
}
#carousel_one > ul > li>img{
    opacity: 0.5;
}
#carousel_one > ul > li:nth-of-type(2)>img{
  width: 500px;
  height: 700px;
}
#carousel_one > ul > li:nth-of-type(2)>img:nth-of-type(2){
    width: 400px;
  height:550px;
}
#carousel_one > ul > li:nth-of-type(1)>img{

    width:200px;
  height: 300px;

}
#carousel_one > ul > li:nth-of-type(1)>img:nth-of-type(2){
   width: 300px;
  height: 420px;
}
#carousel_two {
  background-image: url("http://ppe.oss-cn-shenzhen.aliyuncs.com/collections/7/10/thumb.jpg") !important;
}
#carousel_three {
  background-image: url("http://ppe.oss-cn-shenzhen.aliyuncs.com/collections/73/3/thumb.jpg") !important;
}
#carousel_two_1 {
  width: 800px;
  height: 600px;
  transform: rotate(0deg);
  position: absolute;
  top: 10%;
  left: 20%;
}
.inRegardTo-text > h1 {
  height: 50px;
  margin-left: 40px;
  margin-bottom: 50px;
}
.inRegardTo-text > h1 > p {
  font-size: 16px;
}
.inRegardTo-text p {
  font-size: 18px;
  color: #969696;
}
.Zwjs {
  height: 133px;
  padding-left: 80px;
  margin-bottom: 30px;
}
.Zwjs > h3 {
  height: 30px;
}
.Zwjs > p {
  height: 90px;
  padding: 10px;
  box-sizing: border-box;
}
.Bksm {
  height: 50px;
  padding-left: 80px;
  padding-bottom: 116px;
}
.Bksm > h3,
.BkYl > h3 {
  height: 30px;
}
.Bksm > p {
  height: 10px;
  padding: 10px;
}
.BkYl {
  height: 100px;
  padding-left: 80px;
  padding-bottom: 20px;
}
.BkYl > p {
  padding: 10px;
}
.inRegardTo-text {
  width: 1000px;
  height: 500px;
  position: absolute;
  right: 100px;
  top: 125px;
  color: #fff;
}
.inRegardTo {
  width: 1100px;
  height: 100%;
  background: #000;
  position: absolute;
  right: 0px;
}
.swiper-pagination {
  width: 5px !important;
}
.swiper-pagination-bullet-active {
  opacity: 1;
  /* background: red; */
}
#scorll {
  /* background: red; */
}
#swiper_one {
  background-image: url("http://ppe.oss-cn-shenzhen.aliyuncs.com/collections/11/5/thumb.jpg") !important;
}
#swiper_three {
  background-image: url("http://ppe.oss-cn-shenzhen.aliyuncs.com/collections/100/5/thumb.jpg") !important;
  background-position: -600px 0px;
}
.swiper-slide {
  color: red !important;
}
</style>
