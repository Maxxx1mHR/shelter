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


	const prevButton = document.querySelector('.prev-button');
	const nextButton = document.querySelector('.next-button');
	const sliderWrapper = document.querySelector('.slider__wrapper');
	const slider = document.querySelector('.slider__wrapper-inner');
	const width = window.getComputedStyle(sliderWrapper).width;


	// const moveLeft =  () => {
		// slider.classList.add('transition-left');
		// prevButton.removeEventListener('click', moveLeft);
		// nextButton.removeEventListener('click', moveRight);
	// };

	// const moveRight =  () => {
		// slider.classList.add('transition-right');
		// prevButton.removeEventListener('click', moveLeft);
		// nextButton.removeEventListener('click', moveRight);
	// };

	prevButton.addEventListener('click', () => {
		slider.classList.add('transition-left');
	});
	nextButton.addEventListener('click', () => {
		slider.classList.add('transition-right');
	});


	slider.addEventListener('animationend', (animationEvent) => {
		
		slider.classList.remove('transition-left');
		slider.classList.remove('transition-right');
		prevButton.addEventListener('click', () => {
			slider.classList.add('transition-left');
		});
		nextButton.addEventListener('click', () => {
			slider.classList.add('transition-right');
		});
		// prevButton.addEventListener('click', moveLeft);
		// nextButton.addEventListener('click', moveRight);
	});





	// Show all pets from json file in index.html
	// async function getPets() {
	// 	const result = await fetch('../../pets.json');
	// 	const data = await result.json();
	// 	console.log(data);


	// 	let pets = [...data];
	// 	let rand = Math.floor(Math.random() * pets.length);
	// 	console.log('index:',rand,data[rand].name);
	// 	pets.splice(rand, 1);
	// 	console.log(pets);

	// 	// showPets(data)
		
	// }

	// getPets().then(() => {
	// 	const slider = document.querySelectorAll('.slider__item');
	// 	allSlides.style.width = 270 * slider.length + 'px';
	// });

	// let offset = 0; 

	// nextButton.addEventListener('click', () => {
	// 	const slider = document.querySelectorAll('.slider__item');
	// 	console.log(slider);
	// 	if (offset == 270 * slider.length) {
	// 		offset = 0;
	// 	} else {
	// 		offset += 1080;
	// 	}

	// 	allSlides.style.transform = `translateX(-${offset}px)`;
	// });

	


	//Render pets on html page
	// function showPets(pets) {
	// 	pets.forEach(item => {
	// 		const element = document.createElement('div');
	// 		element.classList.add('slider__item');
	// 		element.innerHTML = `
	// 		<img src="${item.img}" alt="pet_photo" class="slider__img-pet">
	// 		<div class="slider__name-pet">${item.name}</div>
	// 		<button class="button button_hover slider__button">Learn more</button>
	// 		`;
	// 		document.querySelector('.slider__wrapper-inner').append(element);
	// 	});
	// }




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



