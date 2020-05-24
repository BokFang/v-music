<template>
  <div class="player" v-show="playList.length > 0" ref="player">
    <transition name="normal">
      <div class="normal-player" v-show="fullScreen">
        <div class="background">
          <img :src="`${currentSong.albumPic}?param=200x200`" alt />
        </div>
        <div class="background-layer"></div>
        <header class="header">
          <div class="back" @click="back">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-back" />
            </svg>
          </div>
          <div>
            <h1 class="song-name">{{ currentSong.name }}</h1>
            <h2 class="singer-name">{{ currentSong.artist }}</h2>
          </div>
        </header>
        <main class="main" v-show="currentShow === 'cd'">
          <div class="needle">
            <img src="../../common/images/needle.png" alt />
          </div>
          <div class="wrapper">
            <img :src="currentSong.albumPic" alt />
          </div>
        </main>
        <div class="control">
          <div class="time-bar"></div>
          <div class="button">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-cycle" />
            </svg>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-pre-song" />
            </svg>
            <svg class="icon play" aria-hidden="true">
              <use xlink:href="#icon-song-play" />
            </svg>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-next-song" />
            </svg>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-playlist" />
            </svg>
          </div>
        </div>
      </div>
    </transition>
    <div class="mini-player" v-show="!fullScreen">
      <div class="picture">
        <img :src="`${currentSong.albumPic}?param=200x200`" alt="image" />
      </div>
      <main class="main">
        <p class="singer-name">{{ currentSong.name }}</p>
        <p class="album">{{ currentSong.album }}</p>
      </main>
      <div class="control">
        <svg class="icon play" aria-hidden="true">
          <use xlink:href="#icon-play" />
        </svg>
        <svg class="icon playlist" aria-hidden="true">
          <use xlink:href="#icon-playlist-bottom" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "",
  data() {
    return {
      currentShow: "cd" //当前展示：cd/歌词
    };
  },
  computed: {
    ...mapGetters(["fullScreen", "playList", "currentSong", "singer"])
  },
  methods: {
    back() {
      this.setFullScreen(false);
    },
    ...mapMutations({ setFullScreen: "SET_FULL_SCREEN" })
  }
};
</script>

<style scoped lang="scss">
@import "@/common/scss/variable.scss";
@import "@/common/scss/mixin.scss";
@include fade;

.player {
  .normal-player {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 200;
    background: $color-background;
    .background {
      position: absolute;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: 0.5;
      img {
        width: 100%;
        height: 100%;
        filter: blur(70px);
      }
    }
    .background-layer {
      opacity: 0.4;
      filter: none;
      background: $color-theme-g;
      position: absolute;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
      z-index: 0;
    }
    .header {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 12vh;
      padding: 0 60px 0 60px;
      display: flex;
      align-items: center;
      font-size: $font-size-large;
      .back {
        width: 14%;
      }
      .song-name {
        font-weight: 400;
        color: #fff;
        font-size: 54px;
        padding-bottom: 40px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .singer-name {
        font-size: 48px;
        color: #c8c8c8;
        font-weight: normal;
      }
    }
    .main {
      .needle {
        position: absolute;
        top: 16vh;
        left: 0;
        width: 100%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        z-index: 1;
        img {
          height: 18vh;
          margin-left: 20%;
          transition: all 0.8s;
          transform-origin: 17.4% 12.1%;
        }
      }
      .wrapper {
        box-sizing: border-box;
        position: absolute;
        top: 30vh;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 50%;
        border: 15px solid rgb(230, 229, 230);
        img {
          height: 23vh;
          width: 23vh;
          border-radius: 50%;
          border: 5vh solid #212229;
        }
      }
    }
    .control {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 14vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .button {
        padding-bottom: 65px;
        font-size: $font-size-large-x;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
          padding-right: 10vw;
          &:last-child {
            padding-right: 0;
          }
        }
        .play {
          font-size: $font-size-large-xxl;
        }
      }
    }
  }
  .mini-player {
    font-size: $font-size-medium;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 180px;
    border: 2px solid $color-border-l;
    background-color: $color-background;
    z-index: 110;
    display: flex;
    align-items: center;
    padding: 14px;
    box-sizing: border-box;
    .picture {
      width: 14%;
      height: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 100%;
        border-radius: 50%;
      }
    }
    .main {
      width: 68%;
      height: 80%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .album {
        color: $color-text-l;
        font-size: $font-size-small-x;
      }
    }
    .control {
      width: 18%;
      height: 80%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      .play,
      .playlist {
        font-size: $font-size-large-xl;
      }
    }
  }
}
</style>
