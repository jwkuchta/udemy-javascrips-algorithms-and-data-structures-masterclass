// eliminate half of the eliminated elements but the data has to be sorted

let states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

// BINARY SEARCH PSEUDOCODE

// accepts a sorted array (let's assume numbers for this exercise)
// create left pointer and right pointer
// while the left come before the right, loop and pick the middle
// if element === middle, return index
// if the value is too small, move the left pointer up
// if the value is too large, move the right pointer down
// if you don't find a value, return -1