function Vehicle(price, model) {
  this.price = price;
  this.model = model;
  Vehicle.prototype.color = "black";
}

Vehicle.prototype.getPrice = function (price) {
  return this.price;
};

var vehicle1 = new Vehicle(70000, 2019);
var vehicle2 = new Vehicle(60000, 2018);
var vehicle3 = new Vehicle(50000, 2017);
var vehicle4 = new Vehicle(40000, 2016);

console.log(vehicle1.color);
console.log(vehicle2.getPrice);
