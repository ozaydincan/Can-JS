const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
    ];

    const userKeys = new Set();
    
    for (const user of users){
        for (key of Object.keys(user)){
            userKeys.add(key);
        }
    }

const userSkills = objArray =>{
    const lessThanTwo = []
    for (person of objArray){
        if (person.skills.length < 2){
            lessThanTwo.push(person.name);
        }
    }
    return lessThanTwo;
}

const countries = require('./countries');

const destructureObject = (_objArray)=>{
    for (const country of countries){
        console.log(`Name: ${country['name']}\nCapital:${country['capital']}\nPopulation: ${country['population']}\nLanguages: ${country['languages'].join(', ')}`)
        console.log('\n');
    }
}

const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

const [studentName, skills, [htmlScore, cssScore, jsScore, reactScore]] = student;

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]

const convertArrayToObject = array =>{
    const objectArray = [];
    for (const [stdname, stdskills, stdscores] of array){
        objectArray.push({stdname, stdskills, stdscores});
    }
    return objectArray;
}

const studentObject = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }

let copiedStudent = studentObject;

const updateObj = obj => {
    obj.skills.frontEnd.push({skill: 'Bootstrap', level: 8});
    obj.skills.backEnd.push({skill: 'Express', level: 9});
    obj.skills.dataBase.push({skill: 'SQL', level: 8});
    obj.skills.dataScience.push('SQL');
    return obj;
}

console.log(updateObj(copiedStudent).skills)