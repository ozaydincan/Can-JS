/*
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

users.Can = {
email: 'canozaydin660@gmil.com',
skills: ['HTML', 'JavaScript', 'Node', 'Pyhton', 'C', 'C++'],
age: 21,
isLoggedIn: true,
points: 50
}

const checkForPoints = (obj)=>{
const moreThanFifty = [], loggedUser = [];
const people = Object.keys(obj);
for (key of people){
    if (obj[key].points >= 50){
        moreThanFifty.push(key);
    }
    if (obj[key].isLoggedIn === true){
        loggedUser.push(key);
    }
} return {first: moreThanFifty,
second: loggedUser};
}

console.log(`There are ${checkForPoints(users).second.length} logged in users and ${checkForPoints(users).first.length} people with a score higher than 50.`);
console.log(`The users who have a score higher than 50 are ${checkForPoints(users).first.join(', ')}.`);

const checkMERN = (obj) =>{
    const MERNDevs = [], MERNStack = ['MongoDB', 'Express', 'React', 'Node'];
    for (key of Object.keys(obj)){
        if (MERNStack.every(i => (obj[key].skills).includes(i))){
            MERNDevs.push(key);
        }
    }
    return MERNDevs;
}

console.log(`There are ${checkMERN(users).length} MERN Stack developers and they are ${checkMERN(users).join(', ')}.`);
*/

const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

const products = [
{
_id: 'eedfcf',
name: 'mobile phone',
description: 'Huawei Honor',
price: 200,
ratings: [
    { userId: 'fg12cy', rate: 5 },
    { userId: 'zwf8md', rate: 4.5 }
],
likes: []
},
{
_id: 'aegfal',
name: 'Laptop',
description: 'MacPro: System Darwin',
price: 2500,
ratings: [],
likes: ['fg12cy']
},
{
_id: 'hedfcg',
name: 'TV',
description: 'Smart TV:Procaster',
price: 400,
ratings: [{ userId: 'fg12cy', rate: 5 }],
likes: ['fg12cy']
}
]

const prompt = require('prompt-sync')();

const signIn = (objArray) =>{
    const userName = prompt('Enter your username: ');
    const passWord = prompt('Enter your password: ');
    let flag = false;
    for (ele of objArray){
       if (ele.username === userName && ele.password === passWord){
        flag = true;
        console.log(`Welcome ${ele.username}`);
        ele.isLoggedIn = true;
        return ele;
       } 
    }
    if (!flag){
        return console.log('Username or password incorrect!');
    }
}

const signUp = (objArray) =>{
    let date = new Date();
    let uName = prompt('Please enter your username: ');
    let msg = '', flag = false;
    for (element of objArray){
        if (element.username === uName){
            flag = true;
            msg = 'The username already exits. Please sign in.'
            console.log(msg);
            return signIn(objArray);
    }
}
if (!flag){
    objArray.push({
    _id : prompt('Enter an id: '),
    username : uName,
    email : prompt('Enter your e-mail: ' ),
    password : prompt('Choose your password: '),
    createdAt : date.getDate() + '/'
    + (date.getMonth()+1) + '/'
    + date.getFullYear() + ' '
    + date.getMinutes() + ':'
    + date.getHours(),
    isLoggedIn : true
})
}
}

/*
let loginDecision = (prompt(`Do you want to login? `)).toUpperCase;
if (loginDecision === 'YES'){
    return signIn(objArray);
}
else{
    return 1;
}
}
}*/


const findItem = (listOfProducts) =>{
    const searchItem = prompt("What would you like to search: ");
    let searchResult = false;
    for (electronics of 
        listOfProducts){
        if (electronics.name.toUpperCase() === searchItem.toUpperCase()){
            searchResult = true;
            return  electronics;
        } 
    }
    if (!searchResult){
        console.log(`No item found. Check for typos!`);
        findItem(listOfProducts);
    }
}

const rateItems = (appUser, listOfProducts) =>{
    const product = findItem(listOfProducts);
    console.log(product);
    let rating = parseFloat(prompt(`What would you like to rate ${product.name}: `));
    if (product.ratings.some(key => key.userId === appUser._id)){
        let objIndex = product.ratings.findIndex(((obj => obj.userId === appUser._id)));
        product.ratings[objIndex] = { userId: appUser._id, rate: rating };
        console.log(product);
    }
    else{
        product.ratings.push(({ userId: appUser._id, rate: rating}));
        console.log(product);
    }/*
    const averageRating = 0;
    averageRating += product.ratings((key => key.rate));
    if (averageRating === undefined){
        console.log("No ratings possible.");
    }
    else{
        console.log(`Average rating of ${product.name}: ${averageRating}`);
    }
*/
}
signUp(users);

rateItems(signIn(users), products);
