var buttons = document.getElementsByClassName("weaponButton");
var description = document.getElementById("description-body");
var weaponName = document.getElementById("description-weapon-name");
var descriptionWindow = document.getElementById("weapons-description");

var descriptionHidden = true;

// assign the backgrounds
buttons[0].style.backgroundImage = "url('img/ak47.png')";  
buttons[1].style.backgroundImage = "url('img/awp.png')";  
buttons[2].style.backgroundImage = "url('img/aug.png')";  
buttons[3].style.backgroundImage = "url('img/ump.png')";  
buttons[4].style.backgroundImage = "url('img/famas.png')";  
buttons[5].style.backgroundImage = "url('img/shotgun.png')";  





function weaponButtonClick(div){
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("weapon-selected");        
    }

    SelectElement(div);

    if(descriptionHidden){
        descriptionWindow.classList.remove("description-hidden");
        descriptionWindow.classList.add("description-show");
    }
    
    switch(div.id){
            case "ak47":
            weaponName.innerHTML = "AK-47";
            description.innerHTML = description_ak47;
            break;

            case "awp":
            weaponName.innerHTML = "AWP Sniper Rifle";
            description.innerHTML = description_awp;
            break;

            case "aug":
            weaponName.innerHTML = "Steyr AUG";
            description.innerHTML = description_aug;
            break;

            case "ump":
            weaponName.innerHTML = "UMP";
            description.innerHTML = description_ump;
            break;

            case "famas":
            weaponName.innerHTML = "Famas";
            description.innerHTML = description_famas;
            break;

            case "remington":
            weaponName.innerHTML = "Remington 870";
            description.innerHTML = description_remington;
            break;
    }
}


function SelectElement(element){
    element.classList.add("weapon-selected");
}

function UnSelectElement(element){
    element.classList.remove("weapon-selected");
}

function mouseDownDiv(div){

}

function GetWeaponDescription(weapon){
    
}