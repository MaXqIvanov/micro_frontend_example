<template>
  <div class="home">
    <HeaderComponent />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
const HeaderComponent = defineAsyncComponent(() => import('host/HeaderComponent'));

export default {
  components: {
    HeaderComponent,
  },
};
</script>
<style scoped>
.home {
  height: 200px;
  widows: 100%;
  background: yellow;
}
</style>
