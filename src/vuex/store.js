import Vue from 'vue'
import Vuex from 'vuex'
import createPersiste from 'vue-savedata'
Vue.use(Vuex);
Vue.use(createPersiste);
const state={
  count:1,
  userName:"",
  option:"",
  admin:false,
  login:false,
  Fan_hui:false,
  reg:false
}
const mutations={
    add(state,n,com){
      if(n=="bb"){
        state.count=2;
      }
    },
    onUserName(state,user){
      state.userName=user;
    },
    web(state,web_s){
      state.option=web_s
      localStorage.setItem('option',web_s);
    },
    Admin(state,admins){
      state.admin=admins;
      localStorage.setItem('admin',admins);
    },
    Login(state,log){
      state.login=log;
      localStorage.setItem('login',log);
    },
    fan_hui(state,fh){
      state.Fan_hui=fh;
      localStorage.setItem('Fan_hui',fh);
    },
    Reg(state,REG){
        state.reg=REG;
        localStorage.setItem('reg',REG);
      }
}
const moduleA={
    state,mutations
}

const persiste = createPersiste({
    LS: {
        module: moduleA,
        storePath: 'module100'
    }
})

export default new Vuex.Store({
  modules:{
    module100:moduleA
  },
  plugins:[persiste]
})
