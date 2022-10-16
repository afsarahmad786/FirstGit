An 1:

var obj={num:2};


var add=function(a){

    return this.num+a;

}


console.log(add.call(obj,3));


Ans 2:

var obj={num:2};


var add=function(a,b,c){

    return this.num+a+b+c;

}



var arr=[1,2,3];

console.log(add.apply(obj,arr));



Ans 3:

var obj={num:2};


var add=function(a,b,c){

   return this.num+a+b+c;

}


var arr=[1,2,3];

var bound=add.bind(obj);

console.log(bound(1,2,3));



Ans4:

class Student {

 constructor(age) {

   this.age=age

 }


 static age(t) {

   return this.age+t;

 }


}


const obj = new Student(10);


var ages=Student.age.bind(obj)

console.log(ages(0))
