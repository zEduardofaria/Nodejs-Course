const request = require('request')

const getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/b67eaafd8d5fc6debc97e397500440f6/${lat},${lng}`,
    json: true,
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature,
      })
    } else {
      callback('Unable to fetch weather.')
    }
  })
}

module.exports.getWeather = getWeather
