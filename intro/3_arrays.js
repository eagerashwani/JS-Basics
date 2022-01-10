// Array - Array provides an ordered collection of elements

let arr = []  //array dec
let cars = ['BMW', 'Audi', 'Tesla']
console.log(cars)

let books = ['Chanakya Niti', 'The subtle art', 'Trading in the zone']
console.log(books)

//In JS, Array can store different values of different datatypes

let testArr = ['BMW', true, undefined, 2, 52.58]
console.log(testArr)

//Accessing the elements of array

console.log(books[1]) // The subtle art
console.log(books[0]) // Chanakya Niti
console.log(books[4]) //undefined

// Replacing an element
books[1] = 'Turtle Trader'
console.log(books)

// Adding an element
books[3] = 'Death'
console.log(books)

// books[9] = 'Geeta'
// console.log(books)

// Array Methods
//pop - remove last elements of the array
books.pop()
console.log(books)

//push - add element in the last of the array
books.push('Do Epic Shit')
console.log(books)

//shift and unshift
// shift - remove elements from the 0th index
books.shift()
console.log(books)

//unshift - add element in the 0th index
books.unshift('Market Wizards')
console.log(books)

// Array length property
console.log(books.length)


//2D Array

let matrix = [
    [1 , 2 , 3],
    [4 , 5 ,6 ],
    [7 , 8 , 9],
]

console.log(matrix)


console.log(matrix[1][2])
