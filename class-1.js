console.log('Hello');
console.log('My name is Md. Imran Nazir.');
var object = {Name: "Imran Nazir",
              Age: 25,
              Sex: "Male",
              City: "Pabna"    
            }
console.log(object.Name, object.Age, object.City, object.Sex)

function grade(marks){
    let rslt=0;
    switch(marks){
        case(marks>=80 && marks<=100):
            rslt = "A+";
            break;
        case(marks>=75 && marks<=79):
            rslt = "A";
            break;
        case(marks>=70 && marks<=74):
            rslt = "A-";
            break;
        case(marks>=65 && marks<=79):
            rslt = "B+";
            break;
        case(marks>=60 && marks<=69):
            rslt = "B";
            break;
        case(marks>=55 && marks<=59):
            rslt = "B-";
            break;
        case(marks>=50 && marks<=54):
            rslt = "C+";
            break;
        case(marks>=45 && marks<=49):
            rslt = "C";
            break;
        case(marks>=40 && marks<=44):
            rslt = "D";
            break;
        default:
            rslt = "F";
    }
    console.log("Your grade is: "+rslt);
}
grade(55);