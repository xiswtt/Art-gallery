// открытие меню
const sideMenu = document.querySelector('.left');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('.close');
const aboutButton = document.querySelector('#about-me');
const aboutSection = document.querySelector('#about-me-section');
const gallery = document.querySelector('#gallery-img');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = "block"; // показываем
    sideMenu.classList.remove("animate-reverse"); // убираем обратную анимацию, если была
    void sideMenu.offsetWidth; // форс перерисовки, чтобы анимация снова сработала
    sideMenu.classList.add('animate'); // запускаем анимацию появления
});

// Закрытие меню
closeBtn.addEventListener("click", () => {
    sideMenu.classList.remove("animate");
    void sideMenu.offsetWidth;
    sideMenu.classList.add("animate-reverse");
});

// После окончания анимации скрываем элемент
sideMenu.addEventListener("animationend", (e) => {
    if (e.animationName === "slideout") {
        sideMenu.style.display = "none";
        sideMenu.classList.remove("animate-reverse");
    }
});

// секция обо мне
let isAboutVisible = false;

aboutButton.addEventListener('click', () => {
    if (!isAboutVisible) {
        // Скрыть галерею
        gallery.classList.remove('fade-in', 'fade-out');
        gallery.classList.add('fade-out');

        gallery.addEventListener('animationend', function handler() {
            gallery.style.display = 'none';
            gallery.classList.remove('fade-out');
            gallery.removeEventListener('animationend', handler);

            // Показать about me
            aboutSection.style.display = 'block';
            aboutSection.classList.remove('fade-in', 'fade-out');
            void aboutSection.offsetWidth;
            aboutSection.classList.add('fade-in');

            isAboutVisible = true;
        });
    } else {
        // Скрыть about me
        aboutSection.classList.remove('fade-in', 'fade-out');
        aboutSection.classList.add('fade-out');

        aboutSection.addEventListener('animationend', function handler() {
            aboutSection.style.display = 'none';
            aboutSection.classList.remove('fade-out');
            aboutSection.removeEventListener('animationend', handler);

            // Показать галерею
            gallery.style.display = 'block';
            gallery.classList.remove('fade-in', 'fade-out');
            void gallery.offsetWidth;
            gallery.classList.add('fade-in');

            isAboutVisible = false;
        });
    }
});






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

    document.querySelector('#mac1').classList.toggle('none-display');
    document.querySelector('#tibu').classList.toggle('none-display');
    document.querySelector('#malibu').classList.toggle('none-display');
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

    document.querySelector('#mac1').classList.toggle('none-display');
    document.querySelector('#tibu').classList.toggle('none-display');
    document.querySelector('#malibu').classList.toggle('none-display');
})

const together = document.querySelector('#together');

together.addEventListener('click', () => {
    document.querySelector('#mac1').classList.toggle('none-display');
    document.querySelector('#tibu').classList.toggle('none-display');
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
