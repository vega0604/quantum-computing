
const links = document.querySelector(".links")

var currentContainer = '#who';

function toggle(){
    if (window.innerWidth <= 1031){
        links.classList.toggle("shown");
    }

}

window.onresize = function(){
    if (window.innerWidth >= 1031){
        links.classList.remove("shown");
    }
    move(currentContainer);
}

