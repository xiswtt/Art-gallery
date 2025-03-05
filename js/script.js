// открытие меню
const sideMenu = document.querySelector('.left');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('.close');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = "block";
    sideMenu.classList.toggle('animate');
})

closeBtn.addEventListener("click", () => {
      sideMenu.classList.add("fade-out");
    }
  );



// переключение темы
const themeToggler = document.querySelector('.theme-toggler');

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('on');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('on');
})

// фильтр
const malina = document.querySelector('#malina');

malina.addEventListener('click', () => {
    document.querySelector('#maquvierpic').classList.toggle('none-display');
    document.querySelector('#loverspic').classList.toggle('none-display');
    document.querySelector('#loverspic1').classList.toggle('none-display');
    document.querySelector('#vanillapic').classList.toggle('none-display');
    document.querySelector('#nonepic').classList.toggle('none-display');
})

const eona = document.querySelector('#eona');

eona.addEventListener('click', () => {
    document.querySelector('#malinapic').classList.toggle('none-display');
    document.querySelector('#malinapic1').classList.toggle('none-display');
    document.querySelector('#maquvierpic').classList.toggle('none-display');
    document.querySelector('#loverspic').classList.toggle('none-display');
    document.querySelector('#loverspic1').classList.toggle('none-display');
    document.querySelector('#vanillapic').classList.toggle('none-display');
    document.querySelector('#nonepic').classList.toggle('none-display');
})

const together = document.querySelector('#together');

together.addEventListener('click', () => {
    document.querySelector('#malinapic').classList.toggle('none-display');
    document.querySelector('#malinapic1').classList.toggle('none-display');
    document.querySelector('#maquvierpic').classList.toggle('none-display');
    document.querySelector('#vanillapic').classList.toggle('none-display');
    document.querySelector('#nonepic').classList.toggle('none-display');
})

// const all = document.querySelector('#all');

// all.addEventListener('click', () => {
//     document.querySelector('#malinapic').classList.toggle('visible-all');
//     document.querySelector('#malinapic1').classList.toggle('visible-all');
//     document.querySelector('#maquvierpic').classList.toggle('visible-all');
//     document.querySelector('#loverspic').classList.toggle('visible-all');
//     document.querySelector('#loverspic1').classList.toggle('visible-all');
//     document.querySelector('#vanillapic').classList.toggle('visible-all');
//     document.querySelector('#nonepic').classList.toggle('visible-all');
// })

const favourite = document.querySelector('#favourite');

favourite.addEventListener('click', () => {
    document.querySelector('#loverspic1').classList.toggle('grid-fix');
    document.querySelector('#malinapic1').classList.toggle('none-display');
    document.querySelector('#maquvierpic').classList.toggle('none-display');
    document.querySelector('#nonepic').classList.toggle('none-display');
})
