const product = [
    {name: 'laptop', quantity: 5, price: 25000},
    {name: 'smartphone', quantity: 4, price: 24000},
    {name: 'television', quantity: 3, price: 15000},
    {name: 'tablet', quantity: 2, price: 35000},
    {name: 'phone', quantity: 1, price: 10000}
]
let total = 0;
for(const catagory of product){
    total = total + catagory.price;
}
// console.log(total)