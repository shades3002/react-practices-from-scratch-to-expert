

// array in js

// const array =  new Array();

const array = [1, 2, 3, 4];

// array.push(1);

let arrayTwo = [ ...array, 5];

const arrayThree = arrayTwo.map( function (number) {
    return number * 2;
});

console.log( array ); 
console.log( arrayTwo ); 

console.log( arrayThree ); 