 // Destructuring array


 const characters = ['Goku', 'Vegeta', 'Trunks'];

 // fn + f2
 const [ goku ] = characters;

 console.log( goku );

 const [ , vegeta ] = characters;

 console.log( vegeta );

 const [ , , trunks ] = characters;

 console.log( trunks );

 /// return array

 const arrayReturn = () => {
     return ['ABC', 123]
 }

 const [letters, numbers] = arrayReturn();

 console.log(letters, numbers);

 // task
 const _useState = (value) => {
     return [value, ()=> {console.log('hello world')}]
 }

 const [ name, setName ] = _useState( 'Goku' );

console.log( name );

setName();