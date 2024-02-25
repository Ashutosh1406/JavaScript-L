// const name1 = "ashutosh";
// let name2 = "ashutosh";
// var name3 = "ashutosh";

// if(true)
// {
//     let new_name = ("_" + name2);
//     console.log(new_name);
// }
// console.log(new_name);

// function one(){
//     const username = "hitesh"

//     function two(){
//        // const website = "youTube"
//         console.log(username);
//       // return website
//     } 
//     two();
// }
// one()


// console.log(one(5));
// function one(num){
//     return num+1;
// }

function calc(iterator)
{
    let sum = 0;
    //let count = 0;

    for(let i=0;i<iterator.length;i++)
    {
        if(i%2==0){ //for even
            sum += iterator[i];
        }
        else continue;
    }
    return sum;
}

let NumberArray = [];
for(let i=0;i<10;i++)
{
    NumberArray.push(i);
}

let even_index_sum = calc(NumberArray);

console.log("Average of even indexes is :",even_index_sum);



// const ans = function(num){
//     //toString(num);
//     return (num + 1).toString();
// }

// const res = ans(99);
// console.log(res);
// console.log(typeof(res));
//console.log(typeof(ans));
//console.log(typeof(new_no));
//console.log(ans(99));

// console.log(one(99));
// console.log(one(5));
