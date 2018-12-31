<template>
  <div class="SignInProcess">
  {{accessToken}}
  </div>
</template>



<script>
  

  export default {
    data() {
      return {
          token: '',  // Add this line
          accessToken: '',
          response: ''
          
        }
    },
    
    methods: {
      
    },
    mounted () {
      this.token=this.$route.fullPath
      this.accessToken = this.token.substring(14)
      this.accessToken = "http://jeongkyo.kim:1337/auth/google/callback" + this.accessToken 
      

     this.$store.dispatch("AUTH_REQUEST", this.accessToken).then(() => {
     //this.$router.push('/')
     })
      //AJAX 를 활용한 http request
      
      
      /*const Http = new XMLHttpRequest();
      const url= this.accessToken;
      Http.open("GET", url, false);
      Http.send();
      Http.onreadystatechange=(e)=>{
      this.response = JSON.parse(Http.responseText)
      
      localStorage.accessToken = this.response.jwt
      }*/
  
      /*
      const url= this.accessToken;
      var req = new XMLHttpRequest();
      req.open('GET', url, false);
      req.send(null);
      if(req.status == 200)
        {
          this.response = JSON.parse(req.responseText)
      
          localStorage.accessToken = this.response.jwt
        }


       opener.location.reload()
       self.close()
      */
      


      //this.$store.dispatch('LOGIN', this.token)
      
      //this.$store.commit('LOGOUT');
            //.then(() => this.redirect())
            //.catch(({message}) => this.msg = message)

        //$http.defaults.headers.common['Authorization'] = `Bearer ` +this.token
       // localStorage.accessToken = this.$route.query.access_token


       //this.$destroy()
       //this.loginWindow.close();
        
    }
  }


</script>

<style  scoped>

</style>