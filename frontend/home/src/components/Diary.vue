<template>
  <div class="Diary" style="width:100%"> 
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
            <v-layout justify-space-between>
              
              <v-flex>
                <span v-if = "post.id == selected_id">
                  <DiaryContent :props_post_id="selected_id"/>
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
import DiaryContent from './DiaryContent.vue'


  export default {
    name: 'Diary',
    components: {
    DiaryContent
  },
    data() {
        return {
      posts: [],
      selected_id: ''
      
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

        this.selected_id = '5c447095c9f28b6c0e17828f'
        
        
        })
        .catch(e => {
        this.errors.push(e)
        })

      
    }
  }
</script>

<style >
.v-timeline--align-top .v-timeline-item__dot--small{
  top: 0;
}

</style>