const request = require("request");
// Temp Api
let getTempreture = (url, callback) => {
  let tempUrl = url;

  request({ url: tempUrl, json: true }, (err, res) => {
    if (err) {
      callback("Unable to connect to weather service", undefined);
    } else if (res.body.error) {
      callback("unable to find location", undefined);
    } else {
      const data = res.body.current;
      callback(
        undefined,
        data.weather_descriptions[0] + " , The temperature: " + data.temperature
      );
    }
  });
};
module.exports = getTempreture;
