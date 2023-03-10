// new Date ek Object ban jyga.
// jo ye time aata hai bo apne systam se aata hai. 

// .toDateString() -> 
var now = new Date();
document.write(now);
document.write(now.toDateString());  
// aaj ka din, aaj ka month, aaj ka date, aaj ka year;;


// Get Function => ....

// .getDate() -> 
var now = new Date();
document.write(now.getDate());  // aaj ki date aaygi only.


// .getFullYear() -> 
var now = new Date();
document.write(now.getFullYear());  //  aaj ka year print ho jyga.


// .getMonth() -> 
var now = new Date();
document.write(now.getMonth());   //  aaj ka month print karega - 0 se start hoga month.


// .getDay() -> 
var now = new Date();
document.write(now.getDay());  
// ye hame ek week day return karega aaj ka din print 1 => monday,
// 0 => sunday, 2 => thusday..


var now = new Date('January 5 2010');
document.write(now.getMonth());    // 0 January
document.write(now.getDay());      // 2 thusday
document.write(now.getFullYear());    // 2010


// .getHours() -> 
var now = new Date();
document.write(now.getHours());   


// .getMinutes() ->
var now = new Date();
document.write(now.getMinutes());   


// .getSeconds() -> 
var now = new Date();
document.write(now.getSeconds());


// .getMilliseconds() -> 
var now = new Date();
document.write(now.getMilliseconds());


// past me ham uska Minutes, second, Milliseconds, dekhenge to bo 0 hi dega.
var now = new Date('January 5 2010');


// Set Function => ... 
// aap history ka ya fucter ka koi v date ya full year, month bagera dal ke
// uski date print kar ke dekh skte ho .

// set me bo aaj ka hi sab kuch le kar aage ya piche ka print karega 