const navItems = document.getElementById('hiddenNav');
const navIcon = document.getElementById('navIcon');

var navHidden = true;

navIcon.addEventListener('click', function() {
    if (navHidden == true) {
        navHidden = false;
        navItems.style.left = 0;
        console.log('hereAgain');
    } else if (navHidden == false) {
        navHidden = true;
        navItems.style.left = -200;
        console.log('here');
    }
})

console.log('madeit');