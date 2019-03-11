<template>
  <div class="H_J">
    <div class="hrefSc-nav" v-cloak>
      <div class="hrefSc">
        <form action>
          <div class="divs">
            <label for>链接名字:</label>
            <input type="text"
            placeholder="请输入链接名字"
            v-model="href.nameHref">
          </div>
          <div class="divs">
            <label for>链接地址:</label>
            <input type="text"
              placeholder="请输入链接地址"
            v-model="href.nameHrefDz">
          </div>
          <div class="hrefCon">
            <p class="confirm" @click="QdHref">确定上传</p>
            <p class="confirm" @click="QxHref">取消上传</p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      href: {
        nameHref: "",
        nameHrefDz: ""
      },
      flag: true
    };
  },
  methods: {
    QxHref: function() {
      this.$router.push({
        path: "/pigeonhole"
      });
    },
    QdHref: function() {
      var newDat = [];
      if (this.href.nameHref != "" && this.href.nameHrefDz != "") {
        this.$http
          .get("https://wd3164396133mufdfp.wilddogio.com/href.json")
          .then(data => {
            return data.json();
          })
          .then(res => {
            for (var key in res) {
              newDat.push(res[key]);
            }
            for (var i = 0; i < newDat.length; i++) {
              if (
                newDat[i].nameHref == this.href.nameHref &&
                newDat[i].nameHrefDz == this.href.nameHrefDz
              ) {
                alert("数据重复请重新上传");
                return false;
              }
            }
            this.$http
              .post(
                "https://wd3164396133mufdfp.wilddogio.com/href.json",
                this.href
              )
              .then(res => {
                this.$router.push({
                  path: "/pigeonhole"
                });
              });
          });
      } else {
        alert("内容不可为空");
      }
    }
  }
};
</script>
<style scoped="data-v-21e5b78">
[v-cloak] {
  display: none;
}
*{
  box-sizing: border-box;
}
.hrefSc-nav {
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
.hrefSc {
  width: 500px;
  height: 200px;
  background: #fff;
  border-radius: 15px;
  margin: auto;
  padding: 30px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  box-sizing: border-box;
}
.divs input {
  width: 70%;
  height: 35px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding-left: 10px;
  outline: none;
  color: #666;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
}
.hrefSc label {
  display: block;
  text-align: center;
  margin-top: 20px;
  line-height: 0px;
}
.hrefSc label > input {
  width: 300px;
  height: 30px;
  padding-left: 10px;
}
.hrefCon {
  width: 300px;
  height: 30px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
}
.confirm {
  width: 90px;
  height: 30px;
  line-height: 30px;
  border-radius: 5px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  background: #78bfff;;
}

.divs {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
@media screen and (max-width:550px) {
  .hrefSc{
    width: 374px !important;
  }
}
@media screen and (max-width:400px) {
  .hrefSc{
    width: 304px !important;
        height: 260px !important;
  }
  .hrefCon{
    display: block !important;
  }
  .confirm{
        width: 80% !important;
            margin-bottom: 20px !important;
  }
}
</style>
