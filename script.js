
let ul = document.querySelector("ul");
let inp = document.querySelector("input");
let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     let list = document.createElement("li");
//     list.innerText = inp.value
//     ul.appendChild(list);
//     inp.value="";

//     deleteBtn(list);
// } );

// function deleteBtn(list){
//     let delBtn = document.createElement("button");
//     delBtn.innerText = "Delete";
//     list.appendChild(delBtn);
// }




btn.addEventListener("click", function () {

    if (inp.value.trim() === "") return; //it make sure input is not empty


    let list = document.createElement("li");
    list.innerText = inp.value;

    // Toggle completed when clicking task
    list.addEventListener("click", function () {
        list.classList.toggle("completed");
    });


    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";

    delBtn.addEventListener("click", function () {
        list.remove();
    });

    list.appendChild(delBtn);
    ul.appendChild(list);

    inp.value = "";
    inp.focus(); // auto focus on input field

});

// Add task by Enter key
inp.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        btn.click();   // makes the btn logic creates li 
    }
});
