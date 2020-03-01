<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">

        <router-link
          :to="'/'">
          <b-navbar-brand >E-Com</b-navbar-brand>
        </router-link>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item v-if="!auth">
                <router-link tag="button" class="btn btn-secondary btn-sm my-2 my-sm-0" :to="{ name: 'login'}" active-class="active">Login</router-link>
            </b-nav-item>

            <b-nav-item v-if="!auth">
              <router-link tag="button" class="btn btn-secondary btn-sm my-2 my-sm-0" :to="{ name: 'register'}" active-class="active">Register</router-link>
            </b-nav-item>

            <b-nav-item v-if="auth">
              <router-link tag="button" class="btn btn-secondary btn-sm my-2 my-sm-0" :to="{ name: 'home'}" active-class="active">Dashboard</router-link>
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

            <b-nav-item-dropdown right v-if="auth">
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>{{ user.name}}</em>
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
        computed: {
            auth(){
                return this.$store.getters.isAuthenticated
            },
            user () {
                return !this.$store.getters.user ? false : this.$store.getters.user;
            }
        },
        methods: {
            logout(){
                this.$store.dispatch('logout')
            }
        },
        created () {
            this.$store.dispatch('fetchUser')
        }
    }
</script>
