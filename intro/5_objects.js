//JS objects are always in key value pair

let obj = {} // this is how we declare objects

let person = {
    name : 'Ashwani',
    age : 24,
    gender : 'male',
    phone : 8365689764,
    reader : true
}

let cars = {
    name : 'Mahindra Thar',
    price : 1500000,
    max_speed : '240 km/h',
    color : 'red and black'
}


// Mr Stark - Avengers

let mrStark = {
    name : 'Tony Stark',
    knownAs : 'IronMan',
    about : [
        'Genius',
        'Billionaire',
        'Playboy',
        'Philanthropist'
    ],
    fatherOf : [
        'Ultron',
        'Morgan Stark'
    ],
    Address : {
        city : 'Melibo',
        state : 'California'
    },
    owner : 'Stark Industries',

    isAvenger : true,

    lastMessage : function(){
        console.log('I Love you 3000')

    }
}


// dot notation
console.log(mrStark.owner),
console.log(mrStark.name),

// Bracket Notation
console.log(mrStark.knownAs)