<template>
  <div id="app">
    <!-- <addBlog/> -->
    <!-- <showBlog/> -->

    <header-nav v-if="$route.path!=='/aboutMe'"></header-nav>

    <Sidebar v-if="$route.path!=='/add'&&$route.path!=='/'
    &&$route.path!=='/aboutMe'&&$route.path!=='/leave'&&$route.path!=='/hrefs'"></Sidebar>
           <!-- <keep-alive> -->
              <router-view ></router-view>
         <!-- </keep-alive> -->
     <Bottom  v-if="$route.path!=='/'&&$route.path!=='/aboutMe'"></Bottom>
  

  </div>
</template>

<script>
import addBlog from './components/addBlog'
import showBlog from './components/showBlog'
import headerNav from './components/header-nav'
import Sidebar from './components/sidebar'
import Bottom from './components/bottom'
export default {
  name: 'App',
    data(){
      return {
        isRouterAlive:true,
      }
    },
  components: {
    addBlog,
    showBlog,
    headerNav,
    Sidebar,
    Bottom
  }
}
</script>

<style>
#upload{
    width:100%;
    height: 100%;
    position: fixed;
    top:0;
    right:0;
    bottom:0;
    left:0;
    margin:auto;
    background: url(https://api.i-meto.com/bing?new&blur);
    background-image: url(https://api.i-meto.com/bing?new&blur);
    background-size: cover;
    z-index: 33;
}
  /* @import './style/common'; */
#app{
  /* background: #F2F6FC; */
}
html,body,#app{
  height: 100%;
  width:100%;
}
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
