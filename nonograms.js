window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    const clr = document.getElementById("clear");
    clr.addEventListener("click", clearBox);
    const boxes = document.querySelectorAll("#grid > div");
    for (let box of boxes) {
        box.addEventListener("click", function () { setBox(box) });
        box.addEventListener("dragenter", function () { setBox(box) });
    }
}

function setFill(input) {
    if (input.classList.contains("filled")) {
        input.classList.remove("filled");
        input.classList.add("crossed-out");
    } else if (input.classList.contains("crossed-out")) {
        input.classList.remove("crossed-out");
        input.classList.add("filled");
    } else {
        input.classList.add("filled");
    }
    //alert("You clicked a tile!");
}

function clearBox() {
    if(confirm("Are you sure that you want to clear the nonogram puzzle?")) {
        const trgs = document.querySelectorAll("#grid > div");
        for (let trg of trgs) {
            trg.classList.remove("filled");
            trg.classList.remove("crossed-out");
        }
    }
}