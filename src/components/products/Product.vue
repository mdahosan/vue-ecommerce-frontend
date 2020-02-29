<template>
  <div  class="col-md-2 mb-2">
    <div class="card">
      <img class="card-img-top" :src="'http://laravel6.test/storage/products/' + product.image"/>
      <div class="card-body">
        <h5 class="card-title">{{ product.title}}</h5>
        <p class="card-text">{{ product.price}}</p>
      </div>
<!--      <div class="card-footer">-->
<!--        <a href="#" class="btn btn-success">Buy</a>-->
<!--      </div>-->
      <div class="card-footer">

      </div>
    </div>
  </div>
</template>

<script>
    export default {
        props: ['product']
    }
</script>

<style>

</style>
