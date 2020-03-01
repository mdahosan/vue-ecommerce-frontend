<template>
  <div id="app">
    <navbar></navbar>
    <div class="container-fluid mt-2">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
    import Navbar from "./components/Navbar";
    // import Home from "./components/Home"

    export default {
        components: {
            'navbar': Navbar,
        },
        created() {
            this.$store.dispatch('tryAutoLogin')
        }
    }

</script>

<style>
</style>
