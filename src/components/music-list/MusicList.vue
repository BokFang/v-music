<template>
  <div class="music-list">
    <div class="header" :style="bgStyle">
      <div class="top">
        <svg class="icon back" aria-hidden="true" @click="back">
          <use xlink:href="#icon-back" />
        </svg>
        <svg class="icon share" aria-hidden="true">
          <use xlink:href="#icon-share" />
        </svg>
      </div>
    </div>
    <song-list :songs="songs"></song-list>
  </div>
</template>

<script>
import SongList from "../../base/SongList";

export default {
  props: {
    songs: {
      type: Array
    },
    avatarUrl: {
      type: String
    }
  },
  data() {
    return {};
  },
  components: { SongList },
  methods: {
    back() {
      this.$router.go(-1);
    }
  },
  computed: {
    bgStyle() {
      return `background-image:url(${this.avatarUrl})`;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/common/scss/variable.scss";
@import "@/common/scss/mixin.scss";

.music-list {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $color-background-d;

  .header {
    width: 100%;
    padding: 70% 45px 0 45px;
    background-size: cover;
    font-size: $font-size-medium-x;
    box-sizing: border-box;

    .top {
      width: 100%;
      position: absolute;
      top: 80px;
      left: 0;
      box-sizing: border-box;

      .back {
        position: absolute;
        top: 0;
        left: 54px;
      }
      .share {
        position: absolute;
        top: 0;
        right: 54px;
      }
    }
  }
}
</style>
