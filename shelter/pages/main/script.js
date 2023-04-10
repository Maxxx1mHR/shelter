'use strict';

console.log(`
1. Реализация burger menu на обеих страницах +26;
2. Реализация слайдера-карусели на странице 'Main' +36 (Возможно меньше, баллов 30-32, есть сомнения в одном месте);
3. Реализация пагинации на странице 'Pets' +36;
4. Реализация попап на обеих страницах +12.
Итог: 106/110.

`);

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

	// const prevButton = document.querySelector('.prev-button');
	// const nextButton = document.querySelector('.next-button');
	// const sliderWrapper = document.querySelector('.slider__wrapper');
	// const slider = document.querySelector('.slider__wrapper-inner');
	// const width = window.getComputedStyle(sliderWrapper).width;


	// let randomValues = [];

	// let countOfSlides;

	// //console.log(window.screen.availWidth);
	// if (window.screen.availWidth >= 993) {
	// 	countOfSlides = 3;

	// }

	// if (window.screen.availWidth <= 992 && window.screen.availWidth >= 768) {
	// 	countOfSlides = 2;

	// }
	// if (window.screen.availWidth <= 767) {
	// 	countOfSlides = 1;
	// }


	// async function getPets() {
	// 	const result = await fetch('../../pets.json');
	// 	const data = await result.json();
	// 	//console.log('Start Data',data);

	// 	return data;
	// }


	// async function main () {



	// 	const data = await getPets();
	// 	function generateStartItemActiveSlider() {
	// 		for (let i = 0; i < countOfSlides; i++) {
	// 			let randomNumber = Math.floor(Math.random() * 8);
	// 			if(!randomValues.includes(randomNumber)) {
	// 				randomValues[i] = randomNumber;
	// 			} else {
	// 				i--;
	// 			}
	// 		}


	// 		//console.log('first init random value',randomValues);
	// 		for(let i = 0; i < randomValues.length; i++) {

	// 			//console.log('first init random value',data[randomValues[i]]);
	// 		}

	// 		for (let i = 0; i < countOfSlides; i++) {
	// 			let itemActive = document.createElement('div');
	// 			itemActive.classList.add('slider__item');
	// 			itemActive.innerHTML = `
	// 				<img src="${data[randomValues[i]].img}" alt="pet_photo" class="slider__img-pet">
	// 				<div class="slider__name-pet">${data[randomValues[i]].name}</div>
	// 				<button class="button button_hover slider__button">Learn more</button>
	// 			`;


	// 			//Popap
	// 			itemActive.addEventListener('click', () => {
	// 				//console.log(data[randomValues[i]].id);
	// 				document.querySelector('.modal__dialog').innerHTML = '';
	// 				openModal(data[randomValues[i]].id);
	// 			});
	// 			//Popap

	// 			document.querySelector('#item-active').appendChild(itemActive);
	// 		}
	// 	}

	// 	let newRandomValues = [];
	// 	function generateStartLeftRightSlider() {
	// 		let newDataWithoutFirstInit = [];
	// 		for (let i = 0; i < randomValues.length; i++) {
	// 			newDataWithoutFirstInit.push(data[randomValues[i]]);
	// 		}
	// 		let s = new Set(newDataWithoutFirstInit);
	// 		newDataWithoutFirstInit = data.filter(e => !s.has(e));

	// 		//console.log('Новый массив из 5 элементов, без трех, который были в item-active для лево/право старт',newDataWithoutFirstInit);




	// 		for (let i = 0; i < countOfSlides; i++) {
	// 			let randomNumber = Math.floor(Math.random() * 5);
	// 			if(!newRandomValues.includes(randomNumber)) {
	// 				newRandomValues[i] = randomNumber;
	// 			} else {
	// 				i--;
	// 			}
	// 		}

	// 		//console.log('New random values',newRandomValues);

	// 		for (let i = 0; i < countOfSlides; i++) {
	// 			let itemLeft = document.createElement('div');
	// 			itemLeft.classList.add('slider__item');
	// 			itemLeft.innerHTML = `
	// 				<img src="${newDataWithoutFirstInit[newRandomValues[i]].img}" alt="pet_photo" class="slider__img-pet">
	// 				<div class="slider__name-pet">${newDataWithoutFirstInit[newRandomValues[i]].name}</div>
	// 				<button class="button button_hover slider__button">Learn more</button>
	// 			`;


	// 			document.querySelector('#item-left').appendChild(itemLeft);
	// 		}

	// 		for (let i = 0; i < countOfSlides; i++) {
	// 			let itemRight = document.createElement('div');
	// 			itemRight.classList.add('slider__item');
	// 			itemRight.innerHTML = `
	// 				<img src="${newDataWithoutFirstInit[newRandomValues[i]].img}" alt="pet_photo" class="slider__img-pet">
	// 				<div class="slider__name-pet">${newDataWithoutFirstInit[newRandomValues[i]].name}</div>
	// 				<button class="button button_hover slider__button">Learn more</button>
	// 			`;


	// 			document.querySelector('#item-right').appendChild(itemRight);
	// 		}


	// 		//console.log('_______');
	// 		//console.log('Узнаю сами значение элементов new random values');
	// 		let randomValueInLeftRight = [];
	// 		for (let i = 0; i < newRandomValues.length; i++) {
	// 			randomValueInLeftRight[i] = newDataWithoutFirstInit[newRandomValues[i]];
	// 		}
	// 		//console.log(randomValueInLeftRight);

	// 	}

	// 	function generateItemClickSlider() {

	// 		prevButton.addEventListener('click', () => {
	// 			slider.classList.add('transition-left');
	// 		});

	// 		nextButton.addEventListener('click', () => {
	// 			slider.classList.add('transition-right');


	// 		});


	// 		slider.addEventListener('animationend', (animation) => {

	// 			let lastRandomValueForSecond = [];
	// 			for (let i = 0; i < countOfSlides; i++) {
	// 				let randomNumber = Math.floor(Math.random() * 5);
	// 				if(!lastRandomValueForSecond.includes(randomNumber)) {
	// 					lastRandomValueForSecond[i] = randomNumber;
	// 				} else {
	// 					i--;
	// 				}
	// 			}

	// 			//console.log('генерация новых элементов',lastRandomValueForSecond);


	// 			let newDataForSecondClick = [];


	// 			let val = new Set(newDataForSecondClick);
	// 			newDataForSecondClick = data.filter(e => !val.has(e));

	// 			//console.log('Last',newDataForSecondClick);

	// 			if(animation.animationName === 'move-left' || animation.animationName === 'move-left768' || animation.animationName === 'move-left320') {




	// 				slider.classList.remove('transition-left');
	// 				let leftItem = document.querySelector('#item-left').innerHTML;
	// 				let activeItem = document.querySelector('#item-active').innerHTML;

	// 				document.querySelector('#item-active').innerHTML = leftItem;
	// 				document.querySelector('#item-right').innerHTML = activeItem;

	// 				document.querySelector('#item-left').innerHTML = '';




	// 				for (let i = 0; i < countOfSlides; i++) {

	// 					let itemLeft = document.createElement('div');
	// 					itemLeft.classList.add('slider__item');
	// 					itemLeft.innerHTML = `
	// 						<img src="${newDataForSecondClick[lastRandomValueForSecond[i]].img}" alt="pet_photo" class="slider__img-pet">
	// 						<div class="slider__name-pet">${newDataForSecondClick[lastRandomValueForSecond[i]].name}</div>
	// 						<button class="button button_hover slider__button">Learn more</button>
	// 					`;

	// 					document.querySelector('#item-left').appendChild(itemLeft);
	// 				}
	// 			}

	// 			if(animation.animationName === 'move-right' || animation.animationName === 'move-right768' || animation.animationName === 'move-right320') {


	// 				let lastRandomValueForSecond = [];
	// 				for (let i = 0; i < countOfSlides; i++) {
	// 					let randomNumber = Math.floor(Math.random() * 5);
	// 					if(!lastRandomValueForSecond.includes(randomNumber)) {
	// 						lastRandomValueForSecond[i] = randomNumber;
	// 					} else {
	// 						i--;
	// 					}
	// 				}

	// 				//console.log('генерация новых элементов',lastRandomValueForSecond);


	// 				let newDataForSecondClick = [];
	// 				for (let i = 0; i < randomValues.length; i++) {
	// 					newDataForSecondClick.push(data[lastRandomValueForSecond[i]]);
	// 				}


	// 				//console.log('Last',newDataForSecondClick);
	// 				let t = new Set(newDataForSecondClick);
	// 				newDataForSecondClick = data.filter(e => !t.has(e));

	// 				//console.log('Last',newDataForSecondClick);


	// 				slider.classList.remove('transition-right');

	// 				let rightItem = document.querySelector('#item-right').innerHTML;
	// 				let activeItem = document.querySelector('#item-active').innerHTML;

	// 				document.querySelector('#item-active').innerHTML = rightItem;
	// 				document.querySelector('#item-left').innerHTML = activeItem;



	// 				document.querySelector('#item-right').innerHTML = '';

	// 				for (let i = 0; i < countOfSlides; i++) {

	// 					let itemRight = document.createElement('div');
	// 					itemRight.classList.add('slider__item');
	// 					itemRight.innerHTML = `
	// 						<img src="${newDataForSecondClick[lastRandomValueForSecond[i]].img}" alt="pet_photo" class="slider__img-pet">
	// 						<div class="slider__name-pet">${newDataForSecondClick[lastRandomValueForSecond[i]].name}</div>
	// 						<button class="button button_hover slider__button">Learn more</button>
	// 					`;


	// 					document.querySelector('#item-right').appendChild(itemRight);
	// 				}
	// 			}
	// 		});
	// 	}



	// 	generateStartItemActiveSlider();
	// 	generateStartLeftRightSlider();
	// 	generateItemClickSlider();

	// }

	// main();


	// // Popap
	// const modal = document.querySelector('.modal');

	// modal.addEventListener('click', (e) => {
	// 	if (e.target === modal) {
	// 		modal.classList.remove('modal__active');
	// 		body.classList.remove('no-scroll');
	// 	}
	// });

	// async function openModal(id) {
	// 	const data = await getPets();
	// 	//console.log(data[id - 1]);

	// 	body.classList.add('no-scroll');

	// 	modal.classList.add('modal__active');
	// 	let modalWrapper = document.createElement('div');
	// 	modalWrapper.classList.add('modal__wrapper');
	// 	modalWrapper.innerHTML = `
	// 		<img src="${data[id - 1].img}" alt="img_pet" class="modal__img">
	// 		<div class="modal__content">
	// 			<h2 class="modal__title">${data[id - 1].name}</h2>
	// 			<div class="modal__subtitle">${data[id - 1].type} - ${data[id - 1].breed}</div>
	// 			<div class="modal__description">${data[id - 1].description}</div>
	// 			<ul class="pets__list">
	// 				<li class="pets__item">
	// 					<span>Age:</span> ${data[id - 1].age}
	// 				</li>
	// 				<li class="pets__item">
	// 					<span>Inoculation:</span> ${data[id - 1].inoculations}
	// 				</li>
	// 				<li class="pets__item">
	// 					<span>Diseases:</span> ${data[id - 1].diseases}
	// 				</li>
	// 				<li class="pets__item">
	// 					<span>Parasites:</span> ${data[id - 1].parasites}
	// 				</li>
	// 			</ul>
	// 		</div>
	// 		<button class="modal__close"><img src="../../assets/close.svg" alt="close"></button>
	// 	`;
	// 	document.querySelector('.modal__dialog').appendChild(modalWrapper);

	// 	document.querySelector('.modal__close').addEventListener('click', () => {
	// 		modal.classList.remove('modal__active');
	// 		body.classList.remove('no-scroll');
	// 	});
	// }



	//SLIDER

	const prevButton = document.querySelector('.prev-button');
	const nextButton = document.querySelector('.next-button');

	const slider = document.querySelector('.slider__wrapper-inner');



	async function getPets() {
		const result = await fetch('../../pets.json');
		const data = await result.json();
		// //console.log('Start Data',data);

		return data;
	}

	let countShowSlides;



	async function main () {



		let pastArr = [];
		let currArr = [];
		let nextArr = [];

		const petsData =  await getPets();
		// let countShowSlides = 3;
		if (window.screen.availWidth >= 993) {
			// //console.log(window.screen.availWidth);
			countShowSlides = 3;
		}

		if (window.screen.availWidth <= 992 && window.screen.availWidth >= 768) {
			countShowSlides = 2;
		}
		if (window.screen.availWidth <= 767) {
			countShowSlides = 1;
		}
		// //console.log(countShowSlides);





		const activeItem = document.querySelector('#item-active');
		const leftItem = document.querySelector('#item-left');
		const rightItem = document.querySelector('#item-right');

		//Начальная инициализация массива
		function init() {

			//генерация массива next
			for (let i = 0; i < countShowSlides; i++) {
				let randomNumber = Math.floor(Math.random() * 8);
				if(!nextArr.includes(randomNumber)) {
					nextArr[i] = randomNumber;
				} else {
					i--;
				}
			}

			currArr.push(...nextArr); //генерация массива curr
			nextArr = [];

			//генерация массива next. Без совпадений из массива curr
			for (let i = 0; i < countShowSlides; i++) {
				let randomNumber = Math.floor(Math.random() * 8);
				if(!nextArr.includes(randomNumber) && !currArr.includes(randomNumber)) {
					nextArr[i] = randomNumber;
				} else {
					i--;
				}
			}

			pastArr.push(...currArr); //генерация массива past
			currArr = [];
			currArr.push(...nextArr);
			nextArr = [];

			//Генерация массива next
			for (let i = 0; i < countShowSlides; i++) {
				let randomNumber = Math.floor(Math.random() * 8);
				if(!nextArr.includes(randomNumber) && !currArr.includes(randomNumber)) {
					nextArr[i] = randomNumber;
				} else {
					i--;
				}
			}
			//console.log('Init past',pastArr);
			//console.log('Init curr',currArr);
			//console.log('Init next',nextArr);
		}
		// init();

		//Прокрутка вправо. Клик право. Лента едет влево
		function forward() {
			//console.log('forward');
			pastArr = [];
			pastArr.push(...currArr);
			currArr = [];
			currArr.push(...nextArr);
			nextArr = [];
			//генерация массива next
			for (let i = 0; i < countShowSlides; i++) {
				let randomNumber = Math.floor(Math.random() * 8);
				if(!nextArr.includes(randomNumber) && !currArr.includes(randomNumber)) {
					nextArr[i] = randomNumber;
				} else {
					i--;
				}
			}
			//console.log('forward past',pastArr);
			//console.log('forward curr',currArr);
			//console.log('forward next',nextArr);
		}

		//Смена направления назад.Т.е. клик влево, клик вправо. прокрутка влево
		function changeToBackward() {
			//console.log('changeToBackward');
			let tmp = [];
			tmp.push(...pastArr);
			pastArr = [];
			pastArr.push(...currArr);
			currArr = [];
			currArr.push(...tmp);
			for (let i = 0; i < countShowSlides; i++) {
				let randomNumber = Math.floor(Math.random() * 8);
				if(!nextArr.includes(randomNumber) && !currArr.includes(randomNumber)) {
					nextArr[i] = randomNumber;
				} else {
					i--;
				}
			}
		}


		//Прокрутка влево. Клик влево. Лента едет вправо
		function backward() {
			//console.log('backward');
			nextArr = [];
			nextArr.push(...currArr);
			currArr = [];
			currArr.push(...pastArr);
			//генерация массива past
			for (let i = 0; i < countShowSlides; i++) {
				let randomNumber = Math.floor(Math.random() * 8);
				if(!pastArr.includes(randomNumber) && !currArr.includes(randomNumber)) {
					pastArr[i] = randomNumber;
				} else {
					i--;
				}
			}
			//console.log('backward past',pastArr);
			//console.log('backward curr',currArr);
			//console.log('backward next',nextArr);
		}



		function changeToForward() {
			//console.log('changeToForward');
			let tmp = [];
			tmp.push(...nextArr);
			nextArr = [];
			nextArr.push(...currArr);
			currArr = [];
			currArr.push(...tmp);
			//генерация массива past
			for (let i = 0; i < countShowSlides; i++) {
				let randomNumber = Math.floor(Math.random() * 8);
				if(!pastArr.includes(randomNumber) && !currArr.includes(randomNumber)) {
					pastArr[i] = randomNumber;
				} else {
					i--;
				}
			}
		}


		function curr() {
			currArr.forEach(item => {
				let newItem = document.createElement('div');
				newItem.classList.add('slider__item');
				newItem.innerHTML = `
				<img src="${petsData[item].img}" alt="pet_photo" class="slider__img-pet">
				<div class="slider__name-pet">${petsData[item].name}</div>
				<button class="button button_hover slider__button">Learn more</button>
			`;

				//Popap
				newItem.addEventListener('click', () => {
					//console.log(item);
					document.querySelector('.modal__dialog').innerHTML = '';
					openModal(item + 1);
				});

				document.querySelector('#item-active').appendChild(newItem);
				//console.log('curr', petsData[item]);
			});
		}

		function past() {
			pastArr.forEach(item => {
				let newItem = document.createElement('div');
				newItem.classList.add('slider__item');
				newItem.innerHTML = `
				<img src="${petsData[item].img}" alt="pet_photo" class="slider__img-pet">
				<div class="slider__name-pet">${petsData[item].name}</div>
				<button class="button button_hover slider__button">Learn more</button>
			`;

				//Popap
				newItem.addEventListener('click', () => {
					//console.log(item);
					document.querySelector('.modal__dialog').innerHTML = '';
					openModal(item + 1);
				});


				document.querySelector('#item-left').appendChild(newItem);
				//console.log('past', petsData[item]);
			});
		}

		function next() {
			nextArr.forEach(item => {
				let newItem = document.createElement('div');
				newItem.classList.add('slider__item');
				newItem.innerHTML = `
				<img src="${petsData[item].img}" alt="pet_photo" class="slider__img-pet">
				<div class="slider__name-pet">${petsData[item].name}</div>
				<button class="button button_hover slider__button">Learn more</button>
			`;
				//Popap
				newItem.addEventListener('click', () => {
					//console.log(item);
					document.querySelector('.modal__dialog').innerHTML = '';
					openModal(item + 1);
				});

				document.querySelector('#item-right').appendChild(newItem);
				//console.log('next', petsData[item]);
			});

		}

		// init();
		// curr();
		// past();
		// next();




		prevButton.addEventListener('click', () => {
			slider.classList.add('transition-left');

			backward();

		});

		nextButton.addEventListener('click', () => {
			slider.classList.add('transition-right');

			forward();

		});


		slider.addEventListener('animationend', (animation) => {

			// let changedItem;

			if(animation.animationName === 'move-left' || animation.animationName === 'move-left768' || animation.animationName === 'move-left320') {



				slider.classList.remove('transition-left');

				activeItem.innerHTML = '';
				leftItem.innerHTML = '';
				rightItem.innerHTML = '';

				curr();
				past();
				next();


			}

			if(animation.animationName === 'move-right' || animation.animationName === 'move-right768' || animation.animationName === 'move-right320') {



				slider.classList.remove('transition-right');

				activeItem.innerHTML = '';
				leftItem.innerHTML = '';
				rightItem.innerHTML = '';

				curr();
				past();
				next();

			}

		});

		window.addEventListener('resize', () => {
			//console.log(window.screen.availWidth);
			if (window.screen.availWidth >= 993) {

				countShowSlides = 3;

				activeItem.innerHTML = '';
				leftItem.innerHTML = '';
				rightItem.innerHTML = '';

				// curr();
				// past();
				// next();
			}

			if (window.screen.availWidth <= 992 && window.screen.availWidth >= 768) {


				countShowSlides = 2;

				activeItem.innerHTML = '';
				leftItem.innerHTML = '';
				rightItem.innerHTML = '';

				// curr();
				// past();
				// next();
			}
			if (window.screen.availWidth <= 767) {

				countShowSlides = 1;

				activeItem.innerHTML = '';
				leftItem.innerHTML = '';
				rightItem.innerHTML = '';

				// curr();
				// past();
				// next();

			}
		});


		// window.addEventListener('resize', () => {
		// 	//console.log(window.screen.availWidth);
		// 	if (window.screen.availWidth >= 993) {

		// 		countShowSlides = 3;

		// 		activeItem.innerHTML = '';
		// 		leftItem.innerHTML = '';
		// 		rightItem.innerHTML = '';

		// 		curr();
		// 		past();
		// 		next();
		// 	}

		// 	if (window.screen.availWidth <= 992 && window.screen.availWidth >= 768) {


		// 		countShowSlides = 2;

		// 		activeItem.innerHTML = '';
		// 		leftItem.innerHTML = '';
		// 		rightItem.innerHTML = '';

		// 		curr();
		// 		past();
		// 		next();
		// 	}
		// 	if (window.screen.availWidth <= 767) {

		// 		countShowSlides = 1;

		// 		activeItem.innerHTML = '';
		// 		leftItem.innerHTML = '';
		// 		rightItem.innerHTML = '';

		// 		curr();
		// 		past();
		// 		next();

		// 	}
		// });


		init();
		curr();
		past();
		next();


	}

	main();


	window.addEventListener('resize', () => {
		//console.log(window.screen.availWidth);
		if (window.screen.availWidth >= 993) {
			// countShowSlides = 3;
			main();
		}
		if (window.screen.availWidth <= 992 && window.screen.availWidth >= 768) {
			// countShowSlides = 2;
			main();
		}
		if (window.screen.availWidth <= 767) {
			// countShowSlides = 1;
			main();
		}
	});


	// // Popap
	const modal = document.querySelector('.modal');

	modal.addEventListener('click', (e) => {
		if (e.target === modal) {
			modal.classList.remove('modal__active');
			body.classList.remove('no-scroll');
		}
	});

	async function openModal(id) {
		const data = await getPets();
		//console.log(data[id - 1]);

		body.classList.add('no-scroll');

		modal.classList.add('modal__active');
		let modalWrapper = document.createElement('div');
		modalWrapper.classList.add('modal__wrapper');
		modalWrapper.innerHTML = `
			<img src="${data[id - 1].img}" alt="img_pet" class="modal__img">
			<div class="modal__content">
				<h2 class="modal__title">${data[id - 1].name}</h2>
				<div class="modal__subtitle">${data[id - 1].type} - ${data[id - 1].breed}</div>
				<div class="modal__description">${data[id - 1].description}</div>
				<ul class="pets__list">
					<li class="pets__item">
						<span>Age:</span> ${data[id - 1].age}
					</li>
					<li class="pets__item">
						<span>Inoculation:</span> ${data[id - 1].inoculations}
					</li>
					<li class="pets__item">
						<span>Diseases:</span> ${data[id - 1].diseases}
					</li>
					<li class="pets__item">
						<span>Parasites:</span> ${data[id - 1].parasites}
					</li>
				</ul>
			</div>
			<button class="modal__close"><img src="../../assets/close.svg" alt="close"></button>
		`;
		document.querySelector('.modal__dialog').appendChild(modalWrapper);

		document.querySelector('.modal__close').addEventListener('click', () => {
			modal.classList.remove('modal__active');
			body.classList.remove('no-scroll');
		});
	}


});

