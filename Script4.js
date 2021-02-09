const person = {
    firstName:  'Jack' ,
    lastName:  'Black' ,
    age: 26 ,
    hobbies: ['music', 'movies', 'gaming'],
    address: {
        street: '50 main street',
        city: 'London'
    }
}

console.log(person);
console.log(person.firstName, person.lastName);

console.log(person.hobbies[1]);
console.log(person.address.city);


const { firstName, lastName, address: {city} } = person;

console.log(firstName);
console.log(city);


person.email = 'jack@gmail.com';

console.log(person);