<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item>
<!--              <b-button size="sm" class="my-2 my-sm-0" type="submit">-->
                <router-link tag="button" class="btn btn-secondary btn-sm my-2 my-sm-0" :to="{ name: 'login'}" active-class="active">Login</router-link>
<!--              </b-button>-->
            </b-nav-item>


            <b-nav-item>
              <!--              <b-button size="sm" class="my-2 my-sm-0" type="submit">-->
              <router-link tag="button" class="btn btn-secondary btn-sm my-2 my-sm-0" :to="{ name: 'register'}" active-class="active">Register</router-link>
              <!--              </b-button>-->
            </b-nav-item>


            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>{{ userName}}</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#" @click="logout">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
    export default {
        data(){
            return {
                isAuth: null,
                userName: null
            }
        },
        created(){
            this.isAuth = this.$auth.isAuthenticated()
            this.setAuthenticatedUser()
        },
        methods: {
            setAuthenticatedUser(){
                this.$http.get('api/user')
                    .then(response => {
                        this.$auth.setAuthenticatedUser(response.data);
                        this.userName = response.data.name;
                        // console.log(this.$auth.getAuthenticatedUser());
                    })
            },
            logout() {
                this.$auth.destroyToken()
                this.isAuth = this.$auth.isAuthenticated()
                this.$router.push('/login')
            }
        }
    }
</script>


