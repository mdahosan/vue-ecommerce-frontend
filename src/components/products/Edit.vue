<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-body">
          <form @submit="onSubmit">
            <div class="form-group">
              <label for="image">Image</label>
              <input type="file" id="image" class="form-control"
                     @change="imageChanged">
            </div>

            <div class="form-group">
              <label for="name">Name</label>
              <input name="name" type="text" id="name" class="form-control"
                     v-model="product.title">
            </div>

            <div class="form-group">
              <label for="price">Price</label>
              <input type="number" name="price" class="form-control" id="price" placeholder="price"
                     v-model="product.unit_price">
            </div>

            <div class="form-group">
              <label for="description">Description</label>
              <textarea class="form-control" id="description" placeholder="Description" v-model="product.description"></textarea>
            </div>

            <input type="submit" class="btn btn-primary float-right" value="Update">
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

    import axios from '../../axios-auth'
    import router from '../../routes';

    export default {
        data(){
            return {
                product: {
                    title: '',
                    unit_price: 0,
                    description: '',
                    image: ''
                }
            }
        },
        created(){
            this.getProduct()
        },
        methods: {
            imageChanged(e){
                var fileReader = new FileReader();
                fileReader.readAsDataURL(e.target.files[0]);
                fileReader.onload = (e) => {
                    this.product.image = e.target.result
                }
            },
            getProduct(){
                axios.get('api/products/' + this.$route.params.product)
                    .then(response => {
                        this.product.title = response.data.title;
                        this.product.description = response.data.description;
                        this.product.unit_price = response.data.unit_price;
                    }).catch(err => console.log(err))
            },
            onSubmit(evt) {
                evt.preventDefault();
                axios.post('api/products/' + this.$route.params.product+'/edit', this.product)
                    .then(response => {
                        console.log(response);
                        router.replace('/')
                    })
            }
        }
    }
</script>
