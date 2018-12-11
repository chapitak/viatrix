<template>
  <div class="MyPage">
    <div id="app">
        <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
            v-model="username"
            :rules="nameRules"
            :counter="10"
            label="UserName"
            required
        ></v-text-field>
        <input type="hidden" value=storeName>
        <input type="hidden" v-model="storeName">

        <v-btn
            class="pa-0 ma-0"
            :disabled="!valid"
            @click="submit"
        >
            변경하기
        </v-btn>
        </v-form>
    </div>
  </div>
</template>



<script>

export default {
    data() {
      return {
        valid: true,
        username: '',
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 10) || 'Name must be less than 10 characters'
        ],
    }
  },

  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        this.$http.put(`http://jeongkyo.kim:1337/users/` + this.$store.state.user._id , {
          username: this.username
        })
        .then(response => {
          // Handle success.
          console.log(
            'Well done, your post has been successfully updated: ',
            response.data
          );
        })
        .catch(error => {
          // Handle error.
          console.log('An error occurred:', error);
        });
      }
    }
  },
  watch: {
     storeName() {
       this.username = this.$store.state.user.username
       return  this.$store.state.user.username
     }
  }
}


</script>

<style  scoped>


</style>