const Player={};
Player.name='Abu Al Shahriar Rifat'
console.log(Player);
Player.specity='batman';
Player.bat=function(){
    console.log('I am  working as a software Engineer');
}
console.log(Player);
Player.bat();

const studentIs={
    name:"Abu Al Shahriar Rifat",
    Job:"Software Engineer",
    ball:function(){
      console.log('I am throwing a  ball');
    },
    salary:10000
}
 
const person=new Object({
 name:"Shahriar"
});
console.log(person)

const atel1=Object.create(studentIs);
console.log(atel1.name);
const atel_2=Object.create(studentIs);
console.log(atel_2.Job)

//
class Person{
     fullNamde="Abu Al Shahriar Rifat";
     address='Sarishabari';
     constructor(age){
        this.age=age
     }
}
const person__2=new Person(25);
console.log(person__2.age);
console.log(person__2.fullNamde);

//using function to create  a object
function Car(model,price){
    this.model=model;
    this.price=price;
}

const tesla=new Car();
tesla.model="636sf";
tesla.price='1cr';
console.log(tesla.model,tesla.price);


const student1={
    name:"Kodom Ali",
    money:5000,
    study:"Math",
    subjects:['Calculus','Alzebra','Geometry'],
    TakeExam:function(){
        console.log(this.name ,"is participating in a exam");
    },
    MyFullName:function(){
    return this.subjects +`is Hard`;
    },
    improveExam:function(){
        this.MyFullName();
        return `${this.name} is  giving improvemnt Exam and subjecst_are ${this.subjects}`
    },
    treatDay:function(amount,tip_s){
     this.money=this.money-amount-tip_s;
     return this.money
    }
}

const all=student1.money;
console.log(all)
student1.TakeExam();
const all_is=student1.MyFullName();
console.log(all_is)

const improv=student1.improveExam();
console.log(improv)

const existingMoney=student1.treatDay(900);
console.log(existingMoney);

const DolaRemainign=student1.treatDay(1000);
console.log(DolaRemainign);

const TotalIs=student1.treatDay(1000,100);
console.log(TotalIs);


const boottle={
    color:"yellow",
    price:50,
    isCleaned:true,
    capacity:1
}


const keys=Object.keys(boottle);
console.log(keys);

const Values=Object.values(boottle);
console.log(Values);

const Pair=Object.entries(boottle);
console.log(Pair);
console.log(boottle)
console.log(delete boottle.isCleaned);
console.log(boottle);
Object.seal(boottle);
boottle.price=20000
boottle.height="12 inch"
console.log(delete boottle.color);
Object.freeze(boottle);
console.log(boottle);

const numbers=[12,54,63,3,54];
let sum=0;
for(const n of numbers){
    sum=sum+n;
}
console.log(sum);

const bottle1={
    color:'yellow',
    price:50,
    isCleared:true,
    capacity:1
}

for(const key in bottle1){
    console.log(key);
}

const keyss=Object.keys(bottle1);
console.log(keyss)

for(let key of keyss){
   console.log(key);
}

const studentBio={
  name:'Abu Al Shahriar Rifat',
  Job:"Software Enginnering"
}

for(const [key,value] of Object.entries(studentBio)){
    console.log(key,value);
}

const first={a:2,c:5};
const second={a:2,d:5};


if(first===second)console.log("They are same");
else console.log("Different");

//do not use this
const firstString=JSON.stringify(first);
const secondString=JSON.stringify(second);
console.log(firstString,secondString);
if(firstString===secondString){
    console.log("Same")
}else{
    console.log("Different")
}

function compareObject(first,second){
    const firstKeys=Object.keys(first);
    const secondKeys=Object.keys(second);
    if(firstKeys.length===secondKeys.length){
        for(const key in firstKeys){
            console.log(key);
            if(first[key]===second[key]){
                return false;
            }
        }
        return true;
    }else{
        return false;
    }
}

const is__same=compareObject(first,second);
console.log(is__same);
const kachBadam={
    name:"Kacha badam",
    money:8000,
    myName:function(){
        return this.name;
    }
}
const result1=kachBadam.myName();
const kachaBadam_2={
    Job:'Software Enginnering',
    MyJob:"SWE",
    money:8000
}

const result2=kachBadam.myName.call(kachaBadam_2);
console.log(result2);


const rifat={
    name:"Rifat",
    job:"Software Enginnering"
}
const dataCo=JSON.parse(JSON.stringify(rifat));
console.log(rifat);
console.log(dataCo);

const obj ={a:1, b:7, c:3, length:2};
console.log(Object.keys(obj).length);

const obj1= {module: 35, video:2}; 
const obj2= {module: 35, video:2};
console.log(obj1 === obj2);

const getGirlFriend= (name = "chokina")=>"name"; console.log(getGirlFriend())

function add(a,b){
    return a+b;
}
console.log(add(10,20));
myFullName("Rifat")

function prints(){
    console.log(5);
}
prints();

function myNameIs(){
    console.log("I am Abu Al Shahriar Rifat");
}
myNameIs();
function myFullName(name){
    console.log("My Full Name is",name)
}

function Kitchen(){
    let roast=0;
    return function(){
        roast++;
        return roast;
    }
}
const firstServer=Kitchen();
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());

function stopWatch(){
    let counter=0;
    return function(){
        counter++;
        return counter;
    }
}

const countIs=stopWatch();
console.log(countIs());


function greetings(Person){
    console.log('I am'+Person)
}
greetings("Abu Al Shahriar Rifat");

function my()
{
    const Laptop={
    price:45000,
    brand:'Lenovo',
    memory:'8gb',
}
}


function greeting(gretingHandler,name){
 console.log(gretingHandler(name));
}
const  name={name:"Shahriar",profession:"Software Enginner"}


 function gretingHandler(name){
    console.log('Good Morning',name);
 }
 function greetEvening(name){
    console.log("Good Evening",name)
 }
 function goodNight(name){
    console.log("Good Night",name);
 }
greeting(gretingHandler,'Abu Al Shahriar Rifat');
greeting(gretingHandler,"Karim");
greeting(gretingHandler,'Tom cruise');
greeting(greetEvening,'Rifat');
greeting(greetEvening,"Rifat");
greeting(goodNight,"Abu Al Shahriar Rifat");



function myName(NameHandler,name){
    NameHandler(name);
}

function NameHandler(name){
    console.log("hello",name)
}

myName(NameHandler,"Rifat")
myName(NameHandler,"Rofiq")

function sumIsss(a,b,c){
    const result=a+b+c;
    console.log(arguments);
    const args=[...arguments];
    console.log(args);
    return result;
}
const mysum=sumIsss(10,20,30,70,80);
console.log(mysum);

let num1=5;
let num2=7;
function mul(a,b){
    const result=a*b;
    return result;
}

const output_1=mul(10,20);
console.log(output_1);

let student111={name:"Rifat",partner:"sh"};
let student112={name:"shah",partner:"rifat"};

function makeMovie(couple_1,couple_2){
    couple_1.name="Ononto";
    couple_2.partner="mim";

}
console.log(student111,student112);
makeMovie(student111,student112);
console.log(student111,student112)
console.log(typeof null)

let p='Javascript'; 
let q=p; 
p='React'; 
console.log(q); 

const isTrue='false'; 
if(!isTrue){
console.log('hello');
} else {
console.log('world'); 
}

function sumIs(p, q) {
    p + q;
   }
   const result = sumIs(2, 3);
   console.log(result);

   if ("2" === 2) {
    console.log("Inside if");
   } else {
    console.log("Inside else");
   }

   function work(x, y = 4) {
    return x + y;
   }
   console.log(work(32))
