const hamburger = document.querySelector(".hamburger");
const navv = document.querySelector(".navv");
const links = document.querySelector('.navv li');
// const navul = document.querySelector('.navv ul');


hamburger.addEventListener("click", () => {
    navv.classList.toggle("open");
    
});