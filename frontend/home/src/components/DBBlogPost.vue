<template>
  <div class="dbblogpost">
    
    <div class="markdown-body" >
      <h1>{{post.title}}</h1>
      <span style="float:right">{{ post.createdAt.substring(0,10) }}</span>
      <div v-html = "post.text">
      </div>
    
  <!--<div class="postContent" v-html = "post.text"> </div>-->
    </div>
  </div>

</template>



<script>
import MarkDownIt from 'markdown-it'

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

     var md = MarkDownIt()
     this.post.text = md.render(response.data.text)
      
    })
    .catch(e => {
      this.errors.push(e)
    })
    


  }
  
}



</script>

<style  scoped>
@import "../assets/markdown.css";
	.markdown-body {
		box-sizing: border-box;
		min-width: 200px;
		max-width: 980px;
		margin: 0 auto;
		padding: 45px;
	}

	@media (max-width: 767px) {
		.markdown-body {
			padding: 15px;
		}
	}

</style>