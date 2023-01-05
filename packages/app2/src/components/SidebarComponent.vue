<template>
  <div class="sidebar"></div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.sidebar {
  width: 20vw;
  height: 100%;
  min-height: calc(100vh - 60px);
  border-right: 2px solid rgb(38, 38, 38);
  box-sizing: border-box;
  @media (max-width: 1000px) {
    width: 25vw;
  }
}
</style>
