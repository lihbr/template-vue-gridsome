<template>
  <Layout>
    <div class="error">
      <h1>{{ code }}</h1>
      <h2>{{ error.message }}</h2>
      <smart-link class="underline" href="/">
        Home page
      </smart-link>
    </div>
  </Layout>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => ({
        code: "404",
        message:
          "Oops! It appears that the page you're looking for does not exists!"
      })
    }
  },
  computed: {
    code: function() {
      return this.error.statusCode || this.error.code;
    }
  }
};
</script>

<style lang="sass" scoped></style>
