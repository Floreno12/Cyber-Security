// var MyFan = function (){
//     var any = 200;
//     return function (){
//         return any;
//     }
// }

// var Con = MyFan();


// var Infun = function (){
//     var any = 400;
//     console.log(Con());
// }

// Infun();




// var Counter = (function(){
//     var count = 0;
//     return function (any){
//         count = any !== undefined ? any : count;//if paremeter are not undefind the paramiter will add into count  in othe case we still work with variable count
//         return count++;
//     }
// })();


// console.log(Counter());
// console.log(Counter());
// console.log(Counter(100000));
// console.log(Counter());


var cal = function(val){
    cal.count = val !== undefined ? val : count;
    return cal.count++;
}



var sole = cal.count = 0;



console.log(sole);
console.log(sole);
console.log(sole);



