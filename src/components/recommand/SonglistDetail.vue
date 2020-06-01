<template>
  <div>
    <music-list :songs="songs" :avatarUrl="avatarUrl"></music-list>
  </div>
</template>

<script>
import musicList from "../music-list/MusicList";
import { mapGetters } from "vuex";
import { createSong } from "@/common/js/song";
const avatarLoadingUrl = require(`../../common/images/avatar-loading.jpg`);

export default {
  name: "SonglistDetial",
  data() {
    return {
      avatarUrl: avatarLoadingUrl,
      songs: [],
      InvalidSongs: [] // api 返回的是无效的歌曲信息，必须通过这些信息请求具体的歌曲
    };
  },
  components: {
    musicList
  },
  computed: {
    ...mapGetters(["setSonglistDetail"])
  },
  created() {
    this.getSonglistDetail(this.$route.params.id);
  },
  methods: {
    getSonglistDetail(id) {
      this.$http
        .get(`http://49.233.137.79:4000/playlist/detail?id=${id}`)
        .then(response => {
          this.avatarUrl = response.data.playlist.coverImgUrl;
          this.InvalidSongs = response.data.playlist.tracks;
          this.InvalidSongs.splice(0, 30).map(data => {
            this.songs.push(createSong(data));
          });
        });
    }
  }
};
</script>

<style scoped lang="scss"></style>
