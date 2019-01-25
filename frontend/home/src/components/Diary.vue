<template>
  <div class="Diary"> 
    <v-container style="max-width: 800px;">
        <v-timeline dense clipped align-top>

        <template
           v-for="(post, index) in posts"
             >
        
        <v-timeline-item
          class="mb-3"
          color="grey"
          small
          style="min-width:200px"
        >
        <b>{{ post.createdAt.substring(0,10) }}</b>
        <br>
        <br>
          <v-layout justify-space-between>
            
            <v-flex>
            <span style="white-space: pre-line;">
              <!--{{ post.text }}-->
            </span>
            </v-flex>
            
          </v-layout>
        </v-timeline-item>

        </template>

        </v-timeline>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'Diary',
    data() {
        return {
      posts: []
      }
    },
    mounted() {
        this.$http.get(`http://54.180.32.24:1337/posts?_limit=10&Category=diary`, {
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

      
    }
  }
</script>