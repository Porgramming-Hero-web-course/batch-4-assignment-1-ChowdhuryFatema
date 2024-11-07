

class Car {
    constructor(public make: string, public model: string, public year: number){}
    getCarAge(){
        const carAge = new Date().getFullYear() - this.year;
        return carAge
    }
}

