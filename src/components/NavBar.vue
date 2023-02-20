<template>
    <!-- Component NavBar used as the Heading of our pages  -->
    <nav class="navbar navbar-dark bg-dark navbar-expand-sm">
        <div class="container">
            <RouterLink to="/" class="navbar-brand">
                <i class="fa fa-cloud-moon"></i> Administration of contacts
            </RouterLink>
        </div>
    </nav>
</template>

<!-- Funcionality of the page -->
<script>
  export default {
    name: "NavBar"
  }
</script>

<!-- style of this page -->
<style scoped>
</style>