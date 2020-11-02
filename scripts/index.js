const burgerMenu = document.querySelector('.burger-menu');
const headerNav = document.getElementById('header-nav');
const lowerHeader = document.querySelector('.lower-header');
const closeMenu = () => {
    headerNav.classList.add('close-menu');
    setTimeout(() => {
        headerNav.classList.remove('header-nav-open');
        headerNav.classList.remove('close-menu');
    }, 500);
    lowerHeader.removeEventListener('click', closeMenu);
}
const headerMenu = () => {
    headerNav.classList.add('header-nav-open');
    setTimeout(() => {
        lowerHeader.addEventListener('click', closeMenu);
    }, 500)
}
burgerMenu.addEventListener('click', headerMenu);

const sliderInfo = [
    {
        heading: 'Взыскание дебиторской задолженности',
        text: 'Индивидуальный подход и нацеленность на достижение результата',
    },
    {
        heading: 'Регистрация ООО',
        text: 'Гарантируем минимальные сроки регистрации под ключ',
    },
    {
        heading: 'Ликвидация предприятия',
        text: 'Эффективное решение сложных задач',
    },
    {
        heading: 'Юридическая консультация',
        text: 'Детальные разъяснения вопросов по ведению бизнеса от профессионалов',
    },
    {
        heading: 'Юридический аутсорсинг',
        text: 'Гарантия своевременности и качества услуг',
    }, 
]
const mainSlider = document.getElementById('main-slider')
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const sliderContentHeading = document.querySelector('.slider-content-heading');
const sliderContentText = document.querySelector('.slider-content-text');

let currentSlide = 0;

const sliderSwitch = (currentSlide = 0) => {
    sliderContentText.classList.add('loyal-text');
    sliderContentHeading.classList.add('loyal-text');
    sliderContentHeading.textContent = sliderInfo[currentSlide].heading;
    sliderContentText.textContent = sliderInfo[currentSlide].text;
    mainSlider.style.background = `url(assets/imgs/slider/main-slider-${currentSlide}.png)`;
    setTimeout(()=>{
        sliderContentText.classList.remove('loyal-text');
        sliderContentHeading.classList.remove('loyal-text');
    }, 500)
}

const rightSliderSwitch = () => {
    if(currentSlide === 4) {
        currentSlide = 0;
    }
    else {
        currentSlide = currentSlide + 1;
    }
    sliderSwitch(currentSlide);
}
const leftliderSwitch = () => {
    if(currentSlide === 0) {
        currentSlide = 4;
    }
    else {
        currentSlide = currentSlide - 1;
    }
    sliderSwitch(currentSlide);
}
rightArrow.addEventListener('click', rightSliderSwitch);
leftArrow.addEventListener('click', leftliderSwitch);