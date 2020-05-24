<template>
  <div class="player" v-show="playList.length > 0" ref="player">
    <div class="normal-player" v-show="fullScreen">
      <div class="background">
        <img src alt />
      </div>
      <div class="top">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-back" />
        </svg>
        <h1 class="song-name"></h1>
        <h2 class="singer"></h2>
      </div>
      <main class="middle"></main>
      <div class="bottom"></div>
    </div>
    <div class="mini-player" v-show="!fullScreen"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["fullScreen", "playList"])
  }
};
</script>

<style scoped lang="scss">
@import "@/common/scss/variable.scss";
@import "@/common/scss/mixin.scss";

.player {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 200;
  background: #aaa;
}
</style>
