<template>
  <GreenBeans food="green beans"/>
</template>

<script>
import GreenBeans from "./components/GreenBeans.vue"

export default {
  name: "App",
  components: {
    GreenBeans
  }
}
</script>

<style>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
