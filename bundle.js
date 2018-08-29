"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var a = [[39.95, -75.16] /*philadelphia lat long*/
, [40.44, -80] /*pittsburgh lat long*/
],
    b = [];

var LookupWeather = function () {
  function LookupWeather(d) {
    _classCallCheck(this, LookupWeather);

    console.log(d);
    this.data = d;
    this.city = d.productionCenter;
    this.local = d.currentobservation;
    this.forecast = d.data;
  }

  _createClass(LookupWeather, [{
    key: "createNode",
    value: function createNode(element) {
      return document.createElement(element);
    }
  }, {
    key: "append",
    value: function append(parent, el) {
      return parent.appendChild(el);
    }
  }, {
    key: "log",
    value: function log() {
      console.log(this);
      var a = "<a>" + this.city + "</a>";
      // this.append(body, a);
      var b = document.querySelector("body");
      b.innerHTML = b.innerHTML + a;
      // return ;
    }
  }]);

  return LookupWeather;
}();

var getData = function getData(a) {
  a.map(function (item) {
    var url = "https://forecast.weather.gov/MapClick.php?&lat=" + item[0] + "&lon=" + item[1] + "&FcstType=json";
    fetch(url).then(function (resp) {
      return resp.json();
    }).then(function (data) {
      b.push(new LookupWeather(data));
      console.log(b);
    });
  });
};

getData(a);
