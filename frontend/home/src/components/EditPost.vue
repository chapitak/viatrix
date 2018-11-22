<template>
  <div class="EditPost">
    <g-signin-button
    :params="googleSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    Sign in with Google
    </g-signin-button>
</div>
</template>



<script>

  export default {
  data () {
      return {
        /**
        * The Auth2 parameters, as seen on
        * https://developers.google.com/identity/sign-in/web/reference#gapiauth2initparams.
        * As the very least, a valid client_id must present.
        * @type {Object} 
        */
        googleSignInParams: {
          client_id: 'YOUR_APP_CLIENT_ID.apps.googleusercontent.com'
        }
      }
    },
    methods: {
      onSignInSuccess (googleUser) {
        // `googleUser` is the GoogleUser object that represents the just-signed-in user.
        // See https://developers.google.com/identity/sign-in/web/reference#users
        const profile = googleUser.getBasicProfile() // etc etc
      },
      onSignInError (error) {
        // `error` contains any error occurred.
        console.log('OH NOES', error)
      }
    }
  }


</script>

<style  scoped>
.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
}
</style>