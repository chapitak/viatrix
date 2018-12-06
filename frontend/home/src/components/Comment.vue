<template>
  <div class="Comment">
    <v-divider dark></v-divider>
    <div id="read-comment">
        <v-list style="background:#fafafa">
            <template
            v-for="(comment, index) in comments"
                >
            <v-list-tile
              :key="comment.index"
            <v-list-tile-content>
                <v-list-tile-sub-title>{{comment.username}}</v-list-tile-sub-title>
                <v-list-tile-title pa2>{{ comment.comment }}</v-list-tile-title>
              <!--  <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>-->
                
            </v-list-tile-content>


            
                <!--<div
                :key="comment.index"
            >   {{comment.comment}}
                </div>-->
            </v-list-tile>
            <v-divider
                v-if="index+1 < comments.length"
            ></v-divider>
            </template>
        </v-list>

    </div>
    <div id="write-comment">
        <!--<v-form v-model="valid">-->
        <v-form >
            <!-- username 들어가야되는데 prop으로 받아오겠지? --> 
            <v-textarea
            solo
            name="Conent Textarea"
            label="코멘트를 작성해주세요"
            v-model="comment"
            >{{comment}}</v-textarea>
            <v-btn 
            
            @click="sendComment()"
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
          comment: '',
          comments: []
        }
    },
    mounted() {
        var self = this
        this.$http({
            url: 'http://54.180.32.24:1337/graphql',
            method: 'post',
            data: {
                query: `
                query {
                    comments(where: {post_id: "`+self.props_post_id+`"}) {
                        content,
                        _id,
                        post_id, 
                        user {
                        username
                    },
                    
                    }
                    } 

                `
            }
            }).then((result) => {
            
            this.comments = result.data
            //this.comments.push({comment: result.data.comments[0], username: this.$store.state.user.username });
            console.log(this.comments)
            });

    },
    
    methods: {
        sendComment() {

        this.$http.post(`http://jeongkyo.kim:1337/comments/`, {
            post_id: this.props_post_id,
            register_id: this.$store.state.user._id,
            content: this.comment,
            Post: this.props_post_id,
            User: this.$store.state.user._id
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

        this.comments.push({comment: this.comment, username: this.$store.state.user.username });
        this.comment = '';

        }
    }
  }


</script>

<style  scoped>
.Comment {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 45px;
}

@media (max-width: 767px) {
    .Comment {
        padding: 15px;
    }
}
</style>