export interface Product {
    name: string;
    price: number;
}

let products: Product[] = [
    {name: "Guitar", price: 1500},
    {name: "FX Pedal", price: 150},
    {name: "Amp", price: 800},
    {name: "Tuner", price: 100},
];

export function calcAverageProductPrice(array: Product[]): number {
    let totalCost: number = 0;
    if (array.length === 0) {
        return 0
    }
        for (let product of array) {
            totalCost += product.price;
        }
    let average: number = totalCost / array.length;
    return average;
};
let result: number = calcAverageProductPrice( products );
console.log(result);