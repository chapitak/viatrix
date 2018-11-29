<template>
  <div class="Comment">
    <div id="write-comment">
        <v-form v-model="valid">
            <!-- username 들어가야되는데 prop으로 받아오겠지? --> 
            <v-textarea
            solo
            name="Conent Textarea"
            label="코멘트를 작성해주세요"
            
            ></v-textarea>
            <v-btn 
            :disabled="!valid"
            @click="submit"
            style="float:right"
            class="pa-0 ma-0"
            >
            등록
            </v-btn>
        </v-form>
        </div>     
    </div>
</template>



<script>

  export default {
    name: 'Comment',
    props: ['props_post_id'],
    data() {
      return {
        }
    },
    
    methods: {
        sendComment() {
        this.$http.post(`http://jeongkyo.kim:1337/comments/`, {
            post_id: this.props_post_id,
            register_id: '',
            content: '',
            reg_dt:''
        })
        .then(response => {
            // Handle success.
            console.log(
            'Well done, your post has been successfully created: ',
            response.data
            );
        })
        .catch(error => {
            // Handle error.
            console.log('An error occurred:', error);
        });

        }
    }
  }


</script>

<style  scoped>

</style>