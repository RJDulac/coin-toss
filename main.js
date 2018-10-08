var output = document.getElementById("output");

//prompt heads or tails
//turn value into number
//use math random to 0-1
//return back the output if the user is correct or not


var ask = prompt("Heads or Tails?").toLowerCase();
console.log(ask);

var coin = Math.round(Math.random() * 1);
console.log(coin);



if (ask === 'heads' && coin === 1 || ask === "tails" && coin === 0) {
    output.innerText = "You got it right!";
} else if(ask === 'heads' && coin !== 1 || ask === "tails" && coin !== 0) {
    output.innerText = "you got it wrong!";
} else {
    output.innerText = "Type in either heads or tails.";
}





//////////////////////////////cool console stuff
var exampleTable = ["ten", 5, 2.3, "hey"];
var exampleTable2 = ["five",4,3, "yo"];
var exampleTable3 = ["ten", 2.3, 4, "hey"];
console.log("%c Example Table", "color: green; font-weight: bold")
console.table([exampleTable,exampleTable2,exampleTable3]);
var foo = {name: 'tom', age: 30, nervous: false };
var bar = { name: "jimmy", age: 40, nervous: true};
var baz = { name: "jack", age: 50, nervous: true };
//computed property names
console.log("%c Computed Property Names", "color: blue; font-weight: bold")
console.table({ foo, bar, baz })

//how much time loop takes
console.time("looper");

let i = 0;
while (i <1000000) {
    i++
}
console.timeEnd('looper');

//stack trace

const deleteMe = () => console.trace("%c I'm on this line!","color: orange");

deleteMe();


