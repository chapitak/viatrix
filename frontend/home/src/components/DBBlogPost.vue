<template>
  <div class="dbblogpost">
  <span v-html = "post.text"> </span>
</div>
</template>



<script>


export default {
  name: 'DBBlogPost',
  data() {
    return {
      post: [],
      errors: []
    }
      
  },
  

  // Fetches posts when the component is created.
  created() {

    this.$http.get(`http://54.180.32.24:1337/posts/`+this.$route.params.postid, )
    .then(response => {
      // JSON responses are automatically parsed.
      
      this.post = response.data
      
      
    })
    .catch(e => {
      this.errors.push(e)
    })

  }
  
}



</script>

<style scoped>
</style>