var xhr = require('xhr')
var example = require('./views/release2.hbs')
var options = {
  url: '192.168.1.246:3000/v1/teams',
  useXDR: true,
  method: 'GET'
}
xhr(options, function(err, data) {
  if (err) console.log(err) // do something

  console.log(data)
  document.body.innerHTML = example({ teams: data });
})

