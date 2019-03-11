<template>
<div id="H_j">
  <div class="pages">
    <article class="post page">
      <h1 class="title">友情链接</h1>
      <div class="entry-content">
        <p>收藏一些好的技术大牛网址，和一些实用的网址和小伙伴们一起学习。</p>
        <p class="mBot">
          如果大家有好的网址可以一起分享,点击右边
          <em style="color:red">上传链接</em> &nbsp;即可
          <i class="iconfont icon-shou" style="color:red"></i>
        </p>
        <router-link class="href" to="/hrefs">上传链接</router-link>
        <hr>
        <p v-for="(item,index) in newHref" :key="index" class="pp">
          {{item.nameHref}}
          <a :href="item.nameHrefDz" target="_blank">{{item.nameHrefDz}}</a>
        </p>
      </div>
    </article>
  </div>

</div>
</template>
<script>
export default {
  data() {
    return {
      newHref: [],
      flags: true
    };
  },
  created() {
    if (this.$route.query.hrefFh) {
      this.flags = false;
    }
    var newDat = [];
    this.$http
      .get("https://wd3164396133mufdfp.wilddogio.com/href.json")
      .then(data => {
        return data.json();
      })
      .then(res => {
        for (var key in res) {
          res[key].id = key;
          newDat.push(res[key]);
        }
        this.newHref = newDat;
      });
  },
  methods: {
    delateHref: function(idx) {
      if (this.flags) {
        this.flags = false;
        this.$router.push({
          path: "/admin",
          query: { href: true }
        });
      } else {
        //删除
        this.$http
          .delete(
            "https://wd3164396133mufdfp.wilddogio.com/href/" + idx + ".json"
          )
          .then(response => {
            history.go(0);
          });
      }
    }
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
  text-decoration: none;
}
#H_j{
  width: 100%;
  margin-top: -600px;
  background-image:url("http://ppe.oss-cn-shenzhen.aliyuncs.com/collections/41/3/thumb.jpg");
  /* background-position:0px 400px; */
  background-repeat:no-repeat;
  background-size:cover;
  padding-top:300px;
  padding-bottom: 30px;
}
.pages {
  width: 70%;
  padding-top: 60px;
  padding-left: 100px;
  margin-top: 100px;
}
article {
  position: relative;
  padding: 30px 30px;
  word-wrap: break-word;
  background: rgba(255,2555, 2555, .9);
}
article h1.title {
  color: #333;
  font-size: 2em;
  font-weight: 300;
  line-height: 35px;
  margin-bottom: 25px;
}

.title {
  font-size: 22px !important;
}
article .entry-content {
  font-size: 16px;
  line-height: 1.8;
  word-wrap: break-word;
}
article .entry-content p,
article .entry-content pre {
  margin-top: 15px;
}

.pp a {
  display: inline-block;
  width: 700px;
  line-height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
}
.href {
  width: 200px;
  height: 50px;
  background: #0073d3;
  float: right;
  font-size: 20px;
  color: #fff;
  text-align: center;
  line-height: 50px;
  margin-top: -52px;
}
.href:hover{
  background: chocolate;
}
.pp {
  position: relative;
}
.pp span {
  position: absolute;
  top: 0;
  float: right;
  display: none;
  cursor: pointer;
  background: chocolate;
  border-radius: 5px;
  color: #fff;
  padding: 2px;
  font-size: 12px;
  width: 40px;
  text-align: center;
  box-sizing: border-box;
  right: 0px;
}
.mBot {
  margin-bottom: 10px;
}

.pp a:hover {
  text-decoration: underline;
}

.pp:hover span {
  display: block;
}
@media screen and (max-width:1200px) {
    .pages{
        width: 80% !important;
    }
}
@media screen and (max-width:1100px) {
    .pages{
        width: 92% !important;
    }
}
@media screen and (max-width:900px) {
    .pages{
        width: 92% !important;
    }
    .entry-content p:nth-of-type(1),
    .entry-content p:nth-of-type(2){
      display: none;
    }
}
@media screen and (max-width:850px) {
    .pages{
        margin-left: -40px !important;
    }

}
@media screen and (max-width:810px) {
    .pages{
        margin-left: -70px !important;
         width: 66% !important;
    }
}
@media screen and (max-width:780px) {
    .pp a{
        width: auto;
    }
     .pages{
       margin-left: 1px !important;
    width: 77% !important;
    }
    #H_j{
          margin-top: -586px !important;
    }
}
@media screen and (max-width:780px) {
    .href{
      float: none !important;
    }
}
@media screen and (max-width:555px) {
    .href{
      float: none !important;
    }
    .pages{
         margin-left: -28px !important;
        width: 80% !important;
    }
    .pp a{
          width: 78px !important;
    }
}
</style>
