<template lang='pug'>
div.load-wrap(v-show="show")
  .loading
    .ring-2
      .ball-holder
        .ball
</template>

<script>

export default {
  name: 'loading',
  props:{show:{type:Boolean,default:true}},
  data(){
    return {
    }
  },
  mounted(){
  },
  methods:{
  }
}
</script>

<style lang="scss">
@keyframes loadingE {
  0 {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.load-wrap {
  /*float: left;*/
  /*width: 100px;*/
  /*height: 100px;*/
  /*margin: 0 10px 10px 0;*/
  /*padding: 20px 20px 20px;*/
  /*border-radius: 5px;*/
  text-align: center;
  /*background-color: #d8d8d8;*/
  .ring-2 {
    position: relative;
    width: 45px;
    height: 45px;
    margin: 0 auto;
    border: 4px solid #4b9cdb;
    border-radius: 100%;
  }
.ball-holder {
  position: absolute;
  width: 12px;
  height: 45px;
  left: 17px;
  top: 0px;
}
.ball {
  position: absolute;
  top: -11px;
  left: 0;
  width: 16px;
  height: 16px;
  border-radius: 100%;
  background: #4282b3;
}
.ball-holder {
  animation: loadingE 1.3s linear infinite;
}
}
</style>
