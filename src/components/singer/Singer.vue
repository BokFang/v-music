<template>
  <div class="singer">
    <header>
      <div class="top">
        <p>全部歌手</p>
      </div>
      <div class="bottom">
        <p>热门歌手</p>
      </div>
    </header>
    <div class="singer-list">
      <scroll class="wrapper" :data="singerList">
        <ul>
          <li
            v-for="(item, index) in singerList"
            :key="index"
            @click="toSingerDetail(item)"
          >
            <div class="singer-information">
              <img v-lazy="item.img1v1Url" alt="image" />
              <span class="list-name">{{ item.name }}</span>
            </div>
            <span class="follow">+ 关注</span>
          </li>
        </ul>
      </scroll>
    </div>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Scroll from "../../base/Scroll";

export default {
  data() {
    return {
      singerList: []
    };
  },
  components: {
    Scroll
  },
  methods: {
    getSingerList() {
      this.$http
        .get("http://49.233.137.79:4000/top/artists")
        .then(response => {
          this.singerList = response.data.artists;
        })
        .catch(error => {
          console.log(error);
        });
    },
    toSingerDetail(singer) {
      this.$router.push({
        path: `/singer/${singer.id}`
      });
      this.setSinger(singer);
    },
    ...mapMutations({
      setSinger: "SET_SINGER"
    })
  },
  beforeMount() {
    this.getSingerList();
  }
};
</script>

<style lang="scss" scoped>
@import "@/common/scss/variable.scss";
@import "@/common/scss/mixin.scss";

@include slide;

header {
  height: 10vh;
  margin-bottom: 28px;
  .top {
    font-size: 54px;
    margin: 20px 0;
  }
  .bottom {
    font-size: 42px;
    background-color: #f3f3f3;
    color: #858585;
    margin: 0 -45px;
    padding: 28px 45px;
  }
}
.singer-list {
  display: flex;
  justify-content: center;
  .wrapper {
    position: fixed;
    top: 20vh;
    bottom: 0;
    box-sizing: border-box;
    overflow: hidden;
    width: 100%;
    padding: 0 45px;
  }
  li {
    display: flex;
    justify-content: space-between;
    padding: 30px 0;
    align-items: center;
    .singer-information {
      display: inline-flex;
      align-items: center;
      img {
        width: 122px;
        height: 122px;
        border-radius: 50%;
        margin-right: 38px;
      }
    }
    .list-name {
      font-size: 54px;
      color: #434343;
    }
    .follow {
      font-size: 42px;
      border: 3px solid #bd5257;
      border-radius: 40px;
      padding: 12px 20px;
      color: #fb4446;
    }
  }
}
</style>
