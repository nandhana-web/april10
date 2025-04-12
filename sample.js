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

let x= console.log(array[4]());


let obj= {
    name: "nandhana",
    add: (num1=0, num2=0) => {
        console.log(num1,num2);
        let sum = num1 +num2;
        console.log("sum :",sum);
    }
}
obj.add(34,60)

class Person {
    name;
    age; 

 constructor(name, age) {
    this.name = name
    this.age = age
}
introduce(){
    return `Hello, my name is ${this.name}and i am ${this.age} years old` ;
}
}

let person1 = new Person("Nandhana", 20)
let person2 = new Person("Alice", 30)
let result1 = person1.introduce()
let result2= person2.introduce()
console.log(result1);
console.log(result);

class Rectangle {

    constructor(width, height) {
        this.width = width
        this.height = height
    }

    area() {
        let abc = this.width * this.height
        return abc;
    }
    perimeter() {
        let ab = (2*(this.width + this.height))
        return ab;
    }

    
}
let rectangle = new Rectangle(10,5)
let result1 = rectangle.area()
console.log(result1)
let result2 = rectangle.perimeter()
console.log(result2);*/

class BankAccount {

    accountHolder;
    balance;

    constructor(accountHolder, balance) {
        this.accountHolder = accountHolder
        this.balance = balance

    }

    deposit(amount) {

        this.balance = this.balance + amount;
        return 'amount added suucessfully'

    }

    withDraw(amount) {
        this.balance = this.balance - amount;
    }

    getBalance() {
        return `accountHolder : ${this.accountHolder}\n balanceAmount : ${this.balance}`;
    }

    
}

let account1 = new BankAccount('john', 0)

let account2 = new BankAccount('amal', 0)

account1.deposit(100)
console.log(account1.getBalance());
account1.deposit(2000)
console.log(account1.getBalance());
account1.withDraw(500)
console.log(account1.getBalance());


console.log(account2.getBalance());






