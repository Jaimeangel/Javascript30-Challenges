const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

//Array.prototype.filter()
//this method filter a Array by a condition which is pass in the funciont provided.
//This method create a copy of original array
/* const filterByYear=(init,final)=>{return inventors.filter(inventor=>inventor.year>init && inventor.year<final)}
const variable=filterByYear(1500,1760)
console.table(variable) 

const filterBySpecificYear=inventors.filter(inventor=>inventor.year<1795)
console.table(filterBySpecificYear)
function filterPassed(a){
    return a.passed===1968
}
const filterByPassed=inventors.filter(filterPassed)
console.table(filterByPassed) */

//Array.prototype.map()
//This method creates a new array with the result of a function provided to each element of array.
/* const printNameAndYear=inventors.map(invento=>`${invento.first} ${invento.last} nacion en el año ${invento.year} y despues murio en el año ${invento.passed} a la edad de ${invento.passed-invento.year}`)
console.table(printNameAndYear)
const printBirthdayDeath=inventors.map(inventors=>[inventors.year,inventors.passed,inventors.passed-inventors.year])
console.log(printBirthdayDeath)  */


//Array.prototype.sort()
//This its about sort an array through a condition which specific how ordered the array.
/* inventors.sort((a,b)=>a.year<b.year? -1 : 1)
console.table(inventors) */

//Array.prototype.reduce()
/* const countYearsInventors=inventors.reduce((prev,inventor)=>(prev+(inventor.passed-inventor.year)),0)
console.log(countYearsInventors) */

console.log('Ejercicios con Arrays')
console.log('Filter the inventors by years lived')
inventors.sort((a,b)=>{
    const prevInventor=a.passed-a.year;
    const nextInventor=b.passed-b.year;
    return prevInventor>nextInventor?1:-1
})
console.table(inventors)

/* console.log('creted a list of Bulevar in Paris that contain "d" anywhere in the name')
console.log('You will get this data from wikipedia category Boulevar Paris using DOM')

const category=document.querySelector('.mw-category');
const links = Array.from(category.querySelectorAll('a'))
const listBoulevar=links
                    .map(link=>link.textContent)
                    .filter(boulevarName=>boulevarName.includes('de')) */

console.log('Sort the people alphabetical for the last name')
people.sort((a,b)=>{
    const [aFirst,aLast]=a.split(', ');
    const [bFirst,bLast]=b.split(', ');
    return aFirst>bFirst?1:-1
})
console.table(people)

//With the next data, you should count the instances of each element of this array.
const data =['car','car','truck','bike','walk','car','van','bike','walk','car','van','car','truck']
const sumInstances= data.reduce((obj,valor)=>{
    if(!obj[valor]){
        obj[valor]=0
    }
    obj[valor]++
    return obj
},{})
console.log(sumInstances)
