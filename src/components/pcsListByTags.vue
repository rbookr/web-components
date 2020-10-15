<template lang='pug'>
div.pcsListByTags
  loading(v-bind:show="loading")
  button(v-on:click="get_list" v-show="refresh")
    | 刷新
  ul
    li(v-for="item in list")
      | {{prefix}}
      a(v-bind:href="`${base}article/${item._id}`" v-bind:target="newTab=='true' ? '_blank' :'_self' ") 
        | {{item.title}}
</template>

<script>
import loading from "./loading.vue"
export default {
  name: 'pcsListByTags',
  components:{loading},
  props:{
    "base":{type:String},
    "tags":{type:String},
    "prefix":{type:String},
    "newTab":{type:String,default:'true'}
  },
  data(){
    return {
      list:[],
      loading:true,
      refresh:false
    }
  },
  mounted(){
    this.get_list()
  },
  methods:{
    get_list(){
      this.loading=true
      let queryUrl = `${this.base}utils/list_match_by_tags?tags=${this.tags}`
      return fetch(queryUrl)
        .then(res=>res.json())
        .then(data=>{
            this.list = data.articles
            this.loading=false
            this.refresh=false
            })
      .catch( e =>{
        this.refresh=true
      })
    }
  }
}
</script>

<style lang="scss">
</style>
