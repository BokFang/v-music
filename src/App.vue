<template>
  <div id="app">
    <Header></Header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from "./components/Header"

  export default{
    components:{
        Header
    }
  }
</script>

<style lang="scss">
@import "@/common/scss/mixin.scss";

@include fade;
</style>
