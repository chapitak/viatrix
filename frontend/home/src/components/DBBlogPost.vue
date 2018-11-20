<template>
  <div class="dbblogpost">
    
    <div class="markdown-body" >
      <h1>{{post.title}}</h1>
      <span style="float:right">{{ post.createdAt.substring(0,10) }}</span>
      <div v-html = "post.text">
      </div>
    </div>
<<<<<<< HEAD
    <div id="disqus_thread"></div>        
=======
    <div id="disqus_thread"></div>

                                
>>>>>>> parent of 0e0ee6f4... [UPDATE] modifying disqus location
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
    
  }, 
  mounted() {
     if (window.DISQUS) {
        this.reset(window.DISQUS)
        return
      }
    this.init()
  

  },
  methods: {
    reset(dsq) {
        const self = this
        dsq.reset({
          reload: true,
          config: function () {
            self.setBaseConfig(this)
          }
        })
    },
    init() {
      const self = this
      window.disqus_config = function () {
        self.setBaseConfig(this)
    }
    //setTimeout(() => {
          var d = document, s = d.createElement('script');
          s.src = 'https://jeongkyo-kim-1.disqus.com/embed.js';
          s.setAttribute('data-timestamp', +new Date());
         (d.head || d.body).appendChild(s);
    //    }, 0)
    /*var d = document, s = d.createElement('script');
    s.src = 'https://jeongkyo-kim-1.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);*/
    

    },
    setBaseConfig(disqusConfig){
      disqusConfig.page.url = window.location.origin + "/" + this.$route.path;  // Replace PAGE_URL with your page's canonical URL variable
      disqusConfig.page.identifier = this.$route.params.postid;
      disqusConfig.callbacks.onReady = [() => {
          this.$emit('ready')
        }]
        
        disqusConfig.callbacks.onNewComment = [(comment) => {
          this.$emit('new-comment', comment)
        }]
      console.log(s)
    }
    


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