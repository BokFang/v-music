<template>
  <div class="music-list">
    <div class="header" :style="bgStyle" ref="bgImage">
      <div class="top">
        <svg class="icon back" aria-hidden="true" @click="back">
          <use xlink:href="#icon-back" />
        </svg>
        <svg class="icon share" aria-hidden="true">
          <use xlink:href="#icon-share" />
        </svg>
      </div>
    </div>
    <scroll
      :data="songs"
      class="wrapper"
      ref="list"
      :probe-type="3"
      :listen-scroll="true"
    >
      <div>
        <div class="playAll" @click="playAll">
          <svg class="icon play" aria-hidden="true">
            <use xlink:href="#icon-play" />
          </svg>
          <span>播放热门歌曲</span>
        </div>
        <song-list
          @select="selectSong"
          v-for="(song, index) in songs"
          :key="index"
          :song="song.name"
          :index="index"
          :artist="song.artist"
          :album="song.album"
        ></song-list>
        <loading v-show="!songs.length" class="loading"></loading>
      </div>
    </scroll>
  </div>
</template>

<script>
import SongList from "../../base/SongList";
import Scroll from "../../base/Scroll";
import { mapActions } from "vuex";
import Loading from "../../base/Loading";

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
    return {
      scrollY: 0
    };
  },
  components: {
    SongList,
    Scroll,
    Loading
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    selectSong(song, index) {
      this.selectPlay({
        list: this.songs,
        index
      });
    },
    playAll() {
      this.selectPlay({
        list: this.songs,
        index: 0
      });
    },
    ...mapActions(["selectPlay"])
  },
  watch: {},
  mounted() {
    this.$refs.list.$el.style.top = `${this.$refs.bgImage.clientHeight}px`;
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
@include loading;

.loading {
  margin-top: 20px;
  text-align: center;
  font-size: $font-size-large-x;
}
.music-list {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: $color-background-d;

  .wrapper {
    background: $color-background;
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    z-index: 30;
    overflow: hidden;
  }

  .bg-layer {
    background: $color-background;
    position: relative;
    height: 100%;
    will-change: transform;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    z-index: 20;
  }

  .header {
    width: 100%;
    padding: 70% 45px 0 45px;
    background-size: cover;
    font-size: $font-size-medium-x;
    box-sizing: border-box;
    z-index: 10;

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

  .playAll {
    font-size: 54px;
    padding: 60px 0 72px 40px;

    .play {
      padding-right: 20px;
    }
  }
}
</style>
