<template>
  <header>
    <h1><router-link :to="{ name: 'Home' }" class="yellow-strings">Aidan Zamboni: Ace Jabroni</router-link></h1>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
.yellow-strings {
  color: yellow;
}
</style>
