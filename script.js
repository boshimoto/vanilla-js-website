const navBar = document.querySelector('.header__container');
const navBtn = document.querySelector('.nav__btn');
let previousYPos;

const iconSwap = (element, starturl='', endurl='') => {
    if(element.src.endsWith(starturl)){
        element.src = endurl;
    }
    else if(element.src.endsWith(endurl)){
        element.src = starturl;
    }
};

navBtn.addEventListener('click', () => 
    {iconSwap(navBtn.firstChild.nextElementSibling,
    '/img/nav/menu-open.svg',
    '/img/nav/menu-close.svg')
});

const debounce = (fn, timeout) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, timeout);
    };
};

const updateNavBarDrop = debounce((previousYPos) => {
    let currentYPos = window.pageYOffset;

    if (currentYPos <= 100) {
        navBar.classList.remove('active');
    } else if(currentYPos > previousYPos) {
        navBar.classList.remove('active');
    } else if(currentYPos < previousYPos) {
        navBar.classList.add('active');
    }
}, 300);

document.addEventListener('scroll', () => {
    updateNavBarDrop(previousYPos);
    previousYPos = window.pageYOffset;
});



const ctaCard = document.querySelectorAll('.cta__card');

const flipCard = function flipCard() {
    for (let card in ctaCard) {
        if (Object.hasOwn(ctaCard, card)) {
            ctaCard[card].addEventListener('mouseover', () => {
                ctaCard[card].classList.add('is-flipped');
            })
        }
    }
}

flipCard();