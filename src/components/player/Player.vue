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
          <div class="detail">
            <h1 class="song-name">{{ currentSong.name }}</h1>
            <h2 class="singer-name">{{ currentSong.artist }}</h2>
          </div>
        </header>
        <main class="main" v-show="currentShow === 'cd'">
          <div class="needle">
            <img src="../../common/images/needle.png" alt="image" :class="needlePlayClass" />
          </div>
          <div class="wrapper">
            <img :src="currentSong.albumPic" :class="rotateClass" class="rotate" alt />
          </div>
        </main>
        <div class="control">
          <div class="time-bar"></div>
          <div class="button">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-cycle" />
            </svg>
            <svg class="icon" aria-hidden="true" @click="preSong">
              <use xlink:href="#icon-pre-song" />
            </svg>
            <svg class="icon play" aria-hidden="true" @click="togglePlaying">
              <use :xlink:href="playIcon" />
            </svg>
            <svg class="icon" aria-hidden="true" @click="nextSong">
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
      <div class="picture" @click="setFullScreen">
        <img
          :src="`${currentSong.albumPic}?param=200x200`"
          alt="image"
          :class="rotateClass"
          class="rotate"
        />
      </div>
      <main class="main" @click="setFullScreen">
        <p class="singer-name">{{ currentSong.name }}</p>
        <p class="album">{{ currentSong.album }}</p>
      </main>
      <div class="control">
        <svg class="icon play" aria-hidden="true" @click="togglePlaying">
          <use :xlink:href="miniPlayIcon" />
        </svg>
        <svg class="icon playlist" aria-hidden="true">
          <use xlink:href="#icon-playlist-bottom" />
        </svg>
      </div>
    </div>
    <audio
      ref="audio"
      :src="
        `https://music.163.com/song/media/outer/url?id=${currentSong.id}.mp3`
      "
      @canplay="ready"
      @error="error"
    ></audio>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "",
  data() {
    return {
      currentShow: "cd", //当前展示：cd/歌词
      songReady: "false" //歌曲是否准备好
    };
  },
  computed: {
    playIcon() {
      return this.playing ? "#icon-pause" : "#icon-song-play";
    },
    needlePlayClass() {
      return this.playing ? "play" : "play pause";
    },
    miniPlayIcon() {
      return this.playing ? "#icon-mini-pause" : "#icon-play";
    },
    rotateClass() {
      return this.playing ? "play" : "play pause";
    },
    ...mapGetters([
      "fullScreen",
      "playList",
      "currentSong",
      "singer",
      "playing",
      "currentIndex"
    ])
  },
  watch: {
    currentSong() {
      this.$nextTick(() => {
        this.$refs.audio.play();
      });
    },
    playing(newPlaying) {
      const audio = this.$refs.audio;
      this.$nextTick(() => {
        newPlaying ? audio.play() : audio.pause();
      });
    }
  },
  methods: {
    ...mapMutations({
      _setFullScreen: "SET_FULL_SCREEN",
      _setPlayingState: "SET_PLAYING_STATE",
      _setCurrentIndex: "SET_CURRENT_INDEX"
    }),
    back() {
      this._setFullScreen(false);
    },
    setFullScreen() {
      this._setFullScreen(true);
    },
    togglePlaying() {
      this._setPlayingState(!this.playing);
    },
    preSong() {
      if (!this.songReady) {
        return;
      }
      let index = this.currentIndex - 1;
      if (index === -1) {
        index = this.playList.length - 1;
      }
      this._setCurrentIndex(index);
      if (!this.playing) {
        this.togglePlaying();
      }
      this.songReady = false;
    },
    nextSong() {
      if (!this.songReady) {
        return;
      }
      let index = this.currentIndex + 1;
      if (index === this.playList.length) {
        index = 0;
      }
      this._setCurrentIndex(index);
      if (!this.playing) {
        this.togglePlaying();
      }
      this.songReady = false;
    },
    ready() {
      this.songReady = true;
    },
    error() {
      if (!this.playing) {
        return;
      }
      this.songReady = true;
      alert("该歌曲暂时无法播放！");
      this.nextSong();
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/common/scss/variable.scss";
@import "@/common/scss/mixin.scss";
@include fade;
//进入播放页面效果
.normal-enter-active,
.normal-leave-active {
  transition: all 0.4s;
  header,
  footer {
    transition: all 0.3s ease-out;
  }
}
.normal-enter,
.normal-leave-to {
  opacity: 0;
  header {
    transform: translate3d(0, -100px, 0);
  }
  footer {
    transform: translate3d(0, 100px, 0);
  }
}
//播放时的旋转效果
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.rotate {
  &.play {
    animation: rotate linear 26s infinite;
  }
  &.pause {
    animation-play-state: paused;
  }
}

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
      .detail {
        box-sizing: border-box;
        width: 80%;
        padding-right: 60px;
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
          &.play {
            transform: none;
          }
          &.pause {
            transform: rotate(-30deg);
          }
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
