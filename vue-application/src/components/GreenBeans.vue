<template>
  <header class="hello">
    <img alt="Damon Gant" src="../assets/damon.gif">
    <h1>I only eat <span class="green-strings">{{ food }}</span> for breakfast!</h1>
  </header>
</template>

<script>
export default {
  name: "green beans",
  props: {
    food: String
  }
}
</script>

<style scoped>
.green-strings {
  color: green;
}
</style>
