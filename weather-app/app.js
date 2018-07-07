// const yargs = require("yargs");

// const geocode = require('./geocode/geocode')

// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: "address",
//       describe: "Address to fetch weather for",
//       string: true
//     }
//   })
//   .help()
//   .alias("help", "h").argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage)
//   } else {
//     console.log(JSON.stringify(results, undefined, 2))
//   }
// })

// https://api.darksky.net/forecast/b67eaafd8d5fc6debc97e397500440f6/-19.9518218,-44.1813142

const request = require('request')

request({
  url: 'https://api.darksky.net/forecast/b67eaafd8d5fc6debc97e397500440f6/-19.9518218,-44.1813142',
  json: true,
}, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log(body.currently.temperature)
  } else {
    console.log('Unable to fetch weather.')
  }
})