// @1=>

// .toString() -> ek array ko string me convort kar deta hai..
// let num = [1, 2, 3, 4, 5];
// let b = num.toString()    // b is now a string
// console.log(b);
// yah return karega ek string


// .join() -> join all the array element using a spreta.
// let num = [1, 2, 3, 4, 5];
// let b = num.toString()    // b is now a string
// console.log(b);
// let c = num.join(" ankit ");
// console.log(c);
// // yah return karega ek string 


// .pop() -> array ka last element ko remove kar deta hai.
// Orignal array ko update kar deta hai.->
// same array ko change krta hai new array return nahi karta hai
// or yah return krta hai pop element ko 
// let num = [1, 2, 3, 4, 5];
// // num.pop();
// // console.log(num);

// let r = num.pop();
// console.log(num, r);  // pop return the popped element - 5


// .push() -> array ke last me element add karna.
// modifid karega origanal karega array ko
// or return karega new array ki length 
// let num = [1, 2, 3, 4, 5];
// let r = num.push(65);    // jo v push krna hai usko dalna padega.
// console.log(num, r);


// .shift() -> remove karega first element ko.
// or usko hi return kar dega 
// modifid karega origanal karega array ko
// let num = [1, 2, 3, 4, 5];
// let r = num.shift();
// console.log(num, r);



// unshift() -> add kar dega element ko array ke start me.
// or return karega new array ki length 
// let num = [1, 2, 3, 4, 5];
// let r = num.unshift(99);
// console.log(r, num);


// @2=>

// .length() -> array ki length dega = 5
// let num = [1, 2, 3, 4, 5];
// console.log(num.length);


// .splice() -> do peramiter pass hote hai
// first batata hai kom si position se hatana hai 
// second batata hai ki kitne hatata hai.
// let num = [1, 2, 3, 4, 5];
// num.splice(1, 1);     // ek hi hatega or bo => 2


// empty -> 2 tarike hote hai array ko empty karne ke.
num = [];   // first
num.length = 0;   //second


// .indexOf() -> array ke elemenet ki position pata karne ke liye.
// let num = [1, 2, 3, 4, 5];
// let position = num.indexOf(2);
// console.log(num);


// String ->  String hota hai array of charecter


// Array.isArray -> batata hai ki array hai ki nahi true ya false batata hai.
// let book = "Math";
// console.log(Array.isArray(book));   // false

// let book = ["math", "ankit", "deep", "ved"];
// console.log(Array.isArray(book));      // true


// .split() -> string ko array banane ke liye split ka use karte hai.
// string ko alg alg element me store karne ke liye 
// split mtlb hota hai ki todna 
let text = "This is a random text";
let wordarray = text.split(' ') 
// (' ') ek peramitar dete hai -> (' ') space dete hai 
// -> jaha par v aap ko space mila hai baha par split kar do alg alg kar do.
// console.log(wordarray);     // ek array ban jyga


// .concat() ->  do array ko join karne ke liye.
// let book = ["Math", "Science", "Bio"];
// let book2 = ["Hindi", "English"];
// let NewBook = book.concat(book2);
// console.log(NewBook);

// let book = ["Math", "Science", "Bio"];
// let book2 = ["Hindi", "English"];
// let book3 = ["Punjabi"];
// let NewBook = book.concat(book2, book3);
// console.log(NewBook);


// Array ke under Array Store -> multi dimensional array kahate hai.
let bookWithPages = [
    ["Math", "300"],   // 0 -> eske under ke array ko v 0 and 1 mila..
    ["Physics", "500"],  // 1  -> same
    ["Bio", "400"]    // 2   --> same
];
let fetch = bookWithPages[1][0];
// console.log(fetch);


// Normal Loop -> 
// let book = ["Math", "Physics", "Bio"];
// let bookLength = book.length;
// for(i = 0; i < bookLength; i++) {
//     console.log(`Element ${i} is ${book[i]} \n`);
// }


