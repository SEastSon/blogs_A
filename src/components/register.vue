<template>
  <div class="loginNav">
    <div id="login">
      <h3>注册</h3>
      <form action
       autocomplete="off"
      class="fromLogin fromLoginDl">
        <label for class="userName">
          用户名
          <i v-if="one">格式不正确!!!</i>
        </label>
        <input type="text"
        name="chore"
        @change="ipt" v-model="fromLogin.name" placeholder="只含有汉字 字母 位置不限">

        <label for class="userPasswprd">
          密码
          <i v-if="two">格式不正确!!!</i>
        </label>
        <input
          type="password"
          @change="ipt"
          name="chore"
          v-model="fromLogin.password"
          placeholder="必须由6-16个英文字母和数字的字符串组成"
        >
        <label for class="userPasswprd">
          手机号
          <i v-if="three">格式不正确!!!</i>
        </label>
        <input type="text"
         @change="ipt" v-model="fromLogin.phone" placeholder="国内手机格式">
        <label for class="userPasswprd">
          Email
          <i v-if="four">格式不正确!!!</i>
        </label>
        <input type="text"
        @change="ipt" v-model="fromLogin.email" placeholder="QQ邮箱格式">
        <label for class="userPasswprd">
          QQ号
          <i v-if="five">格式不正确!!!</i>
        </label>
        <input type="text"
        @change="ipt" v-model="fromLogin.QQphone" placeholder="5-11位的QQ号">
        <p @click="register()">注册</p>
        <div
          class="forget_the_password"
          v-if="$store.state.module100.userName==''&&!$store.state.module100.admin"
        >
          <span class="FhDl">
            <router-link to="/login" @click.native="$store.commit('Login',true)">登陆</router-link>
          </span>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import store from "../vuex/store";
export default {
  data() {
    return {
      fromLogin: {
        name: "",
        email: "",
        QQphone: "",
        phone: "",
        password: "",
        pinglun: [
          {
            conent: "",
            expressions: ""
          }
        ],
        time: [],
        img: ""
      },
      one: false,
      two: false,
      three: false,
      four: false,
      five: false
    };
  },
  store,
  created() {},
  methods: {
    ipt: function() {
      //用户名正则，只含有汉字 字母 位置不限
      var uPattern = /^[A-Za-z\u4e00-\u9fa5]+$/;

      //Email正则
      var ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      //手机号正则
      var mPattern = /^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/;

      //QQ号正则，5至11位
      var qqPattern = /^[1-9][0-9]{4,10}$/;


      //"密码必须由6-16个英文字母和数字的字符串组成
      var reg = /^[A-Za-z]+[0-9]+[A-Za-z0-9]*|[0-9]+[A-Za-z]+[A-Za-z0-9]*$/g;
      this.one = !uPattern.test(this.fromLogin.name)&&this.fromLogin.name!=""? true : false;
      this.two = !reg.test(this.fromLogin.password)&&this.fromLogin.password!=""? true : false;
      this.three = !mPattern.test(this.fromLogin.phone)&&this.fromLogin.phone!=""? true : false;
      this.four = !ePattern.test(this.fromLogin.email)&&this.fromLogin.email!=""? true : false;
      this.five = !qqPattern.test(this.fromLogin.QQphone)&&this.fromLogin.QQphone!=""? true : false;
    },
    register: function() {
      if (
        this.fromLogin.name == "" ||
        this.fromLogin.email == "" ||
        this.fromLogin.QQphone == "" ||
        this.fromLogin.phone == "" ||
        this.fromLogin.password == ""
      ) {
        this.$store.commit('Reg',"注册");
        this.$router.push({
          name: "errorName",
          params: {
            Errer: "用户信息错误"
          }
        });
        return false;
      }
      if (!this.one && !this.two && !this.three && !this.four && !this.five) {
        this.$http
          .post(
            "https://wd3164396133mufdfp.wilddogio.com/account.json",
            this.fromLogin
          )
          .then(res => {
            this.$router.push({
              path: "/login"
            });
          });
      } else {

      }
    }
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}
.loginNav {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  background: url(https://api.i-meto.com/bing?new&blur);
  background-image: url(https://api.i-meto.com/bing?new&blur);
  background-size: cover;
  z-index: 33;
}
#login > a {
  position: absolute;
  top: 5px;
  right: 20px;
  cursor: pointer;
  font-size: 25px;
  color: #999;
}
#login > a:hover {
  color: #78bfff;
}
#login {
  width: 400px;
  height: 555px;
  background: #fff;
  position: absolute;
  border-radius: 5px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  padding: 20px;
  padding-top: 10px;
}
#login h3 {
  text-align: center;
  color: #666;
  font-size: 20px;
  font-weight: normal;
  margin-bottom: 25px;
}
.fromLogin > label,
.fromLogin > input {
  display: block;
}
.fromLogin > label {
  text-align: left;
  margin-bottom: 4px;
  color: #444;
  font-weight: bold;
  font-size: 14px;
}
.userName:before,
.userPasswprd:before {
  content: "*";
  color: #ed1c24;
}
.fromLogin i {
  margin-left: 200px;
  color: red;
}
.fromLogin > input {
  font-size: 15px;
  padding-left: 5px;
  width: 100%;
  height: 35px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  outline: none;
  border-radius: 3px;
  color: #666;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
}
#login p {
  text-align: center;
  width: 300px;
  margin: 10px auto;
  cursor: pointer;
  color: #fff;
  font-size: 17px;
  line-height: 40px;
  margin-top: 39px;
  height: 45px;
  border-radius: 5px;
  background: #78bfff;
  line-height: 45px !important;
}
.fromLogin span {
  width: 30px;
  height: 30px;
  background: #0085ba;
  border-color: #0073aa #006799 #006799;
  box-shadow: 0 1px 0 #006799;
  text-shadow: 0 -1px 1px #006799, 1px 0 1px #006799, 0 1px 1px #006799,
    -1px 0 1px #006799;
  font-size: 14px;
  cursor: pointer;
  margin-left: 250px;
  padding: 3px 15px;
  border-radius: 5px;
}
.FhDl a {
  color: #999;
  height: 40px;
  color: #fff;
  font-size: 13px;
}
.fromLogin span:hover {
  background: #008ec2;
  border-color: #006799;
}
.forget_the_password {
  text-align: center;
  margin-top: 25px;
  color: #999;
}
@media screen and (max-width:470px) {
  #login{
      transform: scale(.8) !important;
  }
}
</style>
