<template>
  <form>
    <input type="text" placeholder="Enter search terms" v-model="searchTerms" />
  </form>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      searchTerms: ""
    }
  },
  watch: {
    searchTerms: function(newValue, oldValue) {
      this.$emit("updateSearch", newValue)
    }
  }
}
</script>

<style scoped>
</style>
