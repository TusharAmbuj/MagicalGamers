const menuBtn = document.querySelector('.menu-btn');
const navBar = document.querySelector('.navBar ul');

menuBtn.addEventListener('click', () => {
    navBar.classList.toggle('show');
});