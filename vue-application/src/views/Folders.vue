<template>
  <router-link :to="{ name: 'Home' }">Back to home page</router-link>
  <h2>Folders</h2>
  <SearchBar @updateSearch="updateSearch" />
  <!-- Display the folders -->
  <ul v-if="folders">
    <li v-for="folder in selectedFolders" :key="folder.id">
      <router-link :to="{ name: 'Folder', params: { id: folder.id } }">{{ folder.name }}</router-link>
    </li>
  </ul>
  <p v-else>Loading folders...</p>
</template>

<script>
import SearchBar from "../components/SearchBar.vue"

export default {
  name: "Folders",
  components: {
    SearchBar
  },
  data() {
    return {
      folders: null,
      selectedFolders: null
    }
  },
  methods: {
    updateSearch(searchTerms) {
      this.selectedFolders = this.folders.filter((folder) => folder.name.toLowerCase().includes(searchTerms.toLowerCase()))
    }
  },
  mounted() {
    // Ideally, this would contain an API fetch
    // But for now, we'll set the folders manually
    this.folders = [
      { id: 0, name: "Ace Attorney", files: ["damon.gif", "notguilty.jpg", "apolloobjection.wav"] },
      { id: 1, name: "The Silver Case", files: ["spinninginachair.mp4", "glgiscoming.jpg", "glgishere.jpg", "ohthatsphoenixwright.jpg"] },
      { id: 2, name: "Gallant Geese", files: ["goose1.jpg", "goose2.jpg", "goose3.jpg"] },
      { id: 3, name: "My Favorites", files: ["damon.gif", "spinninginachair.mp4", "goose2.jpg"] }
    ]
    this.selectedFolders = this.folders
  }
}
</script>

<style scoped>
</style>
