// Загрузка изображений

const preloadImages = (images) => {
    for (let i = 0; i < images.length; i++) {
      new Image().src = images[i];
    }
  }

  const images = [
    "assets/imgs/slider/main-slider-0.png",
    "assets/imgs/slider/main-slider-1.png",
    "assets/imgs/slider/main-slider-2.png",
    "assets/imgs/slider/main-slider-3.png",
    "assets/imgs/slider/main-slider-4.png",
    "assets/imgs/principles/slide0.png",
    "assets/imgs/principles/slide1.png",
    "assets/imgs/principles/slide2.png",
    "assets/imgs/principles/slide3.png",
    "assets/imgs/principles/slide4.png",
  ];

  preloadImages(images);

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
    mainSlider.style.background = `url(assets/imgs/slider/main-slider-${currentSlide}.png)`;
    sliderContentText.classList.add('loyal-text');
    sliderContentHeading.classList.add('loyal-text');
    sliderContentHeading.textContent = sliderInfo[currentSlide].heading;
    sliderContentText.textContent = sliderInfo[currentSlide].text;
    
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

//slider 2 

const principlesSlider = document.getElementById("principles-slider");
const principlesLeftArrow = document.querySelector('.principles-left-arrow');
const principlesRightArrow = document.querySelector('.principles-right-arrow');

let currentPrinciple = 0;
const principlesSwitch = (currentPrinciple = 0) => {
    principlesSlider.style.background = `url(assets/imgs/principles/slide${currentPrinciple}.png)`;
}

const leftPrinciples = () => {
    if(currentPrinciple === 0) {
        currentPrinciple = 4;
    }
    else {
        currentPrinciple = currentPrinciple - 1;
    }
    principlesSwitch(currentPrinciple);
}

const rightPrinciples = () => {
    if(currentPrinciple === 4) {
        currentPrinciple = 0;
    }
    else {
        currentPrinciple = currentPrinciple + 1;
    }
    principlesSwitch(currentPrinciple);
}

principlesLeftArrow.addEventListener('click', leftPrinciples);
principlesRightArrow.addEventListener('click', rightPrinciples);

const ratingPagination = document.querySelector('.rating-pagination');
const ratingLeftArrow = document.querySelector('.rating-left-arrow');
const ratingRightArrow = document.querySelector('.rating-right-arrow');
const ratingPaginations = document.querySelectorAll('.pagination-item');

let currentPagination = 0;
ratingRightArrow.addEventListener('click', () => {
    currentPagination === 2?currentPagination = 0:currentPagination = currentPagination + 1;
    ratingPaginations.forEach(pagination => {
        pagination.classList.remove('active');
    })
    ratingPaginations[currentPagination].classList.add('active');
})

ratingLeftArrow.addEventListener('click', () => {
    currentPagination === 0 ? currentPagination = 2:currentPagination = currentPagination - 1;
    ratingPaginations.forEach(pagination => {
        pagination.classList.remove('active');
    })
    ratingPaginations[currentPagination].classList.add('active');
})