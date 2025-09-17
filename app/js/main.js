const commentsSwiper = new Swiper(".comments__swiper", {
    slidesPerView: 1,
    navigation: {
        nextEl: ".comments-button-next",
        prevEl: ".comments-button-prev",
    },
});

const discoverSlider = new Swiper(".discover-swiper", {
    slidesPerView: 3,
    spaceBetween: 40,
    pagination: {
        el: ".discover-swiper-pagination",
        clickable: true,
    },
});
const discoverCardSwiper = new Swiper(".discover__card-swiper", {
    slidesPerView: 1,
    nested: true,
    loop: true,
    initialSlide: 1,
    pagination: {
        el: ".discover__card-pagination",
    },
});
const testimonialSwiper = new Swiper(".testimonial__swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: false,
    pagination: {
        el: ".pagination__dots",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
    navigation: {
        nextEl: ".pagination-button--next",
        prevEl: ".pagination-button--prev",
    },
});

const expTeachersItemCard = document.querySelectorAll('.exp-teachers__item');
const expTeachersItemCard__active = document.querySelectorAll('.exp-teachers__item--active');
const expTeachersSocial = document.querySelector('.exp-teachers__social');
const expTeachersPhotoDecor = document.querySelector('.exp-teachers__photo-decor');
const expTeachersInfo_bg = document.querySelector('.exp-teachers__info');


expTeachersItemCard.forEach(teacherCard => {
    teacherCard.addEventListener('mouseenter', () => {
        teacherCard.classList.add('exp-teachers__item--active');
    })
    teacherCard.addEventListener('mouseleave', () => {
        teacherCard.classList.remove('exp-teachers__item--active');
    })
})

const items = document.querySelectorAll('.questions__item');

items.forEach(item => {
    item.addEventListener('click', () => {
        if (item.classList.contains('questions__item--active')) {
            item.classList.remove('questions__item--active');
        } else {
            items.forEach(el => el.classList.remove('questions__item--active'));
            item.classList.add('questions__item--active');
        }
    });
});


const questions = Array.from(document.querySelectorAll('.questions-v1__item'));

questions.forEach((item) => {
    item.addEventListener('click', questionHandler);
});

function questionHandler(e) {
    e.preventDefault();

    let currentItem = e.target.closest('.questions-v1__item');
    let currentContent = currentItem.querySelector('.questions-v1__item-text');

    questions.forEach((el) => {
        if (el !== currentItem) {
            el.classList.remove('questions-v1__item--active');
            el.querySelector('.questions-v1__item-text').style.maxHeight = 0;
        }
    });

    currentItem.classList.toggle('questions-v1__item--active');
    if (currentItem.classList.contains('questions-v1__item--active')) {
        currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
    } else {
        currentContent.style.maxHeight = 0;
    }
}

const swiper = new Swiper(".events__swiper", {
    loop: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiperButton-next",
        prevEl: ".swiperButton-prev",
    },
});