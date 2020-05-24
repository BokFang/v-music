<template>
  <div class="song-list" @click="selectSong(index, song)">
    <span class="num">{{ index + 1 }}</span>
    <main>
      <p class="song-name">{{ song }}</p>
      <p class="ablum-name">
        <span>{{ artist }}</span>
        <span> - {{ album }}</span>
      </p>
    </main>
    <div class="options">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-MVplay" />
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-more" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    song: {
      type: String
    },
    artist: {
      type: String
    },
    album: {
      type: String
    },
    index: {
      type: Number
    },
    showId: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    selectSong(index, song) {
      this.$emit("select", song, index);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/common/scss/variable.scss";
@import "@/common/scss/mixin.scss";

.song-list {
  font-size: $font-size-medium;
  margin-bottom: 48px;
  display: flex;
  color: #858585;
  justify-content: space-between;
  align-items: center;
  .num {
    width: 12%;
    text-align: center;
  }

  main {
    flex: 1;
    .song-name {
      font-size: $font-size-medium-m;
      color: $color-text;
      margin-bottom: 30px;
    }
  }

  .options {
    font-size: $font-size-large;
    width: 16%;
  }
}
</style>
