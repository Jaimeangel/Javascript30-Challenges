const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
]

//Array.prototype.some()
//this method evaluates if at leats one element of array meet
//the requeriments of function provided 
//return true or false
const isSomeoneAdult=people.some(person=>((new Date).getFullYear())-person.year<18)
console.log('Tell me if someone of this people array its adult ',isSomeoneAdult)

//Array.prototype.every()
//this method evaluates if every element of array
//meet the requirements of function provided
//returns true or false
const allPeopleAdult=people.every(person=>((new Date).getFullYear())-person.year>18)
console.log('All people here is adult?',allPeopleAdult)

//Array.prototype.find()
//this return the first element that match with the requirement 
//of function provided
const findByNamePeople=people.find(person=>person.name==='Wes')
const findByIdPeople=comments.find(coment=>coment.id===123523)
console.log('Bring me information of Wes ',findByNamePeople)
console.log('Bring me information of someone with id 123523 ',findByIdPeople)

//Array.prototype.findIndex()
//This method return index of first element that match with the requirements
//of function provided
const indexById=comments.findIndex(coment=>coment.id===123523)
console.log('Bring me index of someone with id 123523 ',indexById)