'use strict';


document.addEventListener('DOMContentLoaded', () => {


	const hamburger = document.querySelector('.hamburger');
	const navigation = document.querySelector('.navigation__wrapper');
	const body = document.querySelector('body');
	const menuOverlay = document.querySelector('.navigation__overlay');


	//Menu hamburger
	hamburger.addEventListener('click', () => {
		navigation.classList.toggle('navigation__wrapper_active');
		hamburger.classList.toggle('hamburger_active');
		body.classList.toggle('no-scroll');
	});


	//Close menu, on click outside
	menuOverlay.addEventListener('click', (e) => {
		if (e.target === menuOverlay) {
			navigation.classList.remove('navigation__wrapper_active');
			hamburger.classList.remove('hamburger_active');
			body.classList.remove('no-scroll');
		}
	});

	//Close menu when click on anchor
	navigation.addEventListener('click', (e) => {
		if (e.target.classList.contains('navigation__list') ){
			navigation.classList.remove('navigation__wrapper_active');
			hamburger.classList.remove('hamburger_active');
			body.classList.remove('no-scroll');
		}
	});

	//Slider

	const slider = document.querySelectorAll('.slider__item');
	const prevButton = document.querySelector('.prev-button');
	const nextButton = document.querySelector('.next-button');
	const sliderWrapper = document.querySelector('.slider__wrapper');
	const allSlides = document.querySelector('.slider__wrapper-inner');
	const width = window.getComputedStyle(sliderWrapper).width;


	// Show all pets from json file in index.html
	async function getPets() {
		const result = await fetch('../../pets.json');
		const data = await result.json();

		// console.log(data);

		data.forEach(item => {
			const element = document.createElement('div');
			element.classList.add('slider__item');
			element.innerHTML = `
			<img src="${item.img}" alt="pet_photo" class="slider__img-pet">
			<div class="slider__name-pet">${item.name}</div>
			<button class="button button_hover slider__button">Learn more</button>
			`;
			document.querySelector('.slider__wrapper-inner').append(element);
		});
		const slider = document.querySelectorAll('.slider__item');
		console.log('Тут работат:',slider);
		allSlides.style.width = 100 * slider.length + '%';
	}

	getPets();




});



// console.log(`
// *Страница Main
// Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14
// Вёрстка страницы Main соответствует макету при ширине экрана 768px: +14
// Вёрстка страницы Main соответствует макету при ширине экрана 320px: +14
// *Страница Pets
// Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6
// Вёрстка страницы Pets соответствует макету при ширине экрана 768px: +6
// Вёрстка страницы Pets соответствует макету при ширине экрана 320px: +6
// **
// Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки: +20
// Верстка резиновая +8
// При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается +4
// Верстка обеих страниц валидная +8

// Сумма: 100 баллов.
// `);



