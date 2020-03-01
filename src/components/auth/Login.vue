<template>
  <div>
    <b-row>
      <b-col></b-col>
      <b-col sm="12" md="4">
        <b-card class="mt-3" header="Login">
          <b-card-text>
            <b-form @submit="onSubmit" @reset="onReset">
              <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="email"
                description="We'll never share your email with anyone else."
              >
                <b-form-input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="Enter email"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="password"
                label="Password:"
                label-for="password"
              >
                <b-form-input
                  id="password"
                  v-model="form.password"
                  type="password"
                  required
                ></b-form-input>
              </b-form-group>

              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
          </b-card-text>
        </b-card>
      </b-col>
      <b-col></b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault();
          let data = {
              client_id : 4,
              client_secret : 'kaj9ef9hnTUZVm98R8hUrXVHkq96EmiHJOTkk05j',
              grant_type : 'password',
              username : this.form.email,
              password : this.form.password,
          };
          this.$store.dispatch('login', data);
      },
      onReset(evt) {
        evt.preventDefault();
        // Reset our form values
        this.form.email = '';
        this.form.password = '';
      }
    }
  }
</script>
