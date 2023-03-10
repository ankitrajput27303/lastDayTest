// @1=>
var a = ["Ram", "kumar", 18, "India"];   // Array.
// array me value index me store hoti hai 

var a = {
    firstName: "Ram",
    lastName: "Kumar",
    age: 18,
    country: "India",
};
// firstName - proparty.
// Ram  - value.
// object me firstName, age ye - index hai / peoperties.
// object ke under ham array v bana skte hai,
// object ke under ham bahut sare function v bana skte hai. jinhe ham method kahate hai.

var a = {
    fname: 'Ankit',
    lname: 'Rajput',
    age: 23,
    email: 'ankitrajput@gmail.com',
    favMovies: ["Dhoom", "Sholay", "Hum"],
    living: {
        city: "Indore",
        country: "India",
    },
    salary: function() {
        return 25000;
    },
    fullname: function() {
        return this.fname + " " + this.lname;
    }
};
console.log(a);
console.log(a.fname); // object ki properties ki value print ki..
console.log(a.favMovies);
console.log(a.favMovies[1]); 
console.log(a.fullname()); 
console.log(a.living.city); 


// @2=>
var person = new Object();
person.firstName = 'Ram';
person.lastName = 'Kumar';
person.age = 25;
console.log(person);
console.log(person['firstName']);


