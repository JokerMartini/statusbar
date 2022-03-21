<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />

    <q-btn label="Show Message" @click="doWork" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",

  setup() {
    const doWork = () => {
      window.messenger.doWork();
    };
    return {
      doWork,
    };
  },
});
</script>
