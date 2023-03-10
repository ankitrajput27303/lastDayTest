// @1=>

// .length -> String ki length mil jati hai.
// space ko v count krti hai.
// let name = "Harry";
console.log(name.length);  // name.length ye ek proparty hai
// ye only ek hi charector hai ..->
// -> \n, \t, \r...


// .toUpperCase() -> ye ek function hota hai.
// let name = "Harry";
console.log(name.toUpperCase());   // name.toUpperCase() ye ek function hai.


// .toLowerCase() -> 
// let name = "Harry"; 
console.log(name.toLowerCase());


// String ki index 0 se start hoti hai . 
// .slice() -> string ke tukare karna
// -> do argument leta hai.
// let name = "Harry"; 
console.log(name.splic(2, 4));   // 2 or 3 ko print karega bas..
// 2 se start hoga 2 ko v print karega
// 4 tak jyga but 4 ko print nahi karega.


// jav aap second argument nahi dete ho tab 2 se start or sari string print ho jygi..
console.log(name.splic(2));  // 2 se start 2 print and uske bad all print.


// .replace() -> ek cheez ko dusri cheez se replace kar dega string me .
// let name = "Harry Bhai";
console.log(name.replace("Bhai", "Bro"));
// first ky replace krna hai.
// second kis ko replace krna hai.


// .trim() -> space ho hatane ke liye trim ka use karte hai.
// new string return krta hai 
// let friend = "    Naman      ";
console.log(friend.trim());


// String ke charector ko ham kbhi change nhi kar skte bo immutable hote hai.
fr[4] ="o" //->  This is not possible.

// String kbhi change nahi hogi bo bas new return ho jygi..

// @2=>

// .includes() -> search karne ka kam krta hai
//  - search diye huye word ya charector mil jate hai to true ya false return karega.
// includes function case senstiv function hai 
var str = "JavaScript is a GREAT Language";
var a = str.includes("Greet");  // false
var a = str.includes("GREET");   // true
document.write(a);


// .startsWith() -> app ki string me jo first word hai usko search karne ka kam karta hai.
// mil jyga to true , nahi mila to false print kar dega.
// includes function jesa ye v case senstiv function hai
var str = "JavaScript is a GREAT Language";
var a = str.startsWith("JavaScript");  // true
var a = str.startsWith("Javascript");   // false
var a = str.startsWith("Java");        // true
document.write(a);


// .endsWith() -> app ki string me jo end (last) word hai usko search karne ka kam karta hai.
// mil jyga to true , nahi mila to false print kar dega.
var str = "JavaScript is a GREAT Language";
var a = str.endsWith("Language");  // true
var a = str.endsWith("age");   // true
var a = str.endsWith("age.");        // false
document.write(a);


// .search() -> return me true ya false return nahi krta -
// -> jo ye word exect mil jaye uski possition return karta hai. (index)
var str = "JavaScript is a GREAT Language";
var a = str.search("is");   // 11 run is ka i 11 par start ho rha hai.
var a = str.search("GREAT");  // 16 possition par
var a = str.search("GReat");  // -1 return karega bich me agr koi cheez nahi milegi to.
var a = str.search("bed");   // -1 return krega bed nahi hai to
document.write(a);


// .match() -> string me match karne ka kam karta hai.
// search uski possition return karta hai 
// match same name ka word ya charector bar bar dhundega or jitni bar milega -
// - usko collect karta jyga or uska ek array bana dega.
// g -> mtlb grobali - pure string me bar bar find kare.
var str = "JavaScript is a GREAT is Language";
var a = str.match(/is/g);   // is,is run
document.write(a);


// indexOf() -> search ki tarf kam krta hai index return karega.
// indexOf starting se start karega jo phle mil jyga uska index return kar dega.
var str = "JavaScript is a GREAT is Language";
var a = str.indexOf("is");   // 11 first is ka run
document.write(a);


// .lastIndexOf() -> search ki tarf kam krta hai index return karega.
// lastIndexOf last se start karega jo phle mil jyga uska index return kar dega.
var str = "JavaScript is a GREAT is Language";
var a = str.lastIndexOf("is");   // 22 first is ka run
document.write(a);


// .replace() -> string ko replace karne ke liye.
// es me do peramitar aaynge.
// first es ko replace krna hai,
// second es ko first ki jgh dalna hai.
// ye jo first mi milega usko hi replace karega second ko replace nahi karega.
var str = "JavaScript is a GREAT is Language";
var a = str.replace("JavaScript", "Php");   
document.write(a);

var str = "JavaScript is a GREAT is Language";
var a = str.replace(/is/g, "Php");   // all string me is hai un sab ko replace kar dega. 
document.write(a);


// .charAt() -> es ke under app ek position defind karte hai -
// - or us position par jo v charector hoga usko return kar dega.
// charector us position par nhi hai to kuch v return nahi karega.
var str = "JavaScript is a GREAT is Language";
var a = str.charAt(3);    // a run   
document.write(a);


// .charCodeAt() -> return karte hai ASCII code ya aap in ko ASCII code denge 
// - or ye uske liye koi charector return kar denge.
// A - 65 , a - 97 ...
// index denge or us index par ko charector rakha hoga uska ASCII code de dega.
var str = "JavaScript is a GREAT is Language";
var a = str.charCodeAt(1);    // a ka ASCII code 97 hoga    
document.write(a);

// .fromCharCode() -> 
var a = String.fromCharCode(65);   //  65 ka -> A run hoga.


// .concat() -> string ko add karne ke liye ek ya ek se jyda v add kar skte hai.
// ek argument dete hai - new string return karta hai.
var str = "JavaScript is a GREAT Language";
var str2 = "Hello";
var str3 = "World";
var a = str.concat(str2, str3);
document.write(a);


// .split() -> ye string ko tod ke uske word ko alg alg kar ke usko array me convort krta hai.
// ek array return kar dega.
var str = "JavaScript is a GREAT is Language";
var a = str.split(" ");   // jaha jaha se space aa rhi hai baha baha se split kar de. 
document.write(a);


// .repeat() -> jis v string ko aap es me repeat kar doge..-
// - same string ko 3, 4 ,5 bar repeat kar ke print kar dega
var str = "JavaScript is a GREAT is Language";
var a = str.repeat(5);   
document.write(a);
// jitni bar repeat me likhenge utni bat string repeat hogi.


// .slice() ->  ye array ke slice function ke jesa hi kam karta hai.
// string me se bich me se koi word uthana ho ,
// ya koi charector uthna ho,
// kaha se kaha tak uthna hai to position denge.
// -> es me do peramitar dete hai starting and end
// -> ek hi peramitar de to us peramitar ke bad ki sari string print kar dega Ex-> 3
var str = "JavaScript is a GREAT is Language";
var a = str.slice(3);   
var a = str.slice(3, 7); // 3 se start or 7 tak print
var a = str.slice(0);    // all string print kar dega.
var a = str.slice(-1);  // -1 mtlb last bala charector print karega
document.write(a);


// .substr() -> kuch kuch slice jesa kam krta hai.
var str = "JavaScript is a GREAT is Language";
var a = str.substr(2); // 2 index se le kar puri string print kar dega.
var a = str.substr(2, 5);   // 2 se start karega 5 diya to 2,3,4,5,6  ye 5 charector print kar dega.
document.write(a);

// .substring() -> 
var str = "JavaScript is a GREAT is Language";
var a = str.substring(3,5);  // 3 ko or 4 ko print kar dega 5 ko nahi karega.
document.write(a);


// .toString() -> string me convart kar dega.
var str = 50;
var a = str.toString();   // 5020 run
document.write(a + 20);


// .valueOf() -> jo string me hai usko pura hi print kar dega
var str = "JavaScript is a GREAT is Language";
var a = str.valueOf();    // default function hai
document.write(a);

// @3=>
str = "ankit";
// pasSrart(6, #);  // #ankit output
// pasSrart(6, "rajput");  // rankit 
 

str = "rajput";
// pasEnd(8, #);     // rajput##
// pasEnd(8, ankit)   // rajputan


// @4=>
str = "    ankit     ";
trimStart();   // start ki space remove kar dega

str = "    ankit     ";
trimEnd();    // ends ki space remove kar dega.