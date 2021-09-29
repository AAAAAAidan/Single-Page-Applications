<template>
  <router-link :to="{ name: 'Folders' }">Back to folders</router-link>
  <h2>Files</h2>
  <SearchBar @updateSearch="updateSearch" />
  <!-- Display the files -->
  <ul v-if="files">
    <li v-for="file in selectedFiles" :key="file">
      <button @click="togglePopup(file)" class="link-style-button">{{ file }}</button>
    </li>
  </ul>
  <p v-else>Loading files...</p>
  <div v-if="showPopup">
    <FilePopup :filename="filename" @closeFile="togglePopup" />
  </div>
</template>

<script>
import FilePopup from "../components/FilePopup.vue"
import SearchBar from "../components/SearchBar.vue"

export default {
  name: "Folder",
  components: {
    FilePopup,
    SearchBar
  },
  data() {
    return {
      files: null,
      selectedFiles: null,
      filename: null,
      showPopup: false
    }
  },
  methods: {
    updateSearch(searchTerms) {
      this.selectedFiles = this.files.filter((file) => file.toLowerCase().includes(searchTerms.toLowerCase()))
    },
    togglePopup(file) {
      this.filename = file
      this.showPopup = !this.showPopup
    }
  },
  mounted() {
    // Ideally, this would contain an API fetch
    // But for now, we'll set the folders manually
    const folders = [
      { id: 0, name: "Ace Attorney", files: ["damon.gif", "notguilty.jpg", "apolloobjection.wav"] },
      { id: 1, name: "The Silver Case", files: ["spinninginachair.mp4", "glgiscoming.jpg", "glgishere.jpg", "ohthatsphoenixwright.jpg"] },
      { id: 2, name: "Gallant Geese", files: ["goose1.jpg", "goose2.jpg", "goose3.jpg"] },
      { id: 3, name: "My Favorites", files: ["damon.gif", "spinninginachair.mp4", "goose2.jpg"] }
    ]
    this.files = folders[this.$route.params.id].files
    this.selectedFiles = this.files
  }
}
</script>

<style scoped>
.link-style-button {
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  color: lightblue;
  text-decoration: underline;
  font-family: inherit;
  font-size: inherit;
}
</style>
