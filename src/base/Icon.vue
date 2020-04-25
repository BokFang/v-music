<template>
  <div>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="`#icon-${href}`"></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: "NIcon",
  props: {
    href: {
      type: String,
      required: true
    }
  },
  methods: {
    emitClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>
