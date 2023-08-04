/*
console.log('Hello');
console.log('My name is Md. Imran Nazir.');
var object = {Name: "Imran Nazir",
              Age: 25,
              Sex: "Male",
              City: "Pabna"    
            }
console.log(object.Name, object.Age, object.City, object.Sex)
*/

/*

function grade(marks){
    let rslt="";
    switch(true){
        case (marks>=80 && marks<=100):
            rslt = "A+";
            break;
        case (marks>=75 && marks<=79):
            rslt = "A";
            break;
        case (marks>=70 && marks<=74):
            rslt = "A-";
            break;
        case (marks>=65 && marks<=69):
            rslt = "B+";
            break;
        case (marks>=60 && marks<=64):
            rslt = "B";
            break;
        case (marks>=55 && marks<=59):
            rslt = "B-";
            break;
        case (marks>=50 && marks<=54):
            rslt = "C+";
            break;
        case (marks>=45 && marks<=49):
            rslt = "C";
            break;
        case (marks>=40 && marks<=44):
            rslt = "D";
            break;
        default:
            rslt = "F";
    }
    console.log("Your grade is: "+rslt);
}
var mark = 40;
grade(mark);
*/
/*
for(let i=0; i<10; i++){
    console.log("<button>submit</button>")
}
*/


/*
Problem 3 in codemama
function main (input) {
    
    let [n1, n2, n3] = input.trim().split(" ");
    let n11 = parseInt(n1);
    let n22 = parseInt(n2);
    let n33 = parseInt(n3);
    if(n11 < n22 && n11 < n33){
        console.log(n11);
    }
    else if(n22 < n11 && n22 < n33){
        console.log(n22);
    }
    else{
        console.log(n33);
    }
}
*/

/*
Write a program to check if there is a vowel in a string.

function main (input) {
   let word = input.toLowerCase();
   let vowels = new Set(['a','e','i','o','u']);
   let x = 0;
   for(let i=0; i<word.length; i++){
    if(vowels.has(word[i])){
        x = 1;
        break;
    }
   } 
   if(x == 1){
    console.log('The string contains a vowel.');
   }
   else{
    console.log('The string does not contain any vowel.');
   }
}


function main (input) {
    const [num1, num2, num3, num4] = input.trim().split(" ");
    n1 = parseInt(num1);
    n2 = parseInt(num2);
    n3 = parseInt(num3);
    n4 = parseInt(num4);
    var result = Math.sqrt(Math.pow(n1-n3)+Math.pow(n2-n4));
    const rslt = result.toFixed(2);
    console.log('Distance: '+rslt);
    
}
*/
/*
let company={
    name: "Imran's IT hub ❤",
    starting: "From today",
    employee: 1000,
    pc: 950,
    address:{
        Village: "Gokulnagor",
        Union: "Majpara",
        Upzilla: "Atghoria",
        Zilla: "Pabna"
    },
    number:{
        empl_1: "01797623634",
        empl_2: "01875601130",
        empl_3: "01785738411"
    }
}

//console.log("My company name is: "+company.name+"\nMy employ's address are: "+company.address);
let companyInfo = `My company name is: ${company.name} \nMy company address are: ${company.address}`
console.log(companyInfo)
console.log(company.address)
for(var item in company){
    console.log(company[item])
}
*/

/*
var arr = [23, 23, 45, 65, 78]
var result = arr.filter(function(item){
    return item>50
})
console.log(result)
*/

/*
var arr = [23, 23, 45, 65, 78]
var rsl = arr.findIndex(x=>x>25)
console.log(rsl);*/
/*
var arr = [23, 23, 45, 65, 78]
var rl = arr.forEach(function(item){
    console.log(item)
})*/

/*
var arr = [12, 23, 34 , 45, 56, 67, 78,89,90]
var rslt = arr.includes(21)
console.log(rslt)*/
/*
var arr = [12, 23, 34 , 45, 56, 67, 78,89,90]
var rslt = arr.indexOf(90) +1
console.log(rslt)*/
/*
var arr = [90,89,78,56,34,12,23,34,55,66]
var rslt = arr.slice(1,5)
console.log(rslt)*/
/*
var arr = [90,89,78,56,34,12,23,34,55,66]
//var rslt = arr.splice(1,5) //remove
var rsly = arr.splice(5,0,1) //add
console.log(arr)*/
/*
var country1 = `Bangladesh`
var country2 = `Pakistan`
//var rslt = country1.charAt(3);
var rslt = country1.concat(country2)
console.log(rslt);*/
/*
var country1 = `Bangladesh`
var rslt = country1.lastIndexOf(`a`);
console.log(rslt);*/
/*
var country1 = `Bangladesh`
var rslt = country1.replace(`desh`,`rNobab`); //output: BanglarNobab
console.log(rslt);*/
/*
var country1 = `Bangladesh`
var rslt = country1.substr(6,4); substr(start_index, rest_length)
console.log(rslt);//output: desh*/
/*
var country1 = `Bangladesh`
var rslt = country1.substring(6,10); //substr(start_index, total_length)
console.log(rslt);//output: desh*/
/*
var country1 = `Bangladesh `
var rslt = country1.trim().length;
console.log(rslt);//output: desh*/
/*
var day = [10,20,30,40,50,60]
var rslt = Math.random()
console.log(rslt);//output: desh*/
/*
valid----------
function main (input) {
    const [num1, num2, num3, num4] = input.trim().split(" ");
    n1 = parseInt(num1);
    n2 = parseInt(num2);
    n3 = parseInt(num3);
    n4 = parseInt(num4);
    var result = Math.sqrt(Math.pow(n1-n3)+Math.pow(n2-n4));
    const rslt = result.toFixed(2);
    console.log('Distance: '+rslt);
    
}*/
/*
valid----------
const array = input.trim().split(/\s+/).map(Number)
    const dist = Math.sqrt(Math.pow((array[0]-array[2]),2) + Math.pow((array[1]-array[3]),2))
    console.log(`Distance: ${dist.toFixed(2)}`)*/



