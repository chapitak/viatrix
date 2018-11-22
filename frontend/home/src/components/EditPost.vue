<template>
  <div class="EditPost">
  <form @submit.prevent="postPost">
  <input type="text" v-model="vtitle">
  <markdown-editor v-model="content" ref="markdownEditor"></markdown-editor>
  <v-btn >submit</v-btn>
  </form>
</div>
</template>



<script>

  export default {
    data() {
      return {
          vtitle: '',  // Add this line
          content: ''
          
        }
    },
    
    methods: {
      postPost(){
        this.$http.post(`http://54.180.32.24:1337/posts/`, {
            title: this.vtitle ,
            text: this.content
            
          })
          
          

      }
    }
  }


</script>

<style  scoped>

</style>