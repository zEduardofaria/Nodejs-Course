const yargs = require("yargs")
const axios = require("axios")

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: "Address to fetch weather for",
      string: true
    }
  })
  .help()
  .alias("help", "h").argv;

const encodedAddress = encodeURIComponent(argv.address);
const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`

axios.get(geocodeUrl).then((response) => {
  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find that adress.')
  }

  const lat = response.data.results[0].geometry.location.lat,
    lng = response.data.results[0].geometry.location.lng,
    weatherUrl = `https://api.darksky.net/forecast/b67eaafd8d5fc6debc97e397500440f6/${lat},${lng}`
  console.log(response.data.results[0].formatted_address)
  return axios.get(weatherUrl)
}).then((response) => {
  const temperature = response.data.currently.temperature
  const apparentTemperature = response.data.currently.apparentTemperature

  console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}`)
}).catch((e) => {
  if (e.code === 'ENOTFOUND') {
    console.log('Unable to connect to API service.')
  } else {
    console.log(e.message)
  }
})


