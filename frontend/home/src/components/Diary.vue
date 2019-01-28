<template>
  <div class="Diary" style="width:100%"> 
    <v-container style="max-width: 800px;">
        <v-timeline dense clipped align-top>

       
        <template
           v-for="(post, index) in posts"
             >
<<<<<<< HEAD
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
        
=======
        
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
>>>>>>> 2f55c2b3c2175b603a5b14671922efc96b7d355a
    </v-container>
  </div>
</template>

<script>
import DiaryContent from './DiaryContent.vue'

<<<<<<< HEAD

  export default {
    name: 'Diary',
    components: {
    DiaryContent
  },
    data() {
        return {
      posts: [],
      selected_id: ''
      
=======
  export default {
    name: 'Diary',
    components: {
      DiaryContent
  },
   data() {
        return {  
      posts: [],
      selected_post_id: ''
>>>>>>> 2f55c2b3c2175b603a5b14671922efc96b7d355a
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
        
        //테스트
        this.selected_post_id = '5c4ab20c87a335331e24a81d'
        
        
        })
        .catch(e => {
        this.errors.push(e)
        })

      
    }
  }
</script>

<<<<<<< HEAD
<style >
.v-timeline--align-top .v-timeline-item__dot--small{
  top: 0;
}

=======
<style>
.v-timeline--align-top .v-timeline-item__dot--small {
  top: 0px;
}
>>>>>>> 2f55c2b3c2175b603a5b14671922efc96b7d355a
</style>