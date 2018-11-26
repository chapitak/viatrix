<template>
  <div class="SignInProcess">
  {{registerUrl}}
  </div>
</template>



<script>

  export default {
    data() {
      return {
          token: '',  // Add this line
          registerUrl: '',
          response: ''
          
        }
    },
    
    methods: {
      
    },
    mounted () {
      this.token=this.$route.fullPath
      this.registerUrl = this.token.substring(14)
      this.registerUrl = "http://jeongkyo.kim:1337/auth/google/callback" + this.registerUrl 
      
      //AJAX 를 활용한 http request
      const Http = new XMLHttpRequest();
      const url= this.registerUrl;
      Http.open("GET", url);
      Http.send();
      Http.onreadystatechange=(e)=>{
        this.response = JSON.parse(Http.responseText)
      
      localStorage.accessToken = this.response.jwt
      }



      //this.$store.dispatch('LOGIN', this.token)
      
      //this.$store.commit('LOGOUT');
            //.then(() => this.redirect())
            //.catch(({message}) => this.msg = message)

        //$http.defaults.headers.common['Authorization'] = `Bearer ` +this.token
       // localStorage.accessToken = this.$route.query.access_token


       //this.$destroy()
       //this.loginWindow.close();
       self.close()

    }
  }


</script>

<style  scoped>

</style>