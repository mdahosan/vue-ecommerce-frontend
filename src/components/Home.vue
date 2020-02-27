<template>
  <div>
    Welcome To Homepage {{ email }}
  </div>
</template>

<script>
    export default {
        computed: {
            email () {
                return !this.$store.getters.user ? false : this.$store.getters.user.email
            }
        },
        created () {
            this.$store.dispatch('fetchUser')
        }
    }
</script>
