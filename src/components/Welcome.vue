<template>
  <div>
    <my-products></my-products>
  </div>
</template>

<script>

    import Products from './products/Products'

    export default {
        computed: {
            auth(){
                return this.$store.getters.isAuthenticated
            },
        },
        components: {
            'my-products': Products
        }
    }
</script>
