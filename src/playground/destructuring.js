const person = {
    name: 'Aritra',
    age: 31,
    location: {
        city: 'Kolkata',
        temp: 32
    }
};

// Default value while destructuring
// const { name = 'Anonymous', age, location } = person;
const { name: firstName = 'Anonymous', age, location } = person;

console.log(`${firstName} is ${age}. ${firstName} is currently in ${location.city}.`);

// renaming variable name while destructuring
const { city, temp: temperature } = person.location;
if(city && temperature) {
    console.log(`Current temperature in ${city} is ${temperature}.`);
}

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

// Challenge
const { title, author, publisher } = book;
const { name: publisherName = 'Self Published' } = publisher;
console.log(`"${title}" is an awesome book written by ${author} and published by ${publisherName}.`);

// Array destructuring
const address = ['44B Anath Deb Lane', 'Kolkata', 'West Bengal', '700037'];
// const [street, arrCity, state, zip] = address;

// Adding default
const [, arrCity, state = 'Hyderabad'] = address;
console.log(`You are in ${arrCity}, ${state}.`);

// Challenge
const items = ['Coffee (hot)', '10.00', '20.00', '30.00'];
const [itemName, , priceMedium] = items;
console.log(`A medium ${itemName} costs Rs. ${priceMedium}.`);