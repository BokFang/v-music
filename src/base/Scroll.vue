<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";

export default {
  name: "NScroll",
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      required: true,
      default: null
    },
    bounce: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.initScroll();
    }, 60);
  },
  methods: {
    initScroll() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        scrollY: true,
        click: true,
        probeType: this.probeType,
        bounce: this.bounce
      });
      this.emitScrollEvent();
    },
    emitScrollEvent() {
      let scrollHandler = e => {
        this.$emit("scroll", e, {
          maxScrollY: this.scroll.maxScrollY,
          maxScrollX: this.scroll.maxScrollX
        });
      };
      this.scroll.on("scroll", scrollHandler);
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    }
  },
  watch: {
    data() {
      setTimeout(() => {
        this.refresh();
      }, 60);
    }
  }
};
</script>

<style scoped lang="scss"></style>
