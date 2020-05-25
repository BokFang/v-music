<template>
  <transition name="slide-fade">
    <music-list :songs="songs" :avatarUrl="avatarUrl"></music-list>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
import { createSong } from "@/common/js/song";
import MusicList from "../music-list/MusicList";

const avatarLoadingUrl = require(`../../common/images/avatar-loading.jpg`);

export default {
  data() {
    return {
      songs: [],
      avatarUrl: avatarLoadingUrl
    };
  },
  components: {
    MusicList
  },
  methods: {
    getSingerDetail(id) {
      if (!id) {
        this.$router.push("/singer");
        return;
      }
      this.$http
        .get(`http://49.233.137.79:4000/artists?id=${id}`)
        .then(response => {
          this.songs.length = 0;
          this.avatarUrl = `${response.data.artist[0].picUrl}?param=300x300`;
          response.data.hotSongs.forEach(data => {
            this.songs.push(createSong(data));
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  computed: {
    ...mapGetters(["singer"])
  },
  watch: {
    // singer() {
    //   const id = this.$route.params.id;
    //   this.getSingerDetail(id);
    // }
  },
  created() {
    const id = this.$route.params.id;
    this.getSingerDetail(id);
  }
};
</script>

<style lang="scss" scoped></style>
