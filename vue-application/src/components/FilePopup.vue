<template>
  <div class="overlay" @click.self="closeFile">
    <div class="pop-up" @click.self="closeFile">
      <img v-if="getFileType() == 'img'" :src="require('../assets/' + filename)" :alt="filename" />
      <video controls v-else-if="getFileType() == 'video'">
        <source :src="require('../assets/' + filename)" type="video/mp4" />
        Your browser does not support the video element.
      </video>
      <audio controls v-else-if="getFileType() == 'audio'">
        <source :src="require('../assets/' + filename)" type="audio/wav">
        Your browser does not support the audio element.
      </audio>
      <p v-else>Unsupported file type</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilePopup",
  props: ["filename"],
  methods: {
    getFileType() {
      if (this.filename.match(/.(png|jpg|jpeg|gif)$/)) {
        return "img";
      }
      else if (this.filename.match(".(mp3|flac|wav)$")) {
        return "audio";
      }
      else if (this.filename.match(".(mp4|mkv)$")) {
        return "video";
      }
      else {
        return null;
      }
    },
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
  height: 80%;
  width: 80%;
  top: 10%;
  left: 10%;
  position: fixed;
}
</style>
