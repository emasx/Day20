const friends = ['Michael', 'Steven', 'Peter'];


// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);


friends.unshift('John');
console.log(friends);

// Remove elements

friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);


console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));   // -1


friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));


if(friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}


// 1. Create an array containing all the neighbouring countries of a country of your
// choice. Choose a country which has at least 2 or 3 neighbours. Store the array
// into a variable called 'neighbours'
// 2. At some point, a new country called 'Utopia' is created in the neighbourhood of
// your selected country. So add it to the end of the 'neighbours' array
// 3. Unfortunately, after some time, the new country is dissolved. So remove it from
// the end of the array
// 4. If the 'neighbours' array does not include the country ‘Germany’, log to the
// console: 'Probably not a central European country :D'
// 5. Change the name of one of your neighbouring countries. To do that, find the
// index of the country in the 'neighbours' array, and then use that index to
// change the array at that index position. For example, you can search for
// 'Sweden' in the array, and then replace it with 'Republic of Sweden'.

const neighbours = ['Ungaria', 'Ucraina', 'Republica Moldova', 'Bulgaria', 'Serbia'];

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if(!neighbours.includes('Germany')) {
    console.log('Probably not a central European country');
}

neighbours[neighbours.indexOf('Ungaria')] = 'Republic of Sweden';
console.log(neighbours);