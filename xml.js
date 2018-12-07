/*//===
    Cheerio XML Parser
    By Adam Fowler
*///===

var axios = require('axios'),
    cheerio = require('cheerio')

axios.get('http://feeds.reuters.com/Reuters/domesticNews')
    .then(body => {
        var $ = cheerio.load(body.data)

        var items = $('item')

        items.each(function(){
            var item = {
                title : $('title', this).text(),
                description : $($('description', this).text().trim()).text().trim(),
                category : $('category', this).html(),
                date : $('pubDate', this).html()
            }
            console.log(item)
        })
    })