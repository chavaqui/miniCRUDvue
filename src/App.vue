<template>
  <!-- The main Component that calls small components to render the main page -->
  <NavBar/>
  <RouterView></RouterView>
</template>

<!-- Funcionality of this page -->
<script>
import NavBar from './components/NavBar.vue';

export default {
    name: "App",
    components: { NavBar }
}
</script>

<!-- style of this page -->
<style>
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');
  body{
    font-family: 'Ubuntu', sans-serif;
  }
</style>
