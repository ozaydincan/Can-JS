const prompt = require('prompt-sync')();
//let length = prompt("Desired length of the random id: ");
/*
const alphanumArray = [];
for (let i = 65; i <= 90; i++){
    alphanumArray.push(String.fromCharCode(i));
}
for (let i = 97; i <= 122; i++){
    alphanumArray.push(String.fromCharCode(i));
}
for (let i = 48; i <= 57; i++){
    alphanumArray.push(String.fromCharCode(i));
}

randomID = () => {
    let ID = '';
    for (let j = 0; j < 8; j++){
        let index = Math.floor(Math.random() * alphanumArray.length);
        ID += alphanumArray[index];
    }
    return ID;
}

randomHEX = () =>{
    const hexAlphabet = []
    let hexNum = '#';
    for (let i = 48; i <= 57; i++){
        hexAlphabet.push(String.fromCharCode(i));
    }
    for (i = 97; i <= 102; i++){
        hexAlphabet.push(String.fromCharCode(i));
    }
    for (let n = 0;n < 8; n++){
        hexNum += hexAlphabet[Math.floor(Math.random() * 16)];
    }
    return hexNum;
}

//console.log(randomHEX());
console.log(randomID())


rgbGenerator = () =>{
    let color = []
    for (let i = 0; i < 3; i++){
        color.push(Math.floor(Math.random() * 256));
    }
    return color.join(',');
}

console.log(`rgb(${rgbGenerator()})`)
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
let landCountries = [], fourWords = [], multipleWords = [];

let max = 0, maxCountry = '';
for (land of newCountries){
    /*
    if (land.includes('land')){
        landCountries.push(land);
        
    if (land.length > max){
        max = land.length;
        maxCountry = land;
    }
    if (land.length === 4){
        fourWords.push(land);
    }
    if (land.includes(' ')){
        multipleWords.push(land);
    }*/
    land = land.toUpperCase();
}
newCountries = (newCountries.reverse().map(item => item.toUpperCase()));

console.log(newCountries.join('\n'));