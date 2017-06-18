function Phone(brand, price, color) {
    this.brand = brand; 
    this.price = price;
    this.color = color;
}

Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

var samsungGalaxyS6 = new Phone("Samsung", 2150, "black");
var iphone6S = new Phone("Apple", 2250, "silver");
var onePlusOne = new Phone("OnePlus", 1900, "red");


samsungGalaxyS6.printInfo();
iphone6S.printInfo();
onePlusOne.printInfo();