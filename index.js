const hamburgerBtn = document.getElementById('hamburger');
const navItems = document.getElementById('ul-items');

hamburgerBtn.addEventListener('click', hamburgerToggle);

function hamburgerToggle (){
    navItems.classList.toggle('show')
}