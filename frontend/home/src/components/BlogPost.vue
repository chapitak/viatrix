<template>
  <div class="blogpost">
  
    <div v-html = "article">
    
    </div>
  </div>
</template>



<script>
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

    /*var xhr = new XMLHttpRequest();
    xhr.open("GET", htmlDocUri, true);
    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        var str = xhr.responseText.substring(0,4);
        if(str == "<!DO" || str == "<hea") {
        window.location.href = "/404";
        } else {
        this.article = xhr.responseText;
        }
    }
    }
    xhr.send();*/
    
    this.$http.get(htmlDocUri)
    .then(response => {
      // JSON responses are automatically parsed.
     this.article = response.data

    })
    .catch(e => {
      window.location.href = "/404";
    })               
    
  }
}
</script>

<style scoped>
</style>