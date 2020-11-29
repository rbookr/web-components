import Vue from 'vue'
import pcsListByTags from './components/pcsListByTags.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(pcsListByTags,{
    props :{
      base:"http://localhost:4046/",
      tags:"roj-1000",
      match:"ids",
      prefix:"练习",
      newTab:'true'
    }
  }),
}).$mount('#app')
