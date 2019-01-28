<template>
  <div class="LogbookContent" v-if="props_post_id">
    
      
      
      <span style="white-space: pre-line;">
              {{ post.text }}
      </span>
      <div id="disqus_thread"></div>

      
    </div>
    

</template>



<script>

export default {
  name: 'logbookContent',
  props: ['props_post_id'],
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

    this.$http.get(`http://54.180.32.24:1337/posts/`+ this.props_post_id, )
    .then(response => {
      // JSON responses are automatically parsed.
     this.post = response.data
     


     this.initDisqus('jeongkyo-kim-1', this.post.id, this.post.title, 'http://jeongkyo.kim'+this.$route.path+ '/' +this.post.id)
    })
    .catch(e => {
      this.errors.push(e)
    })  

    
     
    
  }
  /*watch: {
    props_post_id: function() {
      this.$http.get(`http://54.180.32.24:1337/posts/`+ this.props_post_id, )
      .then(response => {
        // JSON responses are automatically parsed.
      this.post = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })  

      this.initDisqus('jeongkyo-kim-1', this.props_post_id, this.post.title, 'http://jeongkyo.kim'+this.$route.path)
    }
  }*/
}

</script>

<style  scoped>
</style>

