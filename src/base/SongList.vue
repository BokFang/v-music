<template>
  <div class="song-list">
    <ul>
      <li v-for="(song, index) in songs" :key="index" class="song">
        <span></span>
        <main></main>
        <div class="options"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    songs: {
      type: Array
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/common/scss/variable.scss";
@import "@/common/scss/mixin.scss";
</style>
