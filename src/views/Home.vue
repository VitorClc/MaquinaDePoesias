<template>
  <div class="home">
    <h1 class="title">Escolha uma poesia</h1>
    <IndexNavigation></IndexNavigation>
  </div>
</template>

<script>
import IndexNavigation from '../components/IndexNavigation.vue'

export default {
  name: 'home',
  components: {
    IndexNavigation
  }
}
</script>

<style scoped>
  .home{
    position: relative;
  }

  .title{
    float: none;
    position: absolute;
    margin-top: 50px;
    padding-top: 32px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
