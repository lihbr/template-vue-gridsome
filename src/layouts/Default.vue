<template>
  <div class="defaultLayout">
    <main class="main">
      <slot />
    </main>
  </div>
</template>

<script>
import objectFitImages from "object-fit-images";

export default {
  metaInfo() {
    return {
      htmlAttrs: {
        class: this.getHtmlClass().join(" ")
      }
    };
  },
  computed: {
    detect() {
      return this.$store.state.detect;
    }
  },
  mounted() {
    /**
     * Default operations
     */
    this.$store.dispatch("detect/detect");
    // Object fit polyfill
    objectFitImages();
    // Force add classes once
    document.documentElement.classList.add(...this.getHtmlClass());
    /**
     * End of default operations
     */
  },
  methods: {
    getHtmlClass() {
      const htmlClass = [];

      this.detect.browser && htmlClass.push(this.detect.browser);
      this.detect.isMobile && htmlClass.push("isMobile");
      this.detect.isTouch && htmlClass.push("isTouch");

      return htmlClass;
    }
  }
};
</script>

<style lang="sass">
html
  @apply font-main text-black bg-white
  font-size: 16px // don't change this!
  word-spacing: 1px
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased
  box-sizing: border-box
</style>
