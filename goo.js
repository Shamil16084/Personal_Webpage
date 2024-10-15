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