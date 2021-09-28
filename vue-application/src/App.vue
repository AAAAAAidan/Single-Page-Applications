<template>
  <Header />
  <main>
    <router-view/>
  </main>
  <Footer />
</template>

<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
}
</script>

<style>
html {
  height: 100%;
  background-color: #222222;
  color: yellow;
}

body {
  margin: 0;
  height: 100%;
}

#app {
  min-height: 100%;
  display: flex;
  flex-flow: column;
}

main {
  flex-grow: 1;
  padding: 3.9px 39px;
}

header,
footer {
  text-align: center;
  background-image: url("./assets/damon.gif");
  background-size: contain;
  background-repeat: repeat;
}

a {
  color: lightblue;
}

img {
  max-height: 100%;
  max-width: 100%;
}
</style>
