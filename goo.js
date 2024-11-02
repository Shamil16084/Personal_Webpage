//     let input = prompt("Enter the elements ");

//     let array = input.split(' ').map(Number);

//     console.log(array)

//     const sum = array.reduce((acc, num) => acc+num,0);

//    console.log(sum);

//    console.log(`Average: ${sum/array.length}`);

//    console.log(`Min element: ${Math.min(...array)}`);
//    console.log(`Max element: ${Math.max(...array)}`);

//    const freq = {};

//    array.forEach(
//     num => {
//         freq[num] = (freq[num] || 0) + 1;
//     }
// );

// console.log(freq);

// let cox=0,az=0,coxi=0,azi=999;

// for(let x in freq){
//     if(freq[x] > cox){
//         cox = freq[x];  // sayi 
//         coxi = x;   // reqemin ozu
//     }


//     if(freq[x] < azi){
//         azi = freq[x];  // sayi 
//         az = x;   // reqemin ozu
//     }
// }


// console.log(` cox reqem: ${coxi} + ne qederdi ${cox}  + az reqem: ${az} + ne qederdi ${azi} `);

// let input = prompt("input:");
// var x = "";
// for(let i=0;i<input.length;i++){
//     x+=input.substring(0,i+1);
// }
// console.log(x)

// let input = prompt("input:");
// sortedString(input);

// function sortedString( str){

// str.split('').sort       

// }




// let arr = [];

// arr.push(1);
// arr.push(1);

// let a;
// let b;
// let c;
// a= 1;
// b= 1; 
// for(let i=2;i<=15;i++){

// c= a+b;  
// console.log(a+b);

// arr[i]=c;
// a=b;
// b=c;

// }


// function(input){
//     if(arr[input]!= -1) return arr[input];

//     return arr[input] = arr[input-1] + arr[input-2];


// }




// let i1= prompt("input 1:");
// let i2= prompt("input 2:");

// i1 = i1.split("").sort().toString();
// i2 = i2.split("").sort().toString();


// console.log(i1);
// console.log(i2);

// const compareValue = i1.localeCompare(i2);
// if(compareValue === 0 ){
//     console.log("Anagram");
// }else{
//     console.log("Nan");
// }


// let input = prompt("Input: ");

// for(let i =0 ;i< input.length;i++){
//     console.log(input.slice(0,i) + "_" + input.slice(i, input.length+1));
// }



// function fib(a ,b){

//     let arr= [];
//     arr[0]=0;
//     arr[1]=1;
//     arr[2]=1;

//     for(let i=3;i<=b;i++){
//         arr[i] = arr[i-1] + arr[i-2];
//         // if(arr[i]>=b) break;
//     }
// let res = [];
//     for(let  i= a;i<=b;i++)
// {
//     res.push(arr[i]);
// }
// return res;
// }

// console.log(fib(3,6));



// function rdm(a,b,n){
//     let arr = [];

//     for(let i=0;i<n;i++){
//         let x = Math.floor(Math.random()*(b-a+1) + a );
//         arr.push(x);
//     }
//     return arr; // Re
// }

// console.log(rdm(12,100,4));
// 
//  function count(arr){
//     let res={};
//         for(let  i=0;i<arr.length;i++){
//             let num = arr[i].toString();
//                 if(num in res){
//                     res[num] +=1;
//                 }else{
//                     res[num] =1;
//                 }
//         }

//         return res;
        
//     }

//     // console.log(count(1,2,3,4,2,3));

//     let ans = count(1,2,3,4,1,2,2,3,5);

// //   console.log(ans);

//    function print(ans){
//     for (const [key, value] of Object.entries(ans)) {
//         console.log(`${key} repeated  ${value} times`);
//       }
      
//    }
// // print(ans);
//    function combine(a,b,n){

//     let arr = rdm(a,b,n);
//     console.log("Generated random numbers:", arr); // Print generated numbers
//     // let dd = arr.split(',');
    
//     // console.log("dd is printed: " + dd);

//     let ans = count(arr); // Count occurrences of each number
//     print(ans); // Print the result
//     //    print(count(rdm(a,b,n)));
//     }

//     combine(1,10,9);
        

// function Person(firstname, lastname, gpa, age, gender){

//     this._firstname = firstname;
  
//     this._lastname = lastname;
  
//     this._gpa = gpa;
  
//     this._age = age;
//     this._gender = gender;
  
//     this.getGender = function(){return this._gender;}
  
//   }

//   let persons = [new Person("Shamil", "Abbasov", 4,20,"Male"),new Person("Shamil2", "Abbasov", 4,20,"Female"),new Person("Shamil3", "Abbasov", 4,20,"Male"),
//     new Person("Shamil4", "Abbasov", 4,20,"Female"), new Person("Shamil5", "Abbasov", 4,20,"Male") ];

//    res =  persons.filter((x) => (x._gender =="Male"));
// for(let x in res){
//     console.log(res[x]._firstname);
//     console.log(res[x]);
// }


// let res = [1,2,3,4,5,6,7];

// res.reduce(tes)

// function test(max = 999999999, num){
//     if(max < num ) num =max;
    
// }


// function nrm(name){
//     name = name.trim();
//    return  name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase();
// }

// // console.log(nrm("      shamil abbasof      "));



// function nrw(name){
//     let res = [];

//     name = name.trim();
//     res = name.split(" ");

//     console.log(res);
//     let ans = [];

//    for(let y of res){
    
//     for(let i =0; i<y.length; i+=2){
//     //     console.log(
//     //         y.substring(i,i+2));

//     // }

//             // console.log(nrm(y.substring(i,i+2)));
//             ans.push(nrm(y.substring(i,i+2)));

//    }
//    ans.push(" ");
//    }
// //    console.log(ans.join('').trim());
//    return ans.join('').trim();
// }

// console.log(nrw("abcd efgh ijklm"));
// // console.log("aa");

let list = ["alma", "armud", "test", "fiber","love"];

function wordle(){

    let counter = 5;

    let word = list[Math.floor(Math.random() * 5)];

    for(let i = 0; i < counter ; i++){
        
       let input = prompt("Please enter a value: You have " + (counter -i ) + " chances : ");
       if(input==word){
        console.log("Great: Word is " + word + " you find it in " + (i) + ' try');
        break;
       }else{
        console.log("Try again:");
       }




    }


     console.log("Lose: Word is " + word + " you can not find it in " +counter + ' try');

}

wordle();

// Map to store available operators and their corresponding functions
const operatorsMap = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => (b !== 0 ? a / b : 'Division by zero error'),
    '%': (a, b) => a % b,
    '**': (a, b) => a ** b
  };
  
  // Function to evaluate the expression
  function evaluateExpression(operator, operand1, operand2) {
    // Check if the operator exists in the operatorsMap
    if (operatorsMap[operator]) {
      // If valid, perform the operation using the appropriate function
      return operatorsMap[operator](operand1, operand2);
    } else {
      // Default to sum operation if operator is not supported
      console.log(`Unsupported operator "${operator}". Defaulting to sum.`);
      return operatorsMap['+'](operand1, operand2);
    }
  }
  
  // Example usage:
  const operand1 = 10;
  const operand2 = 5;
  
  // Test with different operators
  console.log(evaluateExpression('+', operand1, operand2));  // 15
  console.log(evaluateExpression('-', operand1, operand2));  // 5
  console.log(evaluateExpression('*', operand1, operand2));  // 50
  console.log(evaluateExpression('/', operand1, operand2));  // 2
  console.log(evaluateExpression('%', operand1, operand2));  // 0
  console.log(evaluateExpression('**', operand1, operand2)); // 100000
  console.log(evaluateExpression('?', operand1, operand2));  // Unsupported operator -> 15 (default sum)
  