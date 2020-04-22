<template>
  <header>
    <div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-option"></use>
      </svg>
    </div>
    <div class="title">
      <ul>
        <li><router-link tag="div" to="/recommand">推荐</router-link></li>
        <li><router-link tag="div" to="/singer">歌手</router-link></li>
      </ul>
    </div>
    <div class="search">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-search"></use>
      </svg>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "@/common/scss/variable.scss";
@import "@/common/scss/icon.scss";

header {
  font-size: $font-size-medium-x;
  font-weight: normal;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: $color-text-l;
  height: 10vh;
  .title {
    ul {
      display: flex;
      align-items: flex-end;
      li {
        margin-right: 56px;
        &:last-child {
          margin-right: 0;
        }
        div.router-link-active {
          transition: font-size 0.4s;
          font-size: $font-size-large;
          color: $color-text;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
