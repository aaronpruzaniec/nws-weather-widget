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
    this.forecast = d.data;
  }

  createNode(element) {
    return document.createElement(element);
  }

  append(parent, el) {
    return parent.appendChild(el);
  }

  log() {
    console.log(this);
    let a = "<a>" + this.city + "</a>";
    // this.append(body, a);
    let b = document.querySelector("body");
    b.innerHTML = b.innerHTML + a;
    // return ;
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
        console.log(b);
      });
  });
};

getData(a);
