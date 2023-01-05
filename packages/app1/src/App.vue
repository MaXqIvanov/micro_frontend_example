<template>
  <HeaderComponents />
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponents from '@/components/HeaderComponents.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HeaderComponents,
  },
});
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
