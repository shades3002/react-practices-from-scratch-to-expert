
// function in js


// function hello(name) {
//     return `Hello, ${ name }`;
// }

// const hello = function (name) {
//     return `Hello, ${ name }`;
// }

const helloTwo = (name) => {
    return `Hello, ${ name }`;
}

// arrow fuction
const helloThree = (name) => `Hello, ${ name }`;

const helloFour = () => `Hello world`;

 //console.log(hello('America'));

console.log(helloTwo('Capitan'));

console.log(helloThree('Iron man'));

console.log(helloFour());


const getUser = () => {
    return {
        uid: 'ABS22222',
        userName: 'shades3002'
    }
}

console.log(getUser());


const getUserTwo = () => ({
        uid: 'ABS22222',
        userName: 'shades3002'
});

const user = getUserTwo();
console.log(user);

// task

function getUserActive (name) {
    return {
        uid: 'ABS22222',
        userName: name
    }
};

const userActive = getUserActive('acuaman');

console.log( userActive );

// answer

const userActiveTwo = (name) => ({
    uid: 'ABS22222',
    userName: name
});

console.log( userActiveTwo('Carlos') );

