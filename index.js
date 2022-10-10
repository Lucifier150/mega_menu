

function menu() {
    if (i == 0) {
        document.querySelector(".responsive-dropdown").style.display = "block"
        i++;
    } else {
        document.querySelector(".responsive-dropdown").style.display = "none"
        i--;

    }

}
let i = 0;
const nav = document.querySelector(".horizontalnavigation");

const dropdowns = document.querySelectorAll(".navdropdown");


var navlinks = nav.querySelectorAll(".horzontalnavigation-list-item.active");
// loop
navlinks.forEach((element, i) => {


    //Using arrow function.

    let flag = true
    element.onclick = () => {
        // switch (i) {
        // case 0:
        dropdowns.forEach(element => {
            if(flag){

                element.style.top = "-200rem";        
                flag = true
            }
            
        });
        if (flag) {
            dropdowns[i].style.top = "0";
            flag = false

        }
        else {
            dropdowns[i].style.top = "-200rem";
            flag = true
        }
        //         break;
        //     case 1:
        //         if (flag) {
        //             feature.style.top = "0";
        //             flag = false

        //         }
        //         else {
        //             feature.style.top = "-50rem";
        //             flag = true
        //         }
        //         break;
        //     case 2:

        //         break;
        //     default:

        // }

        // console.log(flag)
        // console.log(element,i)

        // if (flag) {
        //     active.style.top = "0";
        //     flag = false

        // }
        // else {
        //     active.style.top = "-50rem";
        //     flag = true
        // }
    }
});




