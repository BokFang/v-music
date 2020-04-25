<template>
  <div id="recommand">
    <div class="content">
      <div class="swiper">
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="(item, index) in banners" :key="index"
            ><img :src="item.imageUrl" alt="image" />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="playlist"></div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "Recommand",
  data() {
    return {
      banners: [],
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: true,
        loop: true
      }
    };
  },
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
    getPlaylistData() {
      this.$http
        .get("http://localhost:3000/banner")
        .then(response => {
          this.banners = response.data.banners;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted() {
    this.swiper.slideTo(3, 1000, false);
  },
  beforeMount() {
    this.getPlaylistData();
  }
};
</script>

<style lang="scss" scoped>
@import "@/common/scss/variable.scss";
@import "@/common/scss/mixin.scss";

html {
  touch-action: none;
}
</style>
