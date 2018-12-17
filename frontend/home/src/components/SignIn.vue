<template>
  <div class="SignIn">
  <div id="gSignInWrapper">
    <span class="label">Sign in with: </span>
    <div id="customBtn" class="customGPlusSignIn" @click="login()">
      <span class="icon"></span>
      <span class="buttonText">Google</span>
      </div>
    </div>
</div>
</template>



<script>

export default {
  data () {
    return {
      loginWindow: ''
    }
  },
  methods: {
    

    login() {
      this.loginWindow = window.open('http://54.180.32.24:1337/connect/google', '_blank', "width=500, height=500");
     
    }
    
  },
  mounted() {
    if(localStorage.accessToken != null){
        this.$router.push('/MyPage') 
    }
  }
}


</script>

<style  scoped>
#customBtn {
      display: inline-block;
      background: white;
      color: #444;
      width: 190px;
      border-radius: 5px;
      border: thin solid #888;
      box-shadow: 1px 1px 1px grey;
      white-space: nowrap;
    }
    #customBtn:hover {
      cursor: pointer;
    }
    span.label {
      font-family: serif;
      font-weight: normal;
    }
    span.icon {
      background: url('../assets/g-logo.png') transparent 5px 10% no-repeat;
      background-size: 40px;
      display: inline-block;
      vertical-align: middle;
      width: 42px;
      height: 42px;
    }
    span.buttonText {
      display: inline-block;
      vertical-align: middle;
      padding-left: 42px;
      padding-right: 42px;
      font-size: 14px;
      font-weight: bold;
      /* Use the Roboto font that is loaded in the <head> */
      font-family: 'Roboto', sans-serif;
    }
</style>