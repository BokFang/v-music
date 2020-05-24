<template>
  <div id="app">
    <Header></Header>
    <transition name="fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <player></player>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from "./components/header/Header";
import Player from "./components/player/Player";

export default {
  components: {
    Header,
    Player
  }
};
</script>

<style lang="scss">
@import "@/common/scss/mixin.scss";

@include fade;
</style>
