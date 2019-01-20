const axios = require('axios')
const fs = require('fs')
const path = require("path")

//getting post ids
function getPosts() {
  return axios({
    url: 'http://54.180.32.24:1337/graphql',
    method: 'post',
    data: {
      query: `
      query{
        posts {
          _id
        }
      }
      `
  }
    }).then((result) => { 
    //this.commentsdatsa = result.data.data.comments 
    //console.log(result)
    return result.data
    }).catch(err =>{
      console.log(err);
      return null
    })
  }

//
getPosts().then(data => {
  //data = JSON.stringify(data)
  //data = data.posts
  ids = data.data.posts
  var idArray = []
  for(var i in ids){
    idArray.push("\"/blog/" + ids[i]._id + "\"")
  }
  var blogPostsRoutes = idArray.join(',')


  
  
  var fromWord = "__INJECTION_START__"
  var configContent = fs.readFileSync(path.join(__dirname, '../..', 'vue.config.js')).toString()
  var from = configContent.indexOf(fromWord) + fromWord.length
  var former = configContent.substring(0,from)

  var toWord = "__INJECTION_END__"
  var to = configContent.indexOf(toWord) - 2 
  var latter = configContent.substring(to)



  var modified = former + "\n" + "  " + blogPostsRoutes + "\n" + latter

  fs.writeFileSync(path.join(__dirname, '../..', 'vue.config.js'), modified, 'utf8')
  console.log("added: " + blogPostsRoutes)
})




  


