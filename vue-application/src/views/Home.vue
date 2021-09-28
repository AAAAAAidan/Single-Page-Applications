<template>
  <router-link :to="{ name: 'FolderGallery' }"><img alt="Damon Gant" src="../assets/damon.gif"></router-link>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
