<template>
  <div>
    Welcome To Homepage
  </div>
</template>

<script>
    export default {
        computed: {
            email () {
                return !this.$store.getters.user ? false : this.$store.getters.user.email
            }
        }
    }
</script>
