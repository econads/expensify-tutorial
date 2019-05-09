// Object destructuring

// const person = {
//     // name: 'Andrew',
//     age: 34,
//     location: {
//         city: 'Karlsruhe',
//         temp: 15
//     }
// };

// //Anon is default if no value for name
// const {name: firstName = 'Anon', age} = person;

// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature} = person.location;
// if(city && temperature){
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Interesting Times',
//     author: 'Terry Pratchett',
//     publisher: {
//         name: 'Random House'
//     }
// }

// const { name: publisherName = 'Self published'} = book.publisher;

// console.log("Publisher is ", publisherName);

const address = ['Street a 22', 'Karlsruhe', '76123', 'BW'];
const [, city, postcode, state = 'Lower Saxony']  = address;
console.log(`this is ${city}, ${state}`);

const item = ['Coffee (iced)', '$2', '$10', '$4.50'];

const [name, , medium] = item;

console.log(`A medium ${name} costs ${medium}`)