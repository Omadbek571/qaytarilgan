// Destructuring assignment ga oid vazifa

// 1-savol

// const info = ["Ali", 30, "Toshkent"];

// const [name, age, city] = info

// console.log(name);
// console.log(age);
// console.log(city);

// 2-savol

// const colors = ["red", "green", "blue", "yellow", "purple"];

// const [qizil, yashil, ...qolganlari] = colors

// console.log(qizil);
// console.log(yashil);
// console.log(qolganlari);

// 3-savol
// const result = firstAndLast([10, 20, 30, 40]);

// function firstAndLast(arr) {
//     const [on, , , qiriq] = arr

//     return [on, qiriq]
// }

// console.log(result); // [10, 40]

// 4-savol

// const numbers = [1, 2, 3, 4, 5, 6];

// const [, ikki, ,, besh, ,] = numbers

// console.log([ikki, besh]);


// #### **2. Object Destructuring:**

// 1-savol

// const book = {
//     title: "JavaScript for Beginners",
//     author: "John Doe",
//     year: 2021
//   };

// const {title, author} = book;

// console.log(title, author);

// 2-savol

// const location = {
//     city: "Toshkent",
//     coordinates: {
//         latitude: 41.2995,
//         longitude: 69.2401
//     }
// };

// const {coordinates: {latitude, longitude}} = location
// console.log(latitude);
// console.log(longitude);


// 3-savol

// const person = {
//     firstName: "Ali",
//     lastName: "Valiyev",
//     age: 28
//   };

//   const { firstName: fName, lastName: lName } = person;

//   console.log(fName); 
//   console.log(lName);


// 4-savol

// const settings = {
//     theme: undefined,
//     language: "uz"
// };

// const {theme = "white", language = "ru"} = settings

// console.log(theme);
// console.log(language);


// #### **3. Qo'shimcha Mashqlar:**

// 1-savol

// function configure(options) {
//     const { host = "localhost", port = 8080, protocol = "http" } = options;
//     console.log(`Connecting to ${protocol}://${host}:${port}`);
//   }

//   configure({ host: "127.0.0.1" });


// 2-savol

// let arr1 = [1, 2, 3]
// let arr2 = [4, 5, 6]

// function add(arr1, arr2) {
//     return [...arr1, ...arr2]
// }

// let natija = add(arr1, arr2)
// console.log(natija);


// Masalalar. ESLATMA masalalarni har uch turdagi funksiyalar yordamida ishlansin. Jami 30 ta funksiya yuklanadi


// 1-savol

// reguler func

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function func(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 1) {
//             sum+= arr[i]
//         }

//     }

//     return sum
// }

// let natija = func(arr)
// console.log(natija);


// arrow func

// const func = arr => arr.reduce((sum, num) => num % 2 === 1 ? sum + num : sum, 0);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let natija = func(arr);
// console.log(natija);


// exipretion func

// const func = function(arr) {
//     return arr.reduce(function(sum, num) {
//       return num % 2 === 1 ? sum + num : sum;
//     }, 0);
//   };

//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   let natija = func(arr);
//   console.log(natija);


// 2-savol

// reguler func

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function func(arr) {
//     let newArr = arr[0]

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < newArr) {
//             newArr = arr[i]
//         }

//     }

//     return newArr
// }

// let natija = func(arr)
// console.log(natija);



// exispretion func

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const findMin = function(arr) {
//     let newArr = arr[0];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < newArr) {
//             newArr = arr[i];
//         }
//     }

//     return newArr;
// };

// let natija = findMin(arr);
// console.log(natija);


// arrow func
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const findMin = arr => {
//     let newArr = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < newArr) {
//             newArr = arr[i];
//         }
//     }

//     return newArr;
// };

// let natija = findMin(arr);
// console.log(natija);

// 3-savol

// reguler func

// let str = "salom12"
// let arr = str.split("")

// function func(arr) {
//     let newArr = []

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             newArr.push(arr[i])
//         }

//     }


//     return newArr.join("")

// }

// let natija = func(arr)
// console.log(natija);


// arrow




// let str = "salom12";
// let arr = str.split("");

// const func = arr => {
//     let newArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > '0' && arr[i] <= '9') {
//             newArr.push(arr[i]);
//         }
//     }

//     return newArr.join("");
// };

// let natija = func(arr);
// console.log(natija);


// exispress

// let str = "salom12"
// let arr = str.split("")

// let func = function (arr) {
//     let newArr = []

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             newArr.push(arr[i])
//         }

//     }


//     return newArr.join("")

// }

// let natija = func(arr)
// console.log(natija);


// 4-savol

// reguler func

// function func(arg) {
//     let res =  arg ** 2;

//     return res
// }

// console.log(func(5));

// exispretion func

// let func = function (arg) {
//     let res =  arg ** 2;

//     return res
// }

// console.log(func(5));


// arrow func

// let func = arg => arg ** 2;
// console.log(func(5));


// 5-savol

// reguler func

// let str = "salom"

// function func(str) {
//     let res = str.split("").reverse().join("");
//     return res
// }

// let natija = func(str)
// console.log(natija);



// exispretion func


// let str = "salom";
// let func = function (str) {
//     let res = str.split("").reverse().join("");
//     return res
// }    
// let natija = func(str)   
// console.log(natija);



// arrow func


// let str = "salom";
// let func = str => str.split("").reverse().join("");
// let natija = func(str)
// console.log(natija);


// 6-savol

// reguler func

// ??

// 7-savol

// reguler func

// const numberArray = [1, 2, 3, 4, 5];

// function func(numbers) {
//     return numbers.map(number => number ** 3);
// }

// const cubes = func(numberArray);
// console.log(cubes);


// express func

// const numberArray = [1, 2, 3, 4, 5];


// const func = function (numbers) {
//     return numbers.map(number => number ** 3);
// }

// const cubes = func(numberArray);
// console.log(cubes);


// arrow func


// const numberArray = [1, 2, 3, 4, 5];
// const func = numbers => numbers.map(number => number ** 3);
// const cubes = func(numberArray);
// console.log(cubes);


// 8-savol

// reguler func

// let str = "salom";
// let arr = str.split("");

// function func(arr) {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == "A" || arr[i] == "a"||arr[i] == "U"||arr[i] == "u"||arr[i] == "E"||arr[i] == "e"||arr[i] == "O"||arr[i] == "o"||arr[i] == "I"||arr[i] == "i") {
//             newArr.push(arr[i])
//         }
        
//     }

//     return newArr.reverse()
// }

// let natija = func(arr)
// console.log(natija);

// exispretion func

// let str = "salom";
// let arr = str.split("");

// let func =function (arr) {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == "A" || arr[i] == "a"||arr[i] == "U"||arr[i] == "u"||arr[i] == "E"||arr[i] == "e"||arr[i] == "O"||arr[i] == "o"||arr[i] == "I"||arr[i] == "i") {
//             newArr.push(arr[i])
//         }
        
//     }

//     return newArr.reverse()
// }

// let natija = func(arr)
// console.log(natija);


// arrow func

// let str = "salom";
// let arr = str.split("");

// const func = arr => arr.filter(char => "AEIOUaeiou".includes(char)).reverse();

// let natija = func(arr);
// console.log(natija);


// 9-savol

// reguler func

// function func(numbers) {
//     if (numbers.length === 0) return 0;

//     const sum = numbers.reduce((acc, num) => acc + num, 0);
    
//     return sum / numbers.length;
// }

// const numberArray = [1, 2, 3, 4, 5];
// const average = func(numberArray);
// console.log(average); 


// exispretion func

// let func =function (numbers) {
//         if (numbers.length === 0) return 0;
    
//         const sum = numbers.reduce((acc, num) => acc + num, 0);
        
//         return sum / numbers.length;
//     }
    
//     const numberArray = [1, 2, 3, 4, 5];
//     const average = func(numberArray);
//     console.log(average); 


// arrow func


// const numberArray = [1, 2, 3, 4, 5];
// const func = numbers => numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
// const average = func(numberArray);
// console.log(average);

// 10-savol

// reguler func

// let str = "salom";

// function func(str) {
//     let arr = str.replaceAll("sal", "")
//     return arr
// }

// let natija = func(str)
// console.log(natija);


// exispretion func

// let str = "salom";

// let func =function (str) {
//     let arr = str.replaceAll("sal", "")
//     return arr
// }

// let natija = func(str)
// console.log(natija);


// arrow func


// let str = "salom";

// const func = str => str.replaceAll("sal", "");

// let natija = func(str)
// console.log(natija);



















































































