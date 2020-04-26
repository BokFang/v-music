<template>
  <div class="wrapper">
    <header>
      <div class="top">
        <p>全部歌手</p>
      </div>
      <div class="bottom">
        <p>热门歌手</p>
      </div>
    </header>
    <div class="singer-list">
      <ul>
        <li v-for="(item, index) in singerList" :key="index">
          <div class="singer">
            <img v-lazy="item.img1v1Url" alt="image" />
            <span class="list-name">{{ item.name }}</span>
          </div>
          <span class="follow">+ 关注</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      singerList: []
    };
  },
  methods: {
    getSingerList() {
      this.$http
        .get("http://localhost:3000/top/artists")
        .then(response => {
          this.singerList = response.data.artists;
          console.log(this.singerList);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  beforeMount() {
    this.getSingerList();
  }
};
</script>

<style lang="scss" scoped>
header {
  .top {
    font-size: 54px;
    margin: 16px 0;
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
  li {
    display: flex;
    justify-content: space-between;
    padding: 30px 0;
    align-items: center;
    .singer {
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
