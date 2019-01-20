<template>
  <div class="dbblogpost">
    
    <div class="markdown-body" >
      <h1>{{post.title}}</h1>
      <span style="float:right">{{ String(post.createdAt).substring(0,10) }}</span>
      <div v-html = "post.text">
      </div>
      

      
    </div>{{this.$route.path}}
    <div id="disqus_thread"></div>
  </div>

</template>



<script>
import MarkDownIt from 'markdown-it'

export default {
  name: 'DBBlogPost',
  components: {
  },
  data() {
    return {
      post: [],
      errors: []
    }
  },
  methods: {
    initDisqus(shortname, identifier, title, url) {
      if(typeof(DISQUS) === 'undefined'){
        (async () => {
          var vars_text = "var disqus_shortname  = \"" + shortname  + "\";\n" + 
            "var disqus_title      = \"" + title      + "\";\n" + 
            "var disqus_identifier = \"" + identifier + "\";\n" +
            "var disqus_url        = \"" + url        + "\";\n";

          var vars_obj   = document.createElement("script");
          vars_obj.type  = "text/javascript";
          vars_obj.async = true;
          vars_obj.text  = vars_text;
          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(vars_obj);

          var dsq = document.createElement('script');
          dsq.type = 'text/javascript';
          dsq.async = true;
          dsq.src = '//' + shortname + '.disqus.com/embed.js';
          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        })();
      } else {
        // eslint-disable-next-line
        DISQUS.reset({
          reload: true,
          config: function() {
            this.page.identifier = identifier;
            this.page.url = url;
            this.page.title = title;
          }
        });
      }
    }

  },

  // Fetches posts when the component is created.
  mounted() {

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

    this.initDisqus('jeongkyo-kim-1', this.$route.params.postid, this.post.title, 'http://jeongkyo.kim'+this.$route.path)
     
    
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

