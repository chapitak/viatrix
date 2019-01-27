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
        
          <v-layout justify-space-between>
            <span><b class="ma-12">{{ post.createdAt.substring(0,10) }}</b></span>    
            <v-flex>
            <span style="white-space: pre-line;">
              <!--{{ post.text }}-->
            </span>
            </v-flex>
            
          </v-layout>
        </v-timeline-item>

        </template>

        </v-timeline>
        <DiaryContent :props_post_id="this.selected_post_id"/>
    </v-container>
  </div>
</template>

<script>
import DiaryContent from './DiaryContent.vue'

  export default {
    name: 'Diary',
    components: {
      DiaryContent
  },
   data() {
        return {  
      posts: [],
      selected_post_id: ''
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
        
        //테스트
        this.selected_post_id = '5c4ab20c87a335331e24a81d'
        
        
        })
        .catch(e => {
        this.errors.push(e)
        })

      
    }
  }
</script>

<style>
.v-timeline--align-top .v-timeline-item__dot--small {
  top: 0px;
}
</style>