<template>
  <h1> detail user</h1>
  <p>{{$route.params.userId}}</p>
</template>

<script>
export default {
    created(){
        console.log(this.$route.params.userId);
    }
}
</script>

<style>

</style>