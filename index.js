let a = [
    [39.95, -75.16] /*philadelphia lat long*/,
    [40.44, -80] /*pittsburgh lat long*/
  ],
  b = [];
class LookupWeather {
  constructor(d) {
    console.log(d);
    this.data = d;
    this.city = d.productionCenter;
    this.local = d.currentobservation;
    this.temperature = this.local.Temp;
    this.forecast = d.data;
  }

  createNode(element) {
    return document.createElement(element);
  }

  append(parent, el) {
    return parent.appendChild(el);
  }

  log() {
    let a = "<div><a>" + this.city + " " + this.temperature + "&deg;</a></div>";
    let b = document.querySelector("body");
    b.innerHTML = b.innerHTML + a;
  }
}

let getData = function(a) {
  a.map(item => {
    let url =
      "https://forecast.weather.gov/MapClick.php?&lat=" +
      item[0] +
      "&lon=" +
      item[1] +
      "&FcstType=json";
    fetch(url)
      .then(resp => resp.json())
      .then(function(data) {
        b.push(new LookupWeather(data));
        b[b.length - 1].log();
      });
  });
};

getData(a);
