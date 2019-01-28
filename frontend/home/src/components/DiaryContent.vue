<template>
<<<<<<< HEAD
  <div class="DiaryContent">
    
      <h1>{{post.title}}</h1>
      <span style="float:right">{{ String(post.createdAt).substring(0,10) }}</span>
      <span style="white-space: pre-line;">
            
              {{ post.text }}
      </span>
=======
  <div class="diaryContent">
    
    <div>
      
      <span style="float:right">{{ String(post.createdAt).substring(0,10) }}</span>
      <span style="white-space: pre-line;">{{post.text}}</span>
>>>>>>> 2f55c2b3c2175b603a5b14671922efc96b7d355a
      <div id="disqus_thread"></div>

      
    </div>
    
<<<<<<< HEAD
=======
  </div>
>>>>>>> 2f55c2b3c2175b603a5b14671922efc96b7d355a

</template>



<script>
<<<<<<< HEAD

export default {
  name: 'diaryContent',
=======
export default {
  name: 'DiaryContent',
>>>>>>> 2f55c2b3c2175b603a5b14671922efc96b7d355a
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
<<<<<<< HEAD
  /*mounted() {

    this.$http.get(`http://54.180.32.24:1337/posts/`+ this.props_post_id, )
    .then(response => {
      // JSON responses are automatically parsed.
     this.post = response.data
=======
  mounted() {

    this.$http.get(`http://54.180.32.24:1337/posts/`+this.props_post_id)
    .then(response => {
      // JSON responses are automatically parsed.
     this.post = response.data

>>>>>>> 2f55c2b3c2175b603a5b14671922efc96b7d355a
    })
    .catch(e => {
      this.errors.push(e)
    })  

<<<<<<< HEAD
    this.initDisqus('jeongkyo-kim-1', this.$route.params.postid, this.post.title, 'http://jeongkyo.kim'+this.$route.path)
     
    
  },*/
  watch: {
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
=======
    this.initDisqus('jeongkyo-kim-1', this.props_post_idd, this.post.title, 'http://jeongkyo.kim'+this.$route.path)
     
    
>>>>>>> 2f55c2b3c2175b603a5b14671922efc96b7d355a
  }
}

</script>

<style  scoped>
<<<<<<< HEAD

=======
>>>>>>> 2f55c2b3c2175b603a5b14671922efc96b7d355a
</style>

