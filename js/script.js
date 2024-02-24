document.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (window.scrollY > 200) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


// Menu Toggle
function menuToggle() {
    var status = document.getElementById("nav-menu-items");
    if (status.style.display === "none") {
        status.style.display = "block";
    } else {
        status.style.display = "none";
    }
}
// Board List Item
function experience() {
    var experiance = document.getElementById("experience");
    if (experiance.style.display === "none") {
        experiance.style.display = "block";
    } else {
        experiance.style.display = "none";
    }
}
function education() {
    var experiance = document.getElementById("education");
    if (experiance.style.display === "none") {
        experiance.style.display = "block";
    } else {
        experiance.style.display = "none";
    }
}