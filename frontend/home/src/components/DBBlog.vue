<template>
  <div class="dbblog">
    <h1 class="text-md-center">This is a DBBlog page</h1>

  

  <!--여기부터 카드 테스트 -->
   <v-flex xs12>
        
  
        
          <v-container
            fluid
            grid-list-md
          >
            <v-layout row wrap>
              <v-flex xs12 
                pb-5
                v-for="post in posts"
                :key="post.title"
              >
                <v-card 
                 >
                  <!--<v-img
                    :src="card.src"
                    height="200px"
                  >-->
                    <v-container
                    
                      fill-height
                      fluid
                      pa-4
                    >
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline black--text" v-text="post.title"></span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  
  
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <p class="pr-1" >{{post.createdAt.substring(0,10)}}</p>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        
      </v-flex>

</div>
</template>



<script>


export default {
  name: 'DBBlog',
  data() {
    return {
      posts: [],
      errors: []
    }
      
  },

  // Fetches posts when the component is created.
  created() {
    this.$http.get(`http://54.180.32.24:1337/posts`, {
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