<template>
  <v-app id="app">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      app
    >
      <v-list dense>
        <div class="text-xs-center">
        </div>
        <v-list-tile @click="move('/')">
          <v-list-tile-action>
            <v-icon>account_circle</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>About</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="move('/blog')">
          <v-list-tile-action>
            <v-icon>library_books</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Blog</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="move('/DBBlog')">
          <v-list-tile-action>
            <v-icon>library_books</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Blog(DB)</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      color="midnightblue"
      light
      fixed
      app
      clipped-left
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
          <v-toolbar-items>
              <v-btn large flat @click="move('/')">jeongkyo.kim</v-btn>
          </v-toolbar-items>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="!profile.username" small flat @click="move('/SignIn')" target="_blank">Sign In</v-btn>
      <span v-else @click="logout()">{{profile.username}}</span>
      <!--
      <v-flex v-else xs12 sm4>
          <v-overflow-btn
            
            :items="dropdown_user"
            v-bind:label="this.user.username"
            segmented
            target="#dropdown-example"
          ></v-overflow-btn>
       </v-flex>
      -->
    </v-toolbar>

      <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    

    <v-footer light class="black--text" app>
      <span> </span>
      <v-spacer></v-spacer>
      <span>&copy;2018 </span>
    </v-footer>
  </v-app>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
  name: 'app',
  
  data: () => ({
    drawer: null,
    drawerRight: false,
    right: false,
    left: false,
    dropdown_user: [
        { text: 'Sign Out', callback: () => 
        //localStorage.accessToken = null 
        this.$router.push('/') 
        }
      ],
  }),
  methods: {
    move: function(target) {
      this.$router.push(target)
    },
    logout() {
      this.$store.dispatch("AUTH_LOGOUT")
      .then(() => {
        this.$router.push('/')
      })
    }
  },
  props: {
    source: String
  },
  computed: mapState({profile: state => state.profile}),
  mounted() {
   /* if(localStorage.accessToken != null)
      {
        this.$http.get(`http://54.180.32.24:1337/users/me`)
        .then(response => {
          // JSON responses are automatically parsed.
        this.$store.state.user = response.data
        
        
        //localStorage.id = this.$store.state.user._id
        })
        .catch(error => {
           
          console.log('An error occurred:', error);
          //this.$router.push('/SignIn') 
        })  
      }
    else {
      
      //localStorage.id = null
      this.$store.state.user = null
    }*/
  }
}
</script>


<style>



</style>