// Destructuring assignment


const person = {
    name: 'Peter',
    age: 35,
    password: 'spider'
}

const { name, age, password } = person;

console.log(name, age, password);

// case 1

const returnPerson = (person) => {
    const { name, age, password } = person;
    console.log(name, age, password);
}

returnPerson(person);

const returnPersonTwo = ({name, age, power = 'spider power'}) => {
    console.log(name, age, power);
}

returnPersonTwo(person);


const returnPersonThree = ({name, age, power = 'spider power'}) => {
    return {
        keyName: name,
        ageDate: age,
        latlng: {
            lat: 1235.125,
            lng: -42.22222
        }
    }
}

const avenger = returnPersonThree( person );

console.log( avenger );

const {keyName, ageDate, latlng: {lat, lng}  } = avenger;

console.log( keyName, ageDate, lat, lng);