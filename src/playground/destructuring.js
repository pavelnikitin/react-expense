//Object destructuring

/* const person = {
    name: 'Andrew',
    age: 26,
    location: {
        city: 'Philadelphia',
        temp: 92
    }
};

//const name = person.name;
//const age = person.age;

const {name: firstName = 'ananynous', age} = person;

console.log(`${firstName} is ${age}`);

const {city, temp: temperature} = person.location;
if(city && temperature) {
    console.log(`it's ${temperature}  in ${city}.`);
    
} */



// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//        //name: 'Penguin'
//     }
// };

//  const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);





// Array destructuring

const address = ['1299 Juniper Street', 'Philadelphia','Pensilvania', '19147'];
const [, city, state = 'New york'] = address;
console.log(`You are in ${city} ${state} `);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [product, , medium, large] = item;
console.log(`A medium ${product} costs ${medium} `);