function minimumElement(array) {
    let min = array[0];
   
    for (let i=1; i<array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
   
    return min;
}

const sample_array = [1,2,4,6,71,2,4,9,100];

console.log(minimumElement(sample_array));
Sual-3 (Helli)

function sum(array) {
let sum = 0;
for (let i=0; i<array.length; i++) {
sum = sum + array[i];
}
return sum;
}
const sample_array = [1,2,4,6,71,2,4,9,100];
console.log(sum(sample_array));
Sual-4 (Helli)
function sum(array) {
let sum= 1;
for (let i=0; i<array.length; i++) {
sum = sum * array[i];
}
return sum;
}
const sample_array = [1,2,4,6,71,2,4,9,100];
console.log(sum(sample_array));
Sual-5 (Helli)
function div2(array) {
for (let i=0; i<array.length; i++) {
if (array[i]%2 ==0) {
console.log(array[i]);
}
}
}
const sample_array = [1,2,4,6,71,2,4,9,100];
div2(sample_array);