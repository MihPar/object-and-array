/**********************************{D: 1, E: 2, F: 1, A: 1, U: 1}**********************/

const str = ('Default  text').toUpperCase()
const obj = {}
for (let char of str) {
    if (obj[char]) {
        obj[char] += 1
    } else {
        obj[char] = 1
    }
}
console.log(obj)
const errors = {w: 1, b: 1}

/*
 'D' 'f', 's', 'e'
*/ 


/****************[['D', 1], ['E', 2], ['F', 1], ['A', 1], ['U', 1]]******************/

// const arr = []
// for (const char of str) {
//     const i = findIndex(char) 
//     if (i === undefined) {
//         arr.push([char, 1])
//     } else {  
//         arr[i][1] += 1
//     }
// }
// console.log(arr)



/**********************['D', 1, 'E', 2, 'F', 1, 'A', 1, 'U', 1]******************/


// for (const char of str) {
//     const i = findIndex(char)
//     if (i === undefined) {
//         arr.push(char, 1)
//     } else {  
//         arr[i][1] += 1
//     }
// }
// console.log(arr)


// function findIndex(char) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i][0] === char) {
//             return i
//         }
//     }
// }

/********************** findIndex ******************/


// const arr = [['D', 1], ['E', 2], ['F', 1], ['A', 1], ['U', 1]]

// function findIndex(char) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i][0] === char) {
//             return i
//         }
//     }
// }
// console.log(findIndex('D'))

