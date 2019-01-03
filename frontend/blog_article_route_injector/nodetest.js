const axios = require('axios')

axios.get('http://54.180.32.24:1337/posts')
.then((res) => {
  console.log(`statusCode: ${res.statusCode}`)
  console.log(res)
})
.catch((error) => {
  console.error(error)
})
console.log('dkjfkd')
