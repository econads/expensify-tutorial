const person = {
    // name: 'Andrew',
    age: 34,
    location: {
        city: 'Karlsruhe',
        temp: 15
    }
};

//Anon is default if no value for name
const {name: firstName = 'Anon', age} = person;

console.log(`${firstName} is ${age}.`);

const {city, temp: temperature} = person.location;
if(city && temperature){
    console.log(`It's ${temperature} in ${city}`);
}