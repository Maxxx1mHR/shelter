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




	async function getPets() {
		const result = await fetch('../../pets.json');
		const data = await result.json();
		console.log('Data',data);
		let randomArray = [];
		// while (randomArray.length < 7) {

		for (let i = 0; i < 3; i++) {
			let randomNumber = Math.floor(Math.random() * 8);
			if(!randomArray.includes(randomNumber)) {
				randomArray[i] = randomNumber;
			} else {
				i--;
			}
		}
		// }
		console.log('ARRA',randomArray);
	}
	getPets();


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


	// let countLeftClickBtn = 0;
	// let countRightClickBtn = 0;

	prevButton.addEventListener('click', () => {
		slider.classList.add('transition-left');
	});

	nextButton.addEventListener('click', () => {
		slider.classList.add('transition-right');
	});


	const random_start = 1; // От какого генерировать
	const random_end = 5; // До какого генерировать

	const allСycles = 5;

	let array= [];

	for(let i=random_start;i<=random_end;i++){
		array.push(i);
	}

	for(let countCycles=1;countCycles<=allСycles;countCycles++){
		console.log(array.splice(Math.random()*array.length,1)[0]);
	}



	slider.addEventListener('animationend', (animation) => {

		if(animation.animationName === 'move-left') {
			slider.classList.remove('transition-left');
			let leftItem = document.querySelector('#item-left').innerHTML;
			let activeItem = document.querySelector('#item-active').innerHTML;

			document.querySelector('#item-active').innerHTML = leftItem;
			document.querySelector('#item-right').innerHTML = activeItem;

			///
			const item1 = document.createElement('div');
			item1.classList.add('slider__item');
			item1.innerHTML = `
				<img src="../../assets/images/our_friends/pets-katrine.png" alt="pet_photo" class="slider__img-pet">
				<div class="slider__name-pet">${Math.floor(Math.random() * 8)}</div>
				<button class="button button_hover slider__button">Learn more</button>
			`;

			const item2 = document.createElement('div');
			item2.classList.add('slider__item');
			item2.innerHTML = `
				<img src="../../assets/images/our_friends/pets-katrine.png" alt="pet_photo" class="slider__img-pet">
				<div class="slider__name-pet">${Math.floor(Math.random() * 8)}</div>
				<button class="button button_hover slider__button">Learn more</button>
			`;

			const item3 = document.createElement('div');
			item3.classList.add('slider__item');
			item3.innerHTML = `
				<img src="../../assets/images/our_friends/pets-katrine.png" alt="pet_photo" class="slider__img-pet">
				<div class="slider__name-pet">${Math.floor(Math.random() * 8)}</div>
				<button class="button button_hover slider__button">Learn more</button>
			`;

			document.querySelector('#item-left').innerHTML = '';
			document.querySelector('#item-left').appendChild(item1);
			document.querySelector('#item-left').appendChild(item2);
			document.querySelector('#item-left').appendChild(item3);

		}


		if(animation.animationName === 'move-right') {
			slider.classList.remove('transition-right');

			let rightItem = document.querySelector('#item-right').innerHTML;
			let activeItem = document.querySelector('#item-active').innerHTML;

			document.querySelector('#item-active').innerHTML = rightItem;
			document.querySelector('#item-left').innerHTML = activeItem;



			///
			const item1 = document.createElement('div');
			item1.classList.add('slider__item');
			item1.innerHTML = `
				<img src="../../assets/images/our_friends/pets-katrine.png" alt="pet_photo" class="slider__img-pet">
				<div class="slider__name-pet">${Math.floor(Math.random() * 8)}</div>
				<button class="button button_hover slider__button">Learn more</button>
			`;

			const item2 = document.createElement('div');
			item2.classList.add('slider__item');
			item2.innerHTML = `
				<img src="../../assets/images/our_friends/pets-katrine.png" alt="pet_photo" class="slider__img-pet">
				<div class="slider__name-pet">${Math.floor(Math.random() * 8)}</div>
				<button class="button button_hover slider__button">Learn more</button>
			`;

			const item3 = document.createElement('div');
			item3.classList.add('slider__item');
			item3.innerHTML = `
				<img src="../../assets/images/our_friends/pets-katrine.png" alt="pet_photo" class="slider__img-pet">
				<div class="slider__name-pet">${Math.floor(Math.random() * 8)}</div>
				<button class="button button_hover slider__button">Learn more</button>
			`;

			document.querySelector('#item-right').innerHTML = '';
			document.querySelector('#item-right').appendChild(item1);
			document.querySelector('#item-right').appendChild(item2);
			document.querySelector('#item-right').appendChild(item3);

		}


		// prevButton.addEventListener('click', () => {
		// 	slider.classList.add('transition-left');
		// });
		// nextButton.addEventListener('click', () => {
		// 	slider.classList.add('transition-right');
		// });
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



