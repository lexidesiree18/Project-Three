class Person {
    constructor(name, age, gender, description){
        this.name = name
        this.age = age
        this.gender = gender
        this.description = description
    }
}


const people = new Map()
createRandomPeople()

function createRandomPeople(){
    let personone = new Person('George', '25', 'Male', 'Very Kind')
    let persontwo = new Person('Becky', '32', 'Female', 'Very Independent')
    let personthree = new Person('Nick', '19', 'Male','Very Funny')
    people.set(personone.name, personone)
    people.set(persontwo.name, persontwo)
    people.set(personthree.name, personthree)
}
function createElement(person){
    const div = document.createElement('div')
    const h1 =document.createElement('h1')
    const p = document.createElement('p')
    const ul = document.createElement('ul')
    const age = document.createElement('li')
    const gender = document.createElement('li')

    div.className = "person"
    h1.innerHTML = person.name
    p.innerHTML = person.description
    age.innerHTML = person.age
    gender.innerHTML = person.gender

    div.appendChild(h1)
    div.appendChild(p)
    div.appendChild(ul)
    ul.appendChild(age)
    ul.appendChild(gender)
    document.body.appendChild(div)
}
function loadPerson(name){
    const person = people.get(name)
    if (person != undefined){
        createElement(person)
    }
}
loadPerson('Nick')
loadPerson('Becky')
loadPerson('George')