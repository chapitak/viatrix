<template>
  <div class="blog">
    <h1 class="text-xs-center">Blog</h1>

  


      <!-- 카드 디자인-->
      <v-container>
       <v-layout row>
        <v-flex xs12 >
        <v-card>
          <v-list two-line>
          <template
           v-for="(post, index) in posts"
             >
                   <v-list-tile
              :key="post.index"
              avatar
              ripple
              @click="move(post.id)"
            >
              <v-list-tile-content>
                <v-list-tile-title pa2>{{ post.title }}</v-list-tile-title>
              <!--  <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>-->
                <v-list-tile-sub-title class="text-xs-right">{{ post.createdAt.substring(0,10) }}</v-list-tile-sub-title>
              </v-list-tile-content>

            </v-list-tile>
            <v-divider
              v-if="index + 1 < posts.length"
            ></v-divider>
          </template>
        </v-list>
        </v-card>
        </v-flex>
    </v-layout>
</v-container>


</div>
</template>



<script>


export default {
  name: 'Blog',
  data() {
    return {
      posts: [],
      errors: []
    }
      
  },
  methods: {
    move: function(target) {
      this.$router.push({name: 'Blogpost', params:{postid:target}})
    }
  },

  // Fetches posts when the component is created.
  created() {
    this.$http.get(`http://54.180.32.24:1337/posts?Category=blog`, {
    params: {
      _sort: 'createdAt:desc' // Generates http://localhost:1337/posts?_sort=createdAt:desc
    }
  })
    .then(response => {
      // JSON responses are automatically parsed.
      
      this.posts = response.data
      
      
    })
    .catch(e => {
      this.errors.push(e)
    })

    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
  }
  
}



</script>
<style scoped>
</style>