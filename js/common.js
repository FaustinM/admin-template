function toggleNavBurger(){
    document.getElementById("navbar-burger").classList.toggle("is-active");
    document.getElementById("navbar-menu").classList.toggle("is-active");
}

function toggleDropdown() {
    document.getElementById("dropdown-menu").classList.toggle("is-display");
}
function toggleBell(){
    document.getElementById("bell").classList.toggle("notifBell");
}
function stickyBar() {
    const el = document.querySelectorAll(".stickyBar");
    for(let key in el){
        if(el.hasOwnProperty(key)){
            const elPrime = el[key].cloneNode(true);
            elPrime.classList.remove("stickyBar");
            elPrime.classList.add("outElement");
            el[key].parentElement.appendChild(elPrime);
            document.addEventListener("scroll", ()=>{
                elPrime.classList.add("outElement");
                if(!isScrolledIntoView(el[key])){
                    if(!elPrime.classList.contains("onOut")) {
                        elPrime.classList.add("onOut");
                        el[key].style.opacity = 0;
                        el[key].style.pointerEvents = "none";
                    }
                } else {
                    if(elPrime.classList.contains("onOut")) {
                        elPrime.classList.remove("onOut");
                        el[key].style.opacity = 1;
                        el[key].style.pointerEvents = "";

                    }
                }
            })
        }

    }
}

function isScrolledIntoView(el) {
    const rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;

    // Only completely visible elements return true:
    return (elemTop >= 0) && (elemBottom <= window.innerHeight);
}
function updateContext(){
    const dots = document.querySelectorAll(".verticalDot");
    const menu = document.querySelector("#contextMenu");
    for(let dot of dots){
        dot.addEventListener('click',(e)=>{
            const x = e.clientX;
            const y = e.clientY;
            if(!menu.classList.contains("is-active")) menu.classList.add("is-active");
            menu.style.left = `${x}px`;
            menu.style.top = `${y}px`;
        });
    }
}
window.onclick = function(event) {
    if (!event.target.matches('.verticalDot')) {
        const menu = document.querySelector("#contextMenu");
        if (menu.classList.contains('is-active')) menu.classList.remove('is-active');
    }
};

function load(){
    stickyBar();
    updateContext()
}
document.addEventListener('DOMContentLoaded', load, false);
