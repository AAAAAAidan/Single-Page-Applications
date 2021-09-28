<template>
  <router-link :to="{ name: 'Home' }">Back to home page</router-link>
  <h2>Folders</h2>
  <SearchBar @updateSearch="updateSearch" />
  <!-- Display the folders -->
  <ul>
    <li>
      <router-link :to="{ name: 'FileGallery', params: { id: 'id' } }">View the file gallery</router-link>
    </li>
  </ul>
</template>

<script>
import SearchBar from "../components/SearchBar.vue"

export default {
  name: "FolderGallery",
  components: {
    SearchBar
  },
  methods: {
    updateSearch(searchTerms) {
      console.log(searchTerms)
    }
  }
}
</script>

<style scoped>
</style>
