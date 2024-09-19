let geocodeCities = [
  {
    name: "Cairo",
    lat: 30.0444,
    lng: 31.2358,
  },
  {
    name: "Alex",
    lat: 31.2001,
    lng: 29.9187,
  },
  {
    name: "Giza",
    lat: 30.0131,
    lng: 31.2089,
  },
];
const citySelect = document.getElementById("selectedCity");

citySelect.addEventListener("change", function () {
  geocodeCities.filter((city) => {
    if (city.name == citySelect.value) {
      let lat = city.lat;
      let lng = city.lng;
      fetch(`http://localhost:3000/weather?address=${lat},${lng}`).then(
        (res) => {
          res.json().then((data) => {
            if (data.error) {
              document.getElementById("weather").innerHTML = data.error;
            } else {
              document.getElementById("weather").innerHTML = data.forcast;
            }
          });
        }
      );
    }
  });
});
