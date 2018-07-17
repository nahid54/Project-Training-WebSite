window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

var dropdown = document.getElementsByClassName("dropdown-content");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

// $(window).scroll(function () {
//     var menuPosition = $('#menu').position();
//     var windowScrollPosition = $(window).scrollTop();
//     if(windowScrollPosition >= menuPosition.top) {
//         $('#mainUl').css({
//             'position'  : 'fixed',
//             'top'       : '0px',
//             'width'     : '90%'
//         });
//     } else {
//         $('#mainUl').css({
//             'position'  : 'relative',
//             'top'       : '0px'
//         });
//     }
// });
//
