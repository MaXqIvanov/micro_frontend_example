<template>
  <HeaderComponents />
  <div class="main">
    <Sidebar />
    <div class="wrapper">
      <router-view />
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from 'vue';
import HeaderComponents from '@/components/HeaderComponents.vue'; // @ is an alias to /src
const Sidebar = defineAsyncComponent(() => import('app2/Sidebar'));

export default {
  components: {
    HeaderComponents,
    Sidebar,
  },
};
</script>
<style lang="scss">
.wrapper {
  padding: 10px;
  box-sizing: border-box;
}
.main {
  display: flex;
}
body {
  padding: 0;
  margin: 0;
}
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
