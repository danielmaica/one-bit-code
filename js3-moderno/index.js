// Template Literals
// const name = 'Isaac'
// console.log(`Olá, ${name}
// Seja bem-vindo!
// Estamos em ${Date()}.`)


// Arrow Function
// const sum = (a, b) => a + b
// const multi = (a, b) => a * b
// console.log(sum(3, 5))
// console.log(multi(3, 5))
// const towns = ['Porto Alegre', 'São Paulo', 'Brasilia', 'Rio de Janeiro']
// const startingWithP = towns.filter(town => town[0] === 'P')
// console.log(startingWithP)


// Desestruturação de objetos e arrays
// const person = {
//   name: 'Luke',
//   job: 'Farmer',
//   parents: ['Anakin', 'Padme']
// }
// const name = person.name
// const { job, parents } = person
// console.log(name, job, parents)
// const [father, mother] = parents
// console.log(father, mother)
// function createUser({name, job, parents}){
//   const id = Math.floor(Math.random() * 9999)
//   return {
//     id,
//     name: name,
//     job: job,
//     parents: parents
//   }
// }
// const luke = createUser(person)
// console.log(luke)


// Operador Spread ...iterableObject
// let str = "Olá, Mundo"
// let arr = [4, 2, 8, 3, 1]
// console.log(...str) // Separa as letras
// console.log(...arr) // Separa os elementos
// const towns = ['Porto Alegre', 'São Paulo', 'Brasilia', 'Rio de Janeiro']
// console.log(...towns)
// console.log(...towns[0])
// const townsCopy = towns
// townsCopy.pop()
// townsCopy.pop()
// townsCopy.push('Rosário')
// console.log({towns, townsCopy})
// const townsClone = [...towns]
// console.log({towns, townsCopy})
// townsClone.push('Canoas')
// console.log({towns, townsCopy, townsClone})
// const townsObj = {...towns}
// const townsObjClone = {...townsObj}
// townsObjClone.test = 'Test'
// console.log({ townsObj, townsObjClone })


// Rest params
// const numbers = [1, 5, 3, 8, 50, 330, 24, 563, 202]
// function sum(...numbers){
//   return numbers.reduce((accum, num) => accum + num, 0)
// }
// console.log(sum(1, 1))
// console.log(sum(2, 2, 2, 2, 2, 2))
// console.log(sum(...numbers))

// Encadeamento Opcional - Optional Chaning
// const user = {
//   name: 'John Doe',
//   email: 'doejohn@email.com',
//   friends: [{
//     name: 'Mary',
//     addres: {
//       street: 'Some Street',
//       number: 99
//     }
//   }],
//   age: 42,
//   phone: {
//     countryCode: '+55',
//     ddd: '22',
//     number: '998765432'
//   }
// }
// console.log(user.friends[0].phone.ddd)
// console.log(user.friends[0].phone?.ddd)
// console.log(user?.brothers?.length)
// console.log(user.brothers?.[5].name)


// Operador de Coalescência Nula ??
// const a = 0 // false
// const b = null // false
// const c = "Teste" // true
// console.log(a || b || c) // Teste
// console.log(a ?? b ?? c) // 0
// -----
// let a = 0
// let b = a || 42
// console.log({ a, b }) // 0 42
// b = a ?? 42
// console.log({ a, b }) // 0 0