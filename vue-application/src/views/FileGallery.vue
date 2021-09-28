<template>
  <router-link :to="{ name: 'FolderGallery' }">Back to folder gallery</router-link>
  <h2>Files</h2>
  <SearchBar @updateSearch="updateSearch" />
  <!-- Display the files -->
  <ul>
    <li>
      <button @click="toggleFilePopup">Toggle image</button>
    </li>
  </ul>
  <div v-if="showFilePopup">
    <FilePopup @closeFile="toggleFilePopup">
      <img src="../assets/damon.gif" alt="Damon Gant" height="50" />
    </FilePopup>
  </div>
</template>

<script>
import FilePopup from "../components/FilePopup.vue"
import SearchBar from "../components/SearchBar.vue"

export default {
  name: "FileGallery",
  components: {
    FilePopup,
    SearchBar
  },
  data() {
    return {
      showFilePopup: false
    }
  },
  methods: {
    updateSearch(searchTerms) {
      console.log(searchTerms)
    },
    toggleFilePopup() {
      this.showFilePopup = !this.showFilePopup
    }
  }
}
</script>

<style scoped>
</style>
