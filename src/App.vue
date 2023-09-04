<template>
   <the-header></the-header>
   <main>
    <router-view></router-view>
   </main>
</template>


<script>
import TheHeader from './components/TheHeader.vue';
export default {
  name: 'App',
  components: {
    TheHeader,
  }
}
</script>

<style>

</style>
