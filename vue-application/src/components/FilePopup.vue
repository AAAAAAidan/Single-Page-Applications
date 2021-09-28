<template>
  <div class="overlay" @click.self="closeFile">
    <div  class="pop-up">
      <slot>
        <img alt="Sorry, there's nothing here!" />
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilePopup",
  methods: {
    closeFile() {
      this.$emit("closeFile")
    }
  }
}
</script>

<style scoped>
.overlay {
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
}

.pop-up {
  top: calc(50% - 50px);
  left: calc(50% - 50px);
  position: fixed;
}
</style>
