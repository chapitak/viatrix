const axios = require('axios')

getPostIDs = function(callback){
  axios({
    url: 'http://54.180.32.24:1337/graphql',
    method: 'post',
    data: {
        query: `{"query":"query{posts {_id}}"}`
    }
    }).then((result) => { 
    //this.commentsdatsa = result.data.data.comments 
    callback(result)
    }).catch(err =>{
      console.log(err);
    })
  }

getPostIDs(function(response) {
  console.log(response)
})

