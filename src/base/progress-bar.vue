<template>
  <div class="progress-bar" ref="progressBar" @click="progressClick">
    <div class="bar-inner" ref="inner">
      <div
        class="progress-btn"
        ref="btn"
        @touchstart.prevent="progressTouchStart"
        @touchmove.prevent="progressTouchMove"
        @touchend.prevent="progressTouchEnd"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    percent: {
      type: Number,
      default: 0
    }
  },
  watch: {
    percent(newPercent) {
      if (newPercent > 0 && !this.touch.initiated) {
        const barWidth = this.$refs.progressBar.getBoundingClientRect().width;
        const offsetWidth = newPercent * barWidth;
        this.$refs.inner.style.width = `${offsetWidth}px`;
      }
    }
  },
  created() {
    this.touch = {};
  },
  methods: {
    progressTouchStart(e) {
      this.touch.initiated = true; //开始拖拽的标志位
      this.touch.startX = e.touches[0].pageX; //记录起始x轴坐标
      this.touch.originInnerWidth = this.$refs.inner.getBoundingClientRect().width; //记录inner起始宽度
    },
    progressTouchMove(e) {
      if (!this.touch.initiated) {
        return;
      }
      this.newInnerWidth = Math.max(
        0,
        Math.min(
          this.touch.originInnerWidth + e.touches[0].pageX - this.touch.startX,
          this.$refs.progressBar.getBoundingClientRect().width
        )
      );
      this.$refs.inner.style.width = `${this.newInnerWidth}px`;
    },
    progressTouchEnd() {
      this.touch.initiated = false;
      const newInnerWidth = this.newInnerWidth || this.originInnerWidth;
      this._triggerPercent(newInnerWidth);
    },
    progressClick(e) {
      this.$refs.inner.style.width = `${e.offsetX}px`;
      const newWidth = Math.max(0, e.offsetX);
      this._triggerPercent(newWidth);
    },
    _triggerPercent(newWidth) {
      const newPercent = newWidth / this.$refs.progressBar.offsetWidth;
      this.$emit("processChange", newPercent);
    }
  }
}
</script>

<style scoped lang="scss">
.progress-bar {
  width: 64%;
  height: 16px;
  background-color: rgb(148, 138, 137);
  border-radius: 12px;
  .bar-inner {
    position: relative;
    width: 0;
    height: 100%;
    background-color: rgb(229, 229, 229);
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    .progress-btn {
      display: block;
      position: absolute;
      right: 0;
      border: 24px solid white;
      border-radius: 50%;
      top: 50%;
      transform: translate(50%, -50%);
    }
  }
}
</style>
