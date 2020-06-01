<template>
  <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-loading" />
  </svg>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
@import "@/common/scss/variable.scss";
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.icon {
  animation: rotate 0.5s linear infinite;
}
</style>
