

const name = 'Carlos';

const lastName = 'Gutierrez';

const fullName = ` ${ name } ${ lastName } ${ 1 + 2 } `;

// console.log(fullName);

export function getHello(name = 'Carlos') {
    return `Hello ${ name }`;
}

// console.log( `This is a string: ${ getHello(name) }` );

