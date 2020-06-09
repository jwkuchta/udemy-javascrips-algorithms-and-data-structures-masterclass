let states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

// best way to find a particular state?
// one way is to check one by one, which is not bad, but there are better ways

// what if it is an unsorted list? We have to check one by one - LINEAR SEARCH
// indexOf, includes, find, findIndex are all linear search algorithms

// returns an index at which the value exists
const linearSearch = (array, value) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i
        } 
    }
    return -1
}

// same result, newer syntax
const linearSearch2 = (array, value) => {
    for (let element of array) {
        if (element === value) {
            return array.indexOf(element)
        }
    }
    return -1
}