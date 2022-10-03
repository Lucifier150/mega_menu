var i = 0;

function menu() {
    if (i == 0) {
        // document.querySelector(".navigation_dropdown-active").style.display = "block"
        document.querySelector(".navigation_dropdown-active").style.top = "0"
        document.querySelector(".navigation_dropdown-active").style.opacity = "1"
        i++;
    } else {
        // document.querySelector(".navigation_dropdown-active").style.display = "none"
        document.querySelector(".navigation_dropdown-active").style.top = "-38rem"
        document.querySelector(".navigation_dropdown-active").style.opacity = "0"
        i--;

    }

}