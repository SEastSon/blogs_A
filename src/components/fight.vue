<template>
<div class="D_s">
  <div class="fight">
    <h1>打赏博主</h1>
    <p>我们一起来让这个世界有趣一点，听说打赏我的人最后都找到了真爱。听说打赏我的人，都进了福</p>
    <p>布斯排行榜，打赏的都是天使，打赏了的人都会变美~</p>
    <div class="fight_style">
      <h3>打赏方式</h3>
    </div>
    <p class="style_one">方式一</p>
    <div class="Alipay">
      <img src="../assets/zhifubao.jpg" alt>
    </div>
    <p class="Alipay_text">通过支付宝手机客户端扫描上面的二维码进行赞助</p>
    <p class="style_one style_two">方式二</p>
    <div class="Alipay">
      <img src="../assets/weixin.png" alt>
    </div>
    <p class="Alipay_text">通过微信手机客户端扫描上面的二维码进行赞助</p>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}
.D_s{
  width: 100%;
  margin-top: -600px;
  background-image:url("http://ppe.oss-cn-shenzhen.aliyuncs.com/collections/43/6/thumb.jpg");
  background-repeat:no-repeat;
  background-size:cover;
  padding-top:300px;
  padding-bottom: 30px;
}
.fight {
  width: 800px;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 0;
  margin-top: 50px;
  padding: 40px 40px;
  position: relative;
  height: 1230px;
  margin: 150px auto;
  margin-bottom: 10px !important;
}
.fight > h1 {
  text-align: center;
  margin-bottom: 20px;
}
.fight > p {
  color: #444;
}
.fight_style {
  position: absolute;
  right: 0px;
  top: 170px;
  width: 100%;
  height: 40px;
  background-color: #f7f7f7;
  padding: 0 25px;
  border-left: 5px solid #00a2ff;
}
@media screen and (max-width:835px) {
    .fight{
      width: 600px !important;
    }
}
@media screen and (max-width:700px) {
    .fight_style,
    .fight > p{
      display: none !important;
    }
     .fight{
      width: 430px !important;
      height: 1000px !important;
    }
    .Alipay{
      margin: 50px auto !important;
    }
}
@media screen and (max-width:470px) {
   .fight{
      transform: scale(.6) !important;
          margin: -30px auto !important;
          margin-left: -13px !important;
    }

}
.fight_style > h3 {
  line-height: 40px;
}
.style_one {
  margin-top: 80px;
  font-size: 20px;
  color: #444;
}
.Alipay {
  width: 320px;
  height: 395px;
  margin: 0 auto;
}
.Alipay > img {
  width: 100%;
  height: 100%;
}
.Alipay_text {
  text-align: center;
  margin-top: 10px;
}
.style_two {
  margin-top: 40px;
}
</style>
