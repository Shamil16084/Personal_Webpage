let x = document.querySelectorAll(".cocktail li");

for (let i = 0; i < x.length; i++) {
    if (i % 2 === 0) {
        x[i].style.fontStyle = 'italic';
    } else {
        x[i].style.fontWeight = 'bold';
    }
}


let z = document.querySelectorAll(".act li");
// z.forEach((el)=> el.style.display ="inline-block");
z.forEach((el,i)=>{
    if(i%2===0){
el.style.fontStyle = "italic";
el.style.backgroundColor  = "red";  
    }else{
        el.style.fontWeight = 'bold';
        el.style.backgroundColor ="yellow";
    }
})




let s = document.getElementById("su");

s.addEventListener("click", function(){
    let val = document.getElementById("suv").value;
    
    let newli = document.createElement("li");

    const node = document.createTextNode(val);

    newli.appendChild(node);

    document.getElementsByClassName("cocktail")[0].appendChild(newli);
    newli.addEventListener("mouseover", function() {
        newli.style.fontSize = "larger"; // Increase font size on hover
    });

    newli.addEventListener("mouseout", () => {
        newli.style.fontSize = "medium"; // Revert to original size
    });
    document.getElementById("suv").value = '';

})
let all = document.querySelectorAll(".elm li");

all.forEach((el) => {
    el.addEventListener("mouseover", function() {
        el.style.fontSize = "larger";

    } );

    el.addEventListener("mouseout", () => {
        el.style.fontSize = "medium";
    });
})


let ss = document.getElementById("ac");

ss.addEventListener("click", function(){
    let val = document.getElementById("acv").value;
    
    let newli = document.createElement("li");

    const node = document.createTextNode(val);

    newli.appendChild(node);

    document.getElementsByClassName("act")[0].appendChild(newli);
    newli.addEventListener("mouseover", function() {
        newli.style.fontSize = "larger"; // Increase font size on hover
    });

    newli.addEventListener("mouseout", () => {
        newli.style.fontSize = "medium"; // Revert to original size
    });
    document.getElementById("acv").value = '';

});



let first = document.getElementsByClassName("cocktail")[0];

first.addEventListener("click", function(event) {
    if(event.target.tagName == "LI"){
        event.target.remove();
    }
});

let second = document.getElementsByClassName("act")[0];

second.addEventListener("click", function(event) {
    if(event.target.tagName === "LI"){
     let el  = event.target;

     el.classList.toggle("line");

        
    }
})