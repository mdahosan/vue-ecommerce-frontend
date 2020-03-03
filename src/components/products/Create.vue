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
                     v-model="product.name">
            </div>

            <div class="form-group">
              <label for="price">Price</label>
              <input type="number" name="price" class="form-control" id="price" placeholder="price"
                     v-model="product.price">
            </div>

            <div class="form-group">
              <label for="description">Description</label>
              <textarea class="form-control" id="description" placeholder="Description" v-model="product.description"></textarea>
            </div>

            <input type="submit" class="btn btn-primary float-right" value="Create">
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
                    name: '',
                    price: 0,
                    description: '',
                    image: ''
                }
            }
        },
        methods: {
            imageChanged(e){
                var fileReader = new FileReader();
                fileReader.readAsDataURL(e.target.files[0]);
                fileReader.onload = (e) => {
                    this.product.image = e.target.result
                }
            },
            onSubmit(evt) {
                evt.preventDefault();
                axios.post('api/products', this.product)
                    .then(response => {
                        console.log(response);
                        router.replace('/')
                        // this.$router.push('/feed')
                    })
            }
        }
    }
</script>
