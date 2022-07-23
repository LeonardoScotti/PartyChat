
const navbar = document.getElementById("navbar");
const title = document.getElementsById("title");
const a1 = document.getElementsById("a1");
const a2 = document.getElementsById("a2");
const a3 = document.getElementsById("a3");
const a4 = document.getElementsById("a4");
scroll = document.body.scrollTop

window.onscroll = function(){scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop >= scroll) {
        navbar.classList.add("nav_2")
        a1.classList.add("a_2")
        a2.classList.add("a_2")
        a3.classList.add("a_2")
        a4.classList.add("a_2")
        scroll = document.body.scrollTop
    }else{
        navbar.classList.remove("nav_2")
        a1.classList.remove("a_2")
        a2.classList.remove("a_2")
        a3.classList.remove("a_2")
        a4.classList.remove("a_2")
        scroll = document.body.scrollTop
    }
}