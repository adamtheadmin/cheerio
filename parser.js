/*//===
    Cheerio Website Parser
    By Adam Fowler
*///===

var axios = require('axios'),
    cheerio = require('cheerio')

axios.get('https://en.wikipedia.org/wiki/List_of_Nintendo_64_games')
    .then(body => {
        var $ = cheerio.load(body.data)

        var table = $('#softwarelist')

        $('tr', table).each(function(){
            var game = {
                title : $('td:nth-child(1)', this).text().trim(),
                year : +$('td:nth-child(2) a', this).html(),
                developer : $('td:nth-child(3)', this).text().trim(),
                publishers : $('td:nth-child(4)', this).text().trim().split(','),
                regions : $('td:nth-child(5)', this).text().trim().split(','),
                generes : $('td:nth-child(6)', this).text().trim().split('/')
            }
            console.log(game)
        })
    })