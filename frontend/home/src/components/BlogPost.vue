<template>
  <div class="blogpost">
  
    <div  class="markdown-body" v-html = "article">
    
    </div>
  </div>
</template>



<script>
import MarkDownIt from 'markdown-it'

export default {
  name: 'BlogPost',
  data() {
    return {
      year: this.$route.params.year,
      month: this.$route.params.month,
      day: this.$route.params.day,
      title: this.$route.params.title,
      article: "",   // will contain contents' html. 
    }
  },
  mounted() {
    var htmlDocUri = 
        '/blog_contents/'
        + this.year + '/'
        + this.month + '/'  
        + this.day + '/'
        + this.title + '.html'


    
    this.$http.get(htmlDocUri)
    .then(response => {
      // JSON responses are automatically parsed.
     //this.article = response.data

     var md = MarkDownIt({
    html: true}) 
     this.article = md.render(response.data)    
    })
    .catch(e => {
      window.location.href = "/404";
    })               
    
  }
}
</script>

<style scoped>
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