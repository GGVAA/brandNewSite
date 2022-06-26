const burgerButton = document.querySelector('#burger');
const mobileMenu = document.querySelector("#mobileMenu");
const daggerButton = document.querySelector("#dagger")


burgerButton.addEventListener("click", () => {
    console.log('you clicked me');
    mobileMenu.classList.add('mobile__menu__changed');
    burgerButton.style.display = 'none';
  
})

daggerButton.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile__menu__changed');
    burgerButton.style.display = 'block';
}
)

let callBtn = document.getElementById('call');
let popUp = document.getElementById('popUp');

callBtn.addEventListener('click',()=>{
    popUp.style.display = 'flex';
})