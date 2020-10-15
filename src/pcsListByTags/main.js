import Vue from 'vue'
import pcsListByTags from './pcsListByTags.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(pcsListByTags,{
    props :{
      base:"http://localhost:4046/",
      tags:["uva","字符串"],
      prefix:"练习",
      newTab:true
    }
  }),
}).$mount('#app')
