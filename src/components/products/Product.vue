<template>
  <div  class="col-md-2 mb-2">
    <div class="card">
      <img class="card-img-top" :src="'http://laravel6.test/storage/products/' + product.image"/>
      <div class="card-body">
        <h5 class="card-title">{{ product.title}}</h5>
        <p class="card-text">{{ product.price}}</p>
      </div>
      <div class="card-footer">
        <router-link
          :to="'/products/' + product.id "
          class="btn btn-outline-success btn-sm"
        >Show</router-link>

        <router-link
          :to="{ name: 'products.edit', params: { product: product.id }}"
          class="btn btn-outline-warning btn-sm"
        >Edit</router-link>

        <button  class="btn btn-outline-warning btn-sm" @click="destroy( product.id)">Delete</button>

      </div>
    </div>
  </div>
</template>

<script>
    import axios from '../../axios-auth'
    import Router from "../../routes";

    export default {
        props: ['product'],
        methods: {
            show(){
                let page_url = `api/products/${this.product.id}`
                axios.get(page_url)
                    .then(response => {
                        console.log(response)
                    }).catch(err => console.log(err))
            },
            destroy(productId){
                axios.get('api/products/' + productId+'/delete')
                    .then(response => {
                       Router.replace('/');
                    }).catch(err => console.log(err))
            }
        }
    }
</script>

<style>

</style>
