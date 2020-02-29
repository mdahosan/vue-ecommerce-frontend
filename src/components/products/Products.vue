<template>
  <div>
    <div class="row">
      <my-product class="item"
                  v-for="product in products"
                  :product="product"
                  :key="product.id">
      </my-product>
    </div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class="[{disabled: !pagination.prev_page_url}]">
          <a class="page-link" href="#"
             @click="getProducts(pagination.prev_page_url)"
          >Previous</a>
        </li>
        <li class="page-item disabled">
          <a class="page-link" href="#">Page {{ pagination.current_page}} Of Page {{ pagination.last_page }}</a>
        </li>

        <li class="page-item" :class="[{disabled: !pagination.next_page_url}]">
          <a class="page-link" href="#"
             @click="getProducts(pagination.next_page_url)"
          >Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
    import Product from './Product.vue'
    import axios from '../../axios-auth'

    export default {
        data(){
            return {
                products: [],
                pagination : {},
                isAuth: true
            }
        },
        computed: {
            // authenticatedUser(){
            // }
        },
        components: {
            'my-product': Product
        },
        beforeMount(){
            this.getProducts()
        },
        methods: {
            getProducts(page_url){
                let vm = this;
                page_url = page_url || 'api/products'
                axios.get(page_url)
                    .then(response => {
                        let productsAll = response.data.products;
                        this.products = productsAll.data

                        let paginateArgs = {
                            current_page: productsAll.current_page,
                            last_page: productsAll.last_page,
                            next_page_url: productsAll.next_page_url,
                            prev_page_url: productsAll.prev_page_url,
                        }

                        vm.makePagination(paginateArgs, response.data.products.path)
                    }).catch(err => console.log(err))
            },
            makePagination(paginateArgs, links){
                console.log(paginateArgs)
                this.pagination =  paginateArgs;
            },
        }
    }
</script>
