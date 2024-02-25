const user = {
    username : "ashutosh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , Welcome to Website`);
       // console.log(this);
    } //this for local  / current context


}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);

// function chai()
// {   
//     let username = "ashutosh";
//     console.log(this.username);
// }

// chai()

const chai = ()  => {
    let username = "ashutosh"
    console.log(this.username);
}

// chai()

// explicit return 
const addTwoNumbers = (num1,num2) => {
    return num1 + num2;
}

//console.log(addTwoNumbers(5,6));
 console.log(typeof(addTwoNumbers));  //function 

// implicit return
const addThreeNumbers = (num1,num2,num3) => (num1+num2+num3);  //for one liner

console.log(addThreeNumbers(3,4,5));

//implcit return objects
const ObjectReturn = (num1,num2) => ( {username : "ashutosh"} );  //( ) to return implicitly
console.log(ObjectReturn(3,4));

