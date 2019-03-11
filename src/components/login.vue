<template>
  <div class="loginNav">
    <div id="login">
      <h3>登陆</h3>
      <form action
      autocomplete="off"
      class="fromLogin fromLoginDl">
        <label for class="userName">用户名</label>
        <input type="text"
        name="chore"
        v-model="userName" @keyup.enter="submit()" placeholder="请输入用户名">
        <label for class="userPasswprd">密码</label>
        <input v-model="userPassword"
       name="chore"
        @keyup.enter="submit()" type="password">
        <p @click="disembark()">登陆</p>
        <div class="forget_the_password">
          <span class="FhDl">
            <router-link to="/register">注册</router-link>
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
      userPassword: "",
      userName: "",
      user: []
    };
  },
  store,
  methods: {
    disembark: function() {

      for (var key in this.user) {

        if (
          this.user[key].name == this.userName &&
          this.user[key].password == this.userPassword
        ) {
          if(this.$route.query.ss!=undefined){
               this.$store.commit('Reg',"id页登录成功");
              this.$router.push({
                name: "errorName",
                params: {
                  Errer: "用户登录成功",
                  id:this.$route.query.ss
                }
              });
          }else{
              this.$store.commit('Reg',"登录成功");
              this.$router.push({
                name: "errorName",
                params: {
                  Errer: "用户登录成功"
                }
              });
          }

          this.$store.commit("Admin", true);
          this.$store.commit("onUserName", this.userName);
          return false;
        }
        else if(this.user[key].name != this.userName &&
          this.user[key].password != this.userPassword){
          this.$store.commit('Reg',"登录");
          this.$router.push({
            name: "errorName",
            params: {
              Errer: "登陆用户信息错误，请重写登陆"
            }
          });
        }
      }
    },
    submit: function() {
      this.disembark();
    }
  },
  created() {
    // this.userName="";
    // this.userPassword="";
    // this.commits();
    this.$http
      .get("https://wd3164396133mufdfp.wilddogio.com/account.json")
      .then(res => {
        return res.json();
      })
      .then(data => {
        for (var key in data) {
          this.user.push(data[key]);
        }
      });
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
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
#login {
  width: 400px;
  height: 355px;
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
.userName:after,
.userPasswprd:after {
  content: "*";
  color: #ed1c24;
}
.fromLogin > input {
  font-size: 15px;
  padding-left: 5px;
  width: 100%;
  height: 35px;
  border: 1px solid #ccc;
  margin-bottom: 25px;
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
  font-size: 14px;
  cursor: pointer;
}
#login span:hover,
#login a:hover {
  color: #78bfff;
}
.FhDl a {
  color: #999;
  height: 40px;
  font-size: 15px;
  margin: -2px auto;
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
