const countries = require('./countries.js')

const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


//const landCountries = countries.filter(country => country.toUpperCase().includes('LAND'));

const sixCharCountries = countries.filter(country => country.length === 6);

const sixOrMore = countries.filter(country => country.length >= 6);

const getStringLists = (array) =>{
    const onlyStringArray = array.filter(element => typeof element === 'string');
    return onlyStringArray;
}

let totalProduct = products.map(product => product.price).filter(price => price > 0).reduce((acc, cur) => acc + cur, 0);


const sum = products.reduce((accumulator, product) => {
    const price = parseFloat(product.price) || 0;
    return accumulator + price;
  }, 0);

//const searchString = prompt('What should we search: ');

const commonElements = (array, str) =>{
    const commonCountries = array.filter(country => country.name.includes(str));
    return commonCountries;
}


const countLetter = (array) =>{
    const letterCount = {};
    for (const country of countries) {
        const firstLetter = country.name.slice(0,1);
        if (letterCount[firstLetter]) {
          letterCount[firstLetter]++;
        } else {
          letterCount[firstLetter] = 1;
        }
      }
    const result = Object.keys(letterCount).map((element) => ({letter: element, count: letterCount[element]}))
    return result;
}

const getFirstTenCountries = (array) =>{
    const firstTen = array.slice(0, 10);
    return firstTen;
}

const getLastTenCountries = (array)=>{
    const length = array.length;
    const lasTen = array.slice(length-10, length);
    return lasTen;
}

let sortableCountries = countries;
const sortedByname = sortableCountries.sort((a, b) =>{
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
} )
const sortedByCapital = sortableCountries.sort((a, b) =>{
    if (a.capital < b.capital) return -1;
    if (a.capital > b.capital) return 1;
    return 0;
} );

const sortedByPopulation = sortableCountries.sort((a, b)=>{
    if (a.population < b.population) return -1;
    if (a.population > b.population) return 1;
    return 0;
})

const mostSpokenLanguages = (array) =>{
    const spokenLanguages = {};
    for (let country of array){
        for (let language of country.languages){
            if (spokenLanguages[language]){
                spokenLanguages[language]++;
            }
            else{
                spokenLanguages[language] = 1;
            }
        }
    }
    const result = Object.keys(spokenLanguages).map((element) => ({language: element, count: spokenLanguages[element]}));
    result.sort((a, b)=> {
        if (b.count < a.count) return -1;
        if (b.count > a.count) return 1;
        return 0;
    })
    return result.slice(0, 10);
}

const mostPopulatedCountries = (array) =>{
    array.sort((a, b) => {
        if (b.population < a.population) return -1;
        if (b.population > a.population) return 1; 
        return 0;
    })
    return array.slice(0,10);
}

const statistics = require('./statistics');

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

statistics.getData(ages);

console.log(statistics.mode());