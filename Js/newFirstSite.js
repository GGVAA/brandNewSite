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
let callBtn2 = document.getElementById('call2')
let sendButton = document.getElementById('send');
let burgerCall = document.getElementById('burgerCall')
let popUpDagger = document.getElementById('popUpDagger');
let menuCall = document.getElementById('menuCall')
burgerCall.addEventListener('click',()=>{
    popUp.style.display = 'flex';
    mobileMenu.classList.remove('mobile__menu__changed');
    burgerButton.style.display = 'block';
})
menuCall.addEventListener('click',()=>{
    popUp.style.display = 'flex';
    mobileMenu.classList.remove('mobile__menu__changed');
    burgerButton.style.display = 'block';
})


let popUp = document.getElementById('popUp');
popUpDagger.addEventListener('click',()=>{
    popUp.style.display = 'none';
})
sendButton.addEventListener('click',()=>{
    popUp.style.display = 'none';
})

sendButton.addEventListener('click',()=>{
    popUp.style.display = 'none';
})
callBtn2.addEventListener('click',()=>{
    popUp.style.display = 'flex';
})
callBtn.addEventListener('click',()=>{
    popUp.style.display = 'flex';
})
let body = document.getElementById('body');
body.addEventListener("scroll",()=>{
    console.log('scroll')
});

let header = document.getElementById('header');
let logo = document.querySelector('.logo');
let menuLink = document.querySelectorAll('.menu__link');
let headerButton = document.querySelector('.button__header')
console.log(menuLink)
window.addEventListener('scroll',()=>{
if(pageYOffset > 1){
    header.classList.add('headerScroll')
    logo.classList.add('logoOnScroll')
    headerButton.classList.add('buttonScroll')
    for(i=0;i<menuLink.length;i++){
        menuLink[i].classList.add('menu__link__scroll');
    }

} else{
    header.classList.remove('headerScroll')
    logo.classList.remove('logoOnScroll')
    headerButton.classList.remove('buttonScroll')
    for(i=0;i<menuLink.length;i++){
        menuLink[i].classList.remove('menu__link__scroll');
    }

}
})

let mobileItems = document.getElementsByClassName('mobile__menu__item')
console.log(mobileItems)
for(i=0;i<mobileItems.length;i++){
    mobileItems[i].addEventListener('click',()=>{
        mobileMenu.classList.remove('mobile__menu__changed');
        burgerButton.style.display = 'block';
    })
}
