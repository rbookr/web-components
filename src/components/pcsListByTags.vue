<template lang='pug'>
div.pcsListByTags
  loading(v-bind:show="loading")
  button(v-on:click="get_list" v-show="refresh")
    | 刷新
  table
    thead
      tr
        th(style="width:18px;") #
        th 地址
        th 题目
        th 标签
    tbody
      tr(v-for="item,idx in list")
        td {{idx+1}}
        td
          a(v-bind:href="`${base}article/${item._id}`" v-bind:target="newTab=='true' ? '_blank' :'_self' ") 
            | {{item.title}}
        td
          a(v-for="source in item.head.source" v-bind:href="source.url" target='_blank')
            | {{ source.oj}}
        td 
            span(v-for="tag in item.head.tags || []" v-bind:style="{background:strToRGB(tag)}")
                | {{tag}}
</template>

<script>
import loading from "./loading.vue"
export default {
  name: 'pcsListByTags', components:{loading},
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
    },
    strToRGB(i){
        function hashCode(str) { // java String#hashCode
            var hash = 0;
            for (var i = 0; i < str.length; i++) {
                hash = str.charCodeAt(i) + ((hash << 5) - hash);
            }
            return hash;
        }
        i = hashCode(i);
        var c = (i & 0x00FFFFFF)
            .toString(16)
            .toUpperCase();

        return '#'+"00000".substring(0, 6 - c.length) + c;
    }
  }
}
</script>

<style lang="scss">
.pcsListByTags {
    table {
        border-collapse: collapse;
        border-spacing: 0;
        empty-cells: show;
        border: 1px solid #cbcbcb;
        thead {
            background-color: #e0e0e0;
            color: #000;
            text-align: left;
            vertical-align: bottom;
        }
        td,th {
            border: 1px solid #cbcbcb;
            border-width: 0 0 1px 1px;
            margin: 0;
            overflow: visible;
            padding: .4em 1em;
        }
    }
    span {
        display:inline-block;
        background:gray;
        padding: 2px 3px;
        margin:0 3px;
        border-radius:3px;
        height:20px;
        line-height:20px;
        font-size:16px;
        color:#fff;
        font-weight:800;
    }
}
</style>
