//Navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;


    if(window.pageYOffset > fixedNav){
        header.classList.add('navbarfixed')
    }else{
        header.classList.remove('navbarfixed')
    }
}


//Hamburger
const hamburger = document.querySelector('#hamburger');
const navmenu = document.querySelector('#navmenu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburgeractive')
    navmenu.classList.toggle('hidden');
})