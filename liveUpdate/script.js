
let i = document.getElementById("in");
let s = document.getElementById("live");
i.addEventListener("input", function(){



    let text = i.value;

    i.value = text.toUpperCase();

    s.innerHTML = i.value;

}
);

