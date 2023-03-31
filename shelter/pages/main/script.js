'use strict';


document.addEventListener('DOMContentLoaded', () => {


	const hamburger = document.querySelector('.hamburger');
	const navigation = document.querySelector('.navigation__wrapper');
	const body = document.querySelector('body');
	const menuOverlay = document.querySelector('.navigation__overlay');


	hamburger.addEventListener('click', () => {
		navigation.classList.toggle('navigation__wrapper_active');
		hamburger.classList.toggle('hamburger_active');
		body.classList.toggle('no-scroll');
	});


	menuOverlay.addEventListener('click', (e) => {
		if (e.target === menuOverlay) {
			navigation.classList.remove('navigation__wrapper_active');
			hamburger.classList.remove('hamburger_active');
		}
	});
});



console.log(`
*Страница Main
Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14
Вёрстка страницы Main соответствует макету при ширине экрана 768px: +14
Вёрстка страницы Main соответствует макету при ширине экрана 320px: +14
*Страница Pets
Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6
Вёрстка страницы Pets соответствует макету при ширине экрана 768px: +6
Вёрстка страницы Pets соответствует макету при ширине экрана 320px: +6
**
Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки: +20
Верстка резиновая +8
При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается +4
Верстка обеих страниц валидная +8

Сумма: 100 баллов.
`);



