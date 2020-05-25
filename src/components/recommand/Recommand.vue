<template>
  <div id="recommand" class="recommand">
    <scroll class="wrapper" :data="disList" :probe-type="3">
      <div class="content" ref="content">
        <div class="swiper">
          <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="(item, index) in banners" :key="index">
              <img :src="item.imageUrl" alt="image" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <h3>推荐歌单</h3>
        <ul class="playlist">
          <li v-for="(item, index) in disList" :key="index">
            <img v-lazy="item.coverImgUrl" alt="image" />
            <p>{{ item.name }}</p>
          </li>
        </ul>
      </div>
    </scroll>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import Scroll from "../../base/Scroll";

export default {
  name: "Recommand",
  data() {
    return {
      banners: [],
      disList: [],
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
    SwiperSlide,
    Scroll
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
    },
    getPlaylistsData() {
      this.$http
        .get("http://49.233.137.79:4000/top/playlist")
        .then(response => {
          this.disList = response.data.playlists;
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
  created() {
    this.getPlaylistData();
    this.getPlaylistsData();
  }
};
</script>

<style lang="scss" scoped>
@import "@/common/scss/variable.scss";
@import "@/common/scss/mixin.scss";

html {
  touch-action: none;
}
.recommand {
  display: flex;
  justify-content: center;
}
.wrapper {
  position: fixed;
  top: 10vh;
  bottom: 0;
  width: 100%;
  padding: 0 45px;
  box-sizing: border-box;
  overflow: hidden;
}
.swiper {
  img {
    width: 100%;
    border-radius: 16px;
  }
  padding-bottom: 76px;
}
.playlist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 60px;
  li {
    display: inline-block;
    padding-top: 60px;
    padding-bottom: 10px;
    height: 418px;
    width: 312px;
    img {
      width: 312px;
      height: 312px;
    }
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box; //作为弹性伸缩盒子模型显示。
      -webkit-box-orient: vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
      -webkit-line-clamp: 2; //显示的行
      padding-top: 22px;
      font-size: 42px;
      color: #434343;
      letter-spacing: 0.02em;
    }
  }
}
</style>
