

const person = {
    name: 'Carlos',
    lastName: 'Gutierrez',
    age: 37,
    address: {
        city: 'Merida',
        country: 'Venezuela',
        zip: 5101,
        lat: 12333.555,
        lng: 455222.55,
    }
};

//  { ...object } for cloned object
const personTwo = { ...person };

personTwo.name = 'Yoly';

//console.table( person );
console.log(person);

console.log(personTwo);