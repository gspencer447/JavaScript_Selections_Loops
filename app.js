console.log("Hello World!\n==========\n");

// Exercise 1 Section
for (let i = 1; i <= 100; i++){
    if (i % 2 === 1){
        console.log(i)
    }
}

// Exercise 2 Section
for (let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log([i] + "FIZZBUZZ")
    } else if (i % 3 === 0){
        console.log([i] + "FIZZ")
    } else if (i % 5 === 0) {
        console.log([i] + "BUZZ")
    }
}

//Exercise 3 Section
////while loops

// let i = 1;
// while (i <= 100){
//     if (i % 2 === 1){
//         console.log(i);
//     }
//     i++;
// }

// let i = 1;
// while (i <= 100){
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log(i + "FIZZBUZZ")
//     } else if ([i] % 3 === 0){
//         console.log(i + "FIZZ")
//     } else if ([i] % 5 === 0){
//         console.log(i + "BUZZ")
//     }
//     i++;
// }

////do-while loops
// let i = 1;
// do {
//     if (i % 2 === 1){
//         console.log(i);
//     }
//     i++;
// } while (i <= 100);

// let i = 1;
// do {
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log(i + "FIZZBUZZ")
//     } else if (i % 3 === 0){
//         console.log(i + "FIZZ")
//     } else if (i % 5 === 0){
//         console.log(i + "BUZZ")
//     }
//     i++;
// } while (i <= 100);

//Exercise 4 Section
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let i = 0; i <= n; i++){
    if (i === value){
        console.log(i + "Found value!")
        break;
    } else {
        console.log("Did not find value")
    }
}
