const commentsSwiper = new Swiper(".comments__swiper", {
    slidesPerView: 1,
    navigation: {
        nextEl: ".comments-button-next",
        prevEl: ".comments-button-prev",
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