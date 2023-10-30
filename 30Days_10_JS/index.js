const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

const A = new Set(a);
const B = new Set(b);

let union = new Set([...a, ...b]);

const intersection = new Set(a.filter((nums) => B.has(nums)));

const countries = require('./countries _datas');

const countryLanguages = (array)=> (array.map(element => element.languages.map));

const mostSpoken = (objArray, size) =>{
    const langArray = objArray.map(element=> element.languages);
    const setLanguages = new Set();
    for (const ele of langArray){
        setLanguages.add(...ele);
    }

    const counts = [];

    for (const l of setLanguages){
        let c = 0;
        for (const langs of langArray){
            for(const lang of langs){
                if (l === lang){
                c++;
                }
            }
        }
        counts.push({language: l, count: c});
    }
    const sortedSpoken = counts.sort((a,b)=>b.count-a.count);

    return sortedSpoken.slice(0, size);
}

console.log(mostSpoken(countries, 3));