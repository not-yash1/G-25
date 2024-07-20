
// Q1: What will be the output of the given code and why ?

console.log(foo);
var foo = "bar";

console.log(baz);

var baz = function() {
    console.log("Hello");
    // return 10;
};

function qux() {
    console.log("Hi");
}
qux();





// // Q2: What will be the output of the given code and why ?

// var x = 20;
// let y = 5;
// foo();
// function foo(){
//     let x = 6
//     var y = 16
//     var z = 28
//     function bar(){
//         console.log(x)
//         console.log(y)
//         var z = 15
//         var y = 55;
//         (function boo(){
//             console.log(z)
//             (function bar(){
//                 console.log(x)
//                 var x = 10
//                 return 99
//             }())
//         })()
//     }
//     bar()
// }






// // Q3: What will be the output of the given code and why ?

// var c = 10;
// var d = 20;

// var bar = function() {
//     console.log(c); 
//     console.log(d); 
//     foo();
// };

// var bar = function() {
//     console.log(d); 
//     console.log(c); 
//     return 0;
// };

// function foo(){
//     console.log(c)
//     var c = 20;
//     var w = bar();
//     var bar = function() {
//         console.log(c); 
//         console.log(d);
//         console.log(a);
//         var a = 65
//     }
// }


// (function foo() {
//     var a = 20;
//     console.log(c);
//     console.log(d); 
//     bar();
// })();