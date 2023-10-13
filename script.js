const HomeShopAbt = document.querySelector('.Home-shop-abt')
const MenuBar = document.querySelector('.menuBar')
const Xmark = document.querySelector('.xmark')

MenuBar.addEventListener('click' , () => {
    HomeShopAbt.classList.toggle('aagao')
})

Xmark.addEventListener('click' , () => {
    HomeShopAbt.classList.remove('aagao')
})