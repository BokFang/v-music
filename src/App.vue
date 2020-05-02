<template>
  <div id="app">
    <Header></Header>
    <transition name="fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from "./components/header/Header";

export default {
  components: {
    Header
  }
};
</script>

<style lang="scss">
@import "@/common/scss/mixin.scss";

@include fade;
</style>
