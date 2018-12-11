<template>
  <div class="Comment" v-if="props_post_id">
    
    <div id="read-comment">
        <v-list style="background:#fafafa">
            <template
            v-for="(comment, index) in comments"
                >
            <!-- 정보가 있는 사용자 -->    
            <v-list-tile
              v-if="comment.user != null"
              :key="comment.index">
            <v-list-tile-content>
                <v-list-tile-sub-title>{{comment.user.username}}</v-list-tile-sub-title>
                <div style="width:100%" pa2>{{ comment.content }} 
                
                    <v-icon @click="deleteComment(comment._id)" small color="red" style="float:right"
                    v-if="$store.state.user._id == comment.user._id"
                    >close</v-icon>  
                </div>      
            </v-list-tile-content>
                <!--<div
                :key="comment.index"
            >   {{comment.comment}}
                </div>-->
            </v-list-tile>
            <!-- 탈퇴한 사용자 -->    
            <v-list-tile
              v-else
              :key="comment.index">
            <v-list-tile-content>
                <v-list-tile-sub-title>*탈퇴한 사용자*</v-list-tile-sub-title>
                <div style="width:100%" pa2>{{ comment.content }} 
                
                </div>      
            </v-list-tile-content>
                <!--<div
                :key="comment.index"
            >   {{comment.comment}}
                </div>-->
            </v-list-tile>







            <v-divider :key="comment.index"
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
    
    watch: {
        props_post_id: function () {
                this.$http({
                url: 'http://54.180.32.24:1337/graphql',
                method: 'post',
                data: {
                    query: `
                    query {
                        comments(where: {post_id: "`+this.props_post_id+`"}) { 
                            content,
                            _id,
                            post_id, 
                            user {
                            username,
                            _id
                        },
                        
                        }
                        } 

                    `
                }
                }).then((result) => { 
                //this.commentsdatsa = result.data.data.comments 
                this.comments = result.data.data.comments
                }); 
            return null
        }
    },
    methods: {
        sendComment() {

        this.$http.post(`http://jeongkyo.kim:1337/comments/`, {
            post_id: this.props_post_id,
            register_id: this.$store.state.user._id,
            content: this.comment,
            post: this.props_post_id,
            user: this.$store.state.user._id
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

        this.comments.push({content: this.comment, user: {username: this.$store.state.user.username, _id: this.$store.state.user._id}});
        this.comment = '';

        },
        deleteComment(cid) {
            console.log(cid)
            var r = confirm("정말 삭제하시곘습니까?")
            if(r==true) {
                this.$http.delete(`http://jeongkyo.kim:1337/comments/` + cid)
                .then/*(response => {
                    // Handle success.
                    console.log(
                    'Well done, your post has been successfully updated: ',
                    response.data
                    );
                

                })
                .catch(error => {
                    // Handle error.
                    console.log('An error occurred:', error);
                });*/
                const idx = this.comments.findIndex(function(item) {return item._id === cid}) // findIndex = find + indexOf 
                    if (idx > -1) this.comments.splice(idx, 1)
            } 
        }
    }
  }


</script>

<style scoped>
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

<style>
.Comment .v-list__tile {
    height: auto;
}

</style>