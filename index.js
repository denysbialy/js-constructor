function Car (manufacturer, model, color, releaseYear, fuelCunsamption, vloume){
    this.drive = function(){
        return 'drive';
    }
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.releaseYear = releaseYear;
    this.fuelCunsamption = fuelCunsamption;
    this.vloume = vloume;
}

const car1 = new Car('Tesla', 'model S', 'white', 2012, 0, 250)