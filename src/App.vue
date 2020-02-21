<template>
  <div id="app">
    <navbar></navbar>
    <div class="container-fluid mt-2">
      <login></login>
      <register></register>
    </div>
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
  import Login from "./components/auth/Login";
  import Register from "./components/auth/Register";

  export default {
    components: {
      'navbar': Navbar,
      'login': Login,
      'register': Register,
    }
  }


</script>

<style>
</style>
