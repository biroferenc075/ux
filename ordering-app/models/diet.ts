import { Dietary } from "./enums/dietary";

export class Diet {
    cantEat: Dietary[];
    static readonly VEGAN = new Diet([Dietary.meat, Dietary.fish, Dietary.animal_product]);
    static readonly VEGETARIAN = new Diet([Dietary.meat, Dietary.fish]);
    static readonly PESCATARIAN = new Diet([Dietary.meat]);
    static readonly MEAT_EATER = new Diet([]);

    constructor(cantEat : Dietary[]) {
        this.cantEat = cantEat;
    }

    canEat(dietary: Dietary) : boolean {
        return this.cantEat.some((val) => val.valueOf() === dietary.valueOf())
    }
}


  