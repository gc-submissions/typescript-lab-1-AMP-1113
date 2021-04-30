import { Product } from "./products";

export interface InventoryItem {
    product: Product;
    quantity: number;
}
 
let inventory: InventoryItem[] = [
    { product: { name: "motor", price: 10.00 }, quantity: 10 },
    { product: { name: "sensor", price: 12.50 }, quantity: 4 },
    { product: { name: "LED", price: 1.00 }, quantity: 20 }
];

export function calcInventoryValue(array: InventoryItem[]): number {
    let total: number = 0;
    for (let item of array) {
        total += item.product.price * item.quantity;
    }
    return total;
};
let result: number = calcInventoryValue( inventory );
console.log(result);
