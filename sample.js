/*let num=function (a,b){
    console.log('summmm');
    return function(c,d){
        console.log("this id from return" , a,b);
        
    }
    
}
let a = console.log(num());

let num = function(a,b){
    console.log('nummm');
    return function(c,d){
        console.log("this is from higher order function",c,d);
        
    }
    
}
num()
let array = [2, 5, 7, "hello", function (a, b) {
    console.log("summm");
    return 0

}]

let x= console.log(array[4]());*/


let obj= {
    name: "nandhana",
    add: function (num1=0, num2=0) {
        console.log(num1,num2);
        let sum = num1 +num2;
        console.log("sum :",sum);
    }
}
obj.add()
