<template>
  <div>
    <img alt="Vue logo" src="./assets/ibuki_logo.svg" width='200'/>
    <YasuriSample />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import YasuriSample from "./components/YasuriSample.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    YasuriSample
  },
});
</script>
