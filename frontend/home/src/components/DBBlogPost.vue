<template>
  <div class="dbblogpost">
    
    <div class="markdown-body" >
      <h1>{{post.title}}</h1>
      <span style="float:right">{{ post.createdAt.substring(0,10) }}</span>
      <div v-html = "post.text">
      </div>
    </div>
    <div id="disqus_thread"></div>

                                
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

    //disqus 추가
      /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
    
    var disqus_config = function () {
    this.page.url = "http://jeongkyo.kim/#/DBBlog/5bee1ad493f3cd542cda23ad";  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = this.post.id; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://jeongkyo-kim-1.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();


      
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