let home=document.getElementById("home_score");
let guest=document.getElementById("guest_score");

function add1point(team){
    if(team === "home"){
        home.innerHTML = parseInt(home.innerHTML) + 1;
    } else if(team === "guest"){
        guest.innerHTML = parseInt(guest.innerHTML) + 1;
    }
}

function add2point(team){
    if(team === "home"){
        home.innerHTML = parseInt(home.innerHTML) + 2;
    } else if(team === "guest"){
        guest.innerHTML = parseInt(guest.innerHTML) + 2;
    }
}

function add3point(team){
    if(team === "home"){
        home.innerHTML = parseInt(home.innerHTML) + 3;
    } else if(team === "guest"){
        guest.innerHTML = parseInt(guest.innerHTML) + 3;
    }
}   

function resetScores(){
    home.textContent = 0;
    guest.textContent = 0;
}