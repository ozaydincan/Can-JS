
const prompt = require('prompt-sync')();

/*
let v = [1,2,3,4];

if (v.includes(number)){
    console.log(`The number ${number} is in the index ${v.indexOf(number)}`);
}
else {
    console.log(`Number isn't in the array`);
}
let str = `I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.`;
str = str.replace(/[^\w\s\']`'|_/g, "")
         .replace(/\s+/g, " ");
let words = str.split(' ')
console.log(words.join(' '));


let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
if (!shoppingCart.includes('Meat'||'meat'||'MEAT')){
    shoppingCart.unshift('Meat');
}
if (!shoppingCart.includes('Sugar')){
    shoppingCart.push('Sugar');
}
let allergy = prompt("Are you allergic to Honey?\n");
if (allergy === "Yes" || allergy === "yes"){
    shoppingCart = shoppingCart.filter(function(elements){
        return elements !== 'Honey';
    })
}
let indexTea = shoppingCart.indexOf('Tea');
if (indexTea !== -1){
    shoppingCart[indexTea] = 'Green Tea'
}

console.log(shoppingCart);


let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages = ages.sort();
console.log("Min: ", ages[0],"\nMax: ", ages[ages.length-1], "\n")
console.log("Length: ",ages.length);
let medIndex  = ages.length/2;
let med = ages[medIndex];
console.log("Median: ", med, "\n");
let avg, sum = 0;
for (let age of ages){
    sum += age;
}
avg = sum/ages.length;
console.log("Average: ",avg,"\n")
let range = ages[ages.length-1] - ages[0];
console.log("Range: ", range,"\n");
if (ages[0] - avg > ages[ages.length-1] -avg){
    console.log("The min - avg is bigger than max - avg");
}
else if(ages[0] - avg === ages[ages.length-1] -avg){
    console.log("They are equal");
}
else{
    "The max - avg is bigger";
}
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
let first_ten = countries.slice(0,10);
console.log("First ten countries are:\n", first_ten.join('\n'));
let len = countries.length;
if (len%2 === 0){
    let middleCountry = countries[len/2];
    let firstHalf = countries.slice(0,len/2);
    let secondHalf = countries.slice(len/2, len);
    console.log("The middle country is ", middleCountry);
    console.log("The first half:\n",firstHalf.join('\n'));
    console.log("The second half:\n", secondHalf.join('\n'));
}
else{
    half = (len/2)-0.5;
    console.log(half);
    let middleCountries = [countries[half], countries[half+1]];
    console.log("Middle countries are: ",middleCountries.join(", "));
    let firstHalf = countries.slice(0,half+1);
    let secondHalf = countries.slice(half+1, len)
    console.log("The first half:\n",firstHalf.join('\n'));
    console.log("The second half:\n", secondHalf.join('\n'));
}
