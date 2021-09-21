function mouseOverDiv(id){
    //id.innerHTML = "Ooops!";
    id.classList.add("border-selected");
    id.classList.remove("border-unselected");
    id.classList.add("weapons-enlarged");
    id.classList.remove("weapons-normalsize");
    console.log(id.id);
}

function mouseOutDiv(id){
    id.classList.add("border-unselected");
    id.classList.add("weapons-normalsize");
    id.classList.remove("weapons-enlarged");
    id.classList.remove("border-selected");
}

function mouseDownDiv(div){

}

