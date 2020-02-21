<template>
  <div id="app">
    <navbar></navbar>
  </div>
</template>

<script>
// export default {
//   name: 'app',
//   data () {
//     return {
//       msg: 'Welcome to Your Vue.js App'
//     }
//   }
// }

  import Navbar from "./components/Navbar";

  export default {
    components: {
      'navbar': Navbar
    }
  }


</script>

<style>
</style>
