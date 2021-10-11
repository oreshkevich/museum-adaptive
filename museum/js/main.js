// modal
const modal = document.querySelector(".overlay");
const modalBtn = document.querySelector(".submit");
const modalClose = document.querySelector(".modal__close");

modalBtn.addEventListener("click", () => {
  modal.style = "transform: translateX(0)";
});

modal.addEventListener("click", (event) => {
  const target = event.target;
  if (
    target.classList.contains("overlay") ||
    target.classList.contains("modal__close")
  ) {
    modal.style = "transform: translateX(-100vw)";
  }
});

const videoHeight = document.querySelector(".video-controls");

videoHeight.addEventListener("pointerdown", (evt) => {
  const destination = evt.target;
  if (!destination) return;
  if (destination.classList.contains("seek")) {
    destination.addEventListener("pointermove", () => {
      destination.style.background = `linear-gradient(to right, #710707 ${destination.value}%, #710707 ${destination.value}%, #fff ${destination.value}%, #fff 100%)`;
    });
  }
});

console.log(`
Ваша оценка - 156 баллов
Отзыв по пунктам ТЗ:
Частично выполненные пункты:
Результат проверки скорости сайта для мобильных устройств: 0 to 49 (red): Poor - не выполнено 0 ,баллов; 50 to 89 (orange): Needs Improvement - частично выполнено - 4 баллов; 90 to 100 (green): Good - выполнено полностью - 8 баллов
Выполненные пункты:

Блок header

Секция Welcome

Секция Visiting

Секция Explore

Секция Video

Секция Gallery

Секция Tickets

Форма покупки билетов

Секция Contacts

Блок footer

Блок header

Секция Welcome

Секция Visiting

Секция Explore

Секция Video

Секция Gallery

Секция Tickets

Форма покупки билетов

Секция Contacts

Блок footer

Блок header

Секция Welcome

Секция Visiting

Секция Explore

Секция Video

Секция Gallery

Секция Tickets

Форма покупки билетов

Секция Contacts

Блок footer

Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, элементы не должны скрываться, обрезаться, наезжать друг на друга, если это не предусмотрено макетом.

слайдера в секции Welcome

слайдера сравнения изображений в секции Explore

кастомного видеоплеера в секции Video

слайдера в секции Video

YouTube-видео в плейлисте в секции Video, маленькие видео выровнены по краям большого

галереи изображений и изображений в ней

карты

при нажатии на бургер-иконку меню появляется, плавно выдвигаясь слева, бургер-иконка изменяется на крестик. При нажатии на крестик меню исчезает, плавно возвращаясь назад, иконка крестика превращается в бургер-иконку

ссылки в меню работают, обеспечивая плавную прокрутку по якорям

при клике по ссылке в адаптивном меню, или при клике по любому месту сайта, кроме самого адаптивного меню, меню закрывается

вёрстка меню соответствует макету на всех проверяемых разрешениях

`);
