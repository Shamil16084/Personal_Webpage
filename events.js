// x= document.getElementsByClassName("head").array.forEach(element => {
//     element.onclick = color;
// });


// function color(){

//     for(let i in x){
//         if(i%2==0){
//             x[i].style.color = "red";
//         }else{
//             x[i].style.color = "blue";
//         }
//     }
    
// }


// let counter = 0;

// document.getElementById("inc").onclick = show;
// document.getElementById("dec").onclick= show;
// document.getElementById("rst").onclick= show;

// let display = document.getElementById("counterDisplay");

// function show(event){

//     if(event.target.id == "inc")
// {
//     counter++;
// }else if (event.target.id === "dec") {
//     counter--;
// } else if (event.target.id === "rst") {
//     counter = 0;
// }
//     display.innerHTML = counter;
    
// }


const button = document.getElementById("get");

button.onclick = function() {

    let x= document.getElementById("h").value;
    let y= document.getElementById("w").value;

  const src =   `https://picsum.photos/${x}/${y}`;

  document.getElementById("i").src =src;
  
  document.getElementById("i").style.display="block";
  
    
}


