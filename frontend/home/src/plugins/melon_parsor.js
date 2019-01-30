const fs = require('fs')
const path = require("path")
const cheerio = require('cheerio')



var melonHTML = fs.readFileSync(path.join(__dirname, 'newtest.html')).toString()

var $ = cheerio.load(melonHTML)





var album_type = $('#conts > div.section_info > div > div.entry > div.info > span').text()

var album_name_untrimmed = $('#conts > div.section_info > div > div.entry > div.info > div.song_name').text()
var album_name = trim(album_name_untrimmed.substring(5))
//앞에 세개 잘라네야지

var artist_name = $('#conts > div.section_info > div > div.entry > div.info > div.artist > a > span:nth-child(1)').text()

var album_release_date = $('#conts > div.section_info > div > div.entry > div.meta > dl > dd:nth-child(2)').text()

var album_genre = $('#conts > div.section_info > div > div.entry > div.meta > dl > dd:nth-child(4)').text()

var publisher = $('#conts > div.section_info > div > div.entry > div.meta > dl > dd:nth-child(6)').text()

var agency = $('#conts > div.section_info > div > div.entry > div.meta > dl > dd:nth-child(8)').text()

console.log(album_name, artist_name, album_release_date)













//trim 함수
function trim(stringToTrim) {
    return stringToTrim.replace(/^\s+|\s+$/g,"");
}