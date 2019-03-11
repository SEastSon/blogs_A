<template>
  <div class="admin">
    <div id="login">
      <h3>管理员</h3>
      <form action class="fromLogin fromLoginDl">
        <label for class="userName">管理员账号</label>
        <input type="text" placeholder="管理员用户名" v-model="userName">
        <label for class="userPasswprd">管理员密码</label>
        <input type="password" 
          placeholder="管理员密码"
        v-model="password">
        <p @click="confirmPassword">确认登陆</p>
        <div class="forget_the_password">
          <span class="FhDl">
            <a to @click="phrase()">取消登陆</a>
          </span>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "admin",
  data() {
    return {
      userName: "",
      password: "",
      dataUSer: {}
    };
  },
  methods: {
    phrase: function() {
      this.$router.go(-1);
    },
    confirmPassword: function() {
      if (
        this.userName == this.dataUSer.name &&
        this.password == this.dataUSer.password
      ) {
        this.$router.push({
          path: "/add"
        });
      } else {
        this.$store.commit("Reg","发表为空");
        this.$router.push({
          name: "errorName",
          params: {
            Errer: "用户信息错误,请重新输入"
          }
        });
      }
    }
  },
  created() {
    this.$http
      .get("https://wd3164396133mufdfp.wilddogio.com/admin.json")
      .then(res => {
        this.dataUSer = res.data.userName;
      });
  }
};
</script>
<style scoped>
.admin {
  position: fixed;
  top: 0px;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background: url(https://api.i-meto.com/bing?new&blur);
  background-image: url(https://api.i-meto.com/bing?new&blur);
  background-size: cover;
  z-index: 3;
}
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
