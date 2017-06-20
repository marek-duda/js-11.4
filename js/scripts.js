function Phone(brand, model, price, color) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.color = color;
}

Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

Phone.prototype.alertInfo = function() {
    alert("Wygrałeś telefon " + this.brand + " " + this.model + " !");
}

var samsungGalaxyS6 = new Phone("Samsung", "Galaxy S6", 2150, "black");
var iphone6S = new Phone("Apple", "6S", 2250, "silver");
var onePlusOne = new Phone("OnePlus", "One", 1900, "red");


samsungGalaxyS6.printInfo();
iphone6S.printInfo();
onePlusOne.printInfo();
samsungGalaxyS6.alertInfo();