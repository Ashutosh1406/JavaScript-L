

// function myname(){

//     let server = 8080;
//     console.log("ashutosh");
//     console.log("mishra");
//     console.log("hello");
//     console.log("from");
//     console.log("the");
//     console.log(`${server}`);
//     console.log("--");
// }

// myname()  - myname is reference and () is execution of that

function addTwoNumbers(num1,num2){   //(num1,num2) num1 and num2 are parameters
    console.log(num1+num2);
}

function addTwoNumbers(num1,num2){   //(num1,num2) num1 and num2 are parameters
    // let result = num1 + num2;  
    // return result;
    return (num1 + num2);
}
// addTwoNumbers() // prints NaN as no arguments are passed to the function
const result = addTwoNumbers(6,8); //print statement for (6,8) with proper data type conversion.
                    //where (6,8) are known as arguements or value

// console.log("result",result);

function loginUserMessage(username = "sam"){ //sam is default when nothing is entered so then if wont be ever executed just beacuse username wont ever be ""/unndefined
    if(!username){  //"" treated as false by default
        console.log("please enter username");
        return
    }
    // return `${username} just logged in`
}

//console.log(loginUserMessage("Ashutosh")); //prints Ashutosh just logged in 
//console.log(loginUserMessage());           //prints undefined just logged in


/* TILL NOW FIXED PARAMETERS ENDS */


/* UN-DETERMINISTIC PARAMETERS or "N" parameters */

// USE CASE "shopping cart" //

function calculateCartPrice(price1,price2,...prices){ //rest and spread operator name depend on use case 
                                        // rest operator here
    return prices;
}

// console.log(calculateCartPrice(200,400,800,1000)); //prints an array 


// Object Handling with function

const user = { //object creation or class in cpp
    username:"ashutosh",
    price:200
};

function handleObject(anyObject){  //function to "parse/print" object values
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);

const schema = {
    username:"ashutosh",
    email:"ashutosh@mymail.com",
    schemaPrimary:{ // ":" is identifier
        password:"my_password_1234"
    },
    schemaSecondary:{
        address:"home101"
    }
};

function handleObj2(parser){ //parser will reference schema "&copy()" and do the thing
console.log(`username is ${parser.username} and email is ${parser.email} moreover password is ${parser.schemaPrimary.password} and home is ${parser.schemaSecondary.address}`);
}

handleObj2(schema);


// const schema = {
//     const primary = {
//         username:"ashutosh"
//     },
//     const secondary = {
//         email:"ash@ytmail.com"
//     }
// };

// function handleSchema(Schemagetter.obj){
//     console.log(`username is ${Schemagetter.primary.username} and email is ${Schemagetter.secondary.email}`);
// }










