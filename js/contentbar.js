
const given = document.getElementById("given");
const joined = document.getElementById("joined");

function select(btn){
    if(btn == "given"){
        joined.style.display = "none";
        given.style.display = "inline-block";
    }
    else if(btn=="joined"){
        given.style.display = "none";
        joined.style.display = "inline-block";
    }
}