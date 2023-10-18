const prompt = require('prompt-sync')();

/*const solveLinEquation = (a, b, c) =>{
    let ySolutions = 0, xSolutions = 0;
    if (a === 0 || a === undefined){
        return console.log("No solutions\nInvalid Input!");
    }
    else{
        if (c === 0){
            xSolutions = 0;
        }
        else{
            xSolutions = -c/a;
            return console.log(`Solution is x = ${xSolutions}`);
        }
    }
}

const solveQuadratic = (a, b, c) =>{
    if (a === undefined){
        return console.log("No roots");
    }
    const discriminant = b**2 - 4 * a *c;
    if (discriminant > 0){
        const root_1 = (-b + discriminant)/(2 * a);
        const root_2 = (-b - discriminant) / (2 * a);
        return console.log(`Root 1: ${root_1}\nRoot 2: ${root_2}`);
    }
    else if(discriminant === 0){
        const root = -b/(2*a);
        return console.log(`The root: ${root}`);
    }
    else{
        return console.log(`The root is undefined.`);
    }
}
solveQuadratic(1,2,-1);
const showDateTime = () =>{
const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let hours = date.getHours();
let minutes = date.getMinutes();

let currentDate = `${day}/${month}/${year} ${hours}:${minutes}`;
return currentDate;
}
console.log(showDateTime());

let num1 = prompt(`Enter the first number: `);
let num2 = prompt(`Enter the second number: `);

let swapValues = (num1, num2) =>{
    let temp = num2;
    num2 = num1;
    num1 = temp;
    return {x: num1,
            y: num2
    }
}
let {x, y} = swapValues(num1, num2);



console.log(x, y);


const sum = (... args) =>{
    let sum = 0;
    for (const nums of args){
        sum += nums;
    }
    return sum;
}

console.log(sum(2,3,41,2));


//const size = prompt(`What size should be the id: `);

const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
const num = [...Array(10)].map((_, i) => String.fromCharCode(i + 48));
const alphaNum = alphabet.concat(num);

const randomIDGenerator = (size) =>{
    const idSize = parseInt(prompt(`What size should the ids be: `));
    const idNum = parseInt(prompt(`How many ids should be created: `));

    const idArray = [];
    for (let j  = 0; j < idNum; j++){
        let ID = '';
        for (let i = 0; i< idSize; i++){
            let index = Math.floor(Math.random() * alphaNum.length);
            ID += alphaNum[index];
        }
        idArray.push(ID);

    }
    return idArray;
}

const randomHEXGenerator = () =>{
    let hex = '';
    for (let i = 0; i < 8; i++){
        hex += Math.floor(Math.random()*16).toString(16);
    }
    return hex;
}

console.log((randomIDGenerator()).join(',\n'));
console.log('\n')
console.log(`The hexdecimal number: ${randomHEXGenerator()}`);


let v = ['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot'];

const modifyArray = (arrayToBeModified) =>{
    if (arrayToBeModified.length < 5){
        return console.log(`Array is too small!`);
    }
    arrayToBeModified[4] = (arrayToBeModified[4]).toUpperCase();
    return arrayToBeModified;
}
console.log(modifyArray(v));


const num = parseInt(prompt('Enter a number: '));

const isPrime = (i) =>{
    let flag = true, divisor = i;
    let message = '';
    while(flag && divisor > 0){
        if (i % divisor === 0)  {
            if(divisor === i|| divisor === 1){
                flag = true;
            }
            else{
                flag = false;
            }
    }
        divisor--;
    }
    if (flag){
        message = 'The number is prime.';
        return message;
    }
    else{
        message = "The number isn't prime.";
        return message;
    }
}

console.log(isPrime(num));

const arr = [1,3,4,5,6];

const checkType = (list) =>{
    let i = 1, flag = true, message = '', initialElement = typeof(list[0]);

    while (flag && i < list.length){
        let typeOfElement = typeof(list[i]);
        if (typeOfElement !== initialElement){
            flag = false;
        }
        i++;
    }
    if (flag){
        message = "The array is composed of the same type of elements.";
        return message;
    }
    else{
        message = "The array isn't composed of the same type of elements.";
        return message;
    }
}

console.log(checkType(arr));


const checkUnqiue = (array) =>{
    let flag = true, message ='';
    for (let i = 0; i < array.length; i++){
        if (!flag){
            break;
        }
        for (let j = i +1; j <= array.length; j++){
            if (array[i] === array[j]){
                flag = false;
                break;
            }
        }
    }
    if (flag === false){
        message = "All elements aren't unique.";
        return  message;
    }
    else{
        message = "All elements are unique."
        return message;
    }
}

console.log(checkUnqiue(arr));


const randomArrayGenerator = () =>{
    const randomArray = [];
    while (randomArray.length <= 7){
        let randomElement = Math.floor(Math.random() * 10);
        if (!randomArray.includes(randomElement)){
            randomArray.push(randomElement);
        }
    }
    return randomArray;
}

console.log(randomArrayGenerator());
*/

const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]

let newCountries = countries;

const reverseArray = (arrays) =>{
    arrays = arrays.reverse();
    return arrays;
}
console.log(reverseArray(countries).join('\n'));
