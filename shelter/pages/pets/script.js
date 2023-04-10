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


	//Pagination
	const itemWrapper = document.querySelector('.our-friends__wrapper');
	const nextPage = document.querySelector('.our-friends__next-page');
	const prevPage = document.querySelector('.our-friends__prev-page');
	const firstPage = document.querySelector('.our-friends__first-page');
	const lastPage = document.querySelector('.our-friends__last-page');
	const currentPageBtn = document.querySelector('.our-friends__current-page');

	async function getPets() {
		const result = await fetch('../../pets.json');
		const data = await result.json();
		//console.log('Start Data',data);
		return data;
	}



	async function main() {
		const data = await getPets();

		// let currentPage = 0;
		// let countItemsPerPage = 8;		//Постоянное кол-во животныъ на странице
		// let count = countItemsPerPage;  //Счетчик животных + / -
		const petsData = generatePetsData();  // массив из 48 объектов
		const countAllPets = petsData.length;
		let currentPage = 1;
		let countItemsPerPage = 8;		//Постоянное кол-во животныъ на странице
		// let count = countItemsPerPage;  //Меняющее кол-во карточек 8 + 8 + 8 , 6 + 6 + 6 и т.д.




		//Генерация рандомных 8 неповторяющихся цифр - животные
		function generateRandomValue(countItem) {
			let randomValues = [];
			for (let i = 0; i < countItem; i++) {
				let randomNumber = Math.floor(Math.random() * countItem);
				if(!randomValues.includes(randomNumber)) {
					randomValues[i] = randomNumber;
				} else {
					i--;
				}
			}
			return randomValues;
		}

		// //console.log('Вывод рандомных животных',randomValueArray);


		//Генерация массива из 48 объектов
		function generatePetsData() {

			let randomValues = []; //48 рандомных чисел 8 животных по 6 каждых
			for (let i = 0; i < 6; i++) {
				randomValues[i] = generateRandomValue(data.length); // не занес в переменную т.к. при каждом вызое массив должен быть разный.
				// randomValues[i] = randomValueArray;
			}
			randomValues = randomValues.flat();

			let generatePetsArray = [];

			for(let i = 0; i < randomValues.length; i++) {
				generatePetsArray[i] = data[randomValues[i]];
			}
			return generatePetsArray;
		}


		function showPets(petsData, countItemsPerPage, currentPage) {

			currentPageBtn.innerText = `${currentPage}`;
			//console.log('Текущая страница',currentPage);
			//console.log('Эл',currentPage * countItemsPerPage);
			// //console.log('Count',count);
			// count = countItemsPerPage * (currentPage + 1);
			// //console.log('123',count);
			itemWrapper.innerHTML = '';
			currentPage--;

			const start = countItemsPerPage * currentPage;
			const end = start + countItemsPerPage;
			const paginatedDate = petsData.slice(start, end);
			// //console.log('DATA',paginatedDate);
			paginatedDate.forEach(item => {
				let itemPet = document.createElement('div');
				itemPet.classList.add('our-friends__item');
				itemPet.innerHTML = `
					<img src="${item.img}" alt="pet_photo" class="our-friends__img-pet">
					<div class="our-friends__name-pet">${item.name}</div>
					<button class="button button_hover our-friends__button">Learn more</button>
				`;

				//Popap
				itemPet.addEventListener('click', () => {
					//console.log(item.id);
					document.querySelector('.modal__dialog').innerHTML = '';
					openModal(item.id);
				});
				//Popap

				itemWrapper.appendChild(itemPet);
			});
			return paginatedDate;
		}

		//console.log('petData',petsData);

		// showPets(petsData, countItemsPerPage, currentPage);



		function checkActiveButton() {


			// if (count === countItemsPerPage) {
			// 	//console.log('сейчас элементов count in chech active',count);
			// 	prevPage.classList.add('button_inactive');
			// 	firstPage.classList.add('button_inactive');
			// } else {
			// 	//console.log('сейчас элементов count in chech active 22',count);
			// 	prevPage.classList.remove('button_inactive');
			// 	firstPage.classList.remove('button_inactive');
			// }

			// if (count === countAllPets) {
			// 	// //console.log('count',count);
			// 	nextPage.classList.add('button_inactive');

			// 	lastPage.classList.add('button_inactive');
			// } else {
			// 	// //console.log('count',count);
			// 	nextPage.classList.remove('button_inactive');

			// 	lastPage.classList.remove('button_inactive');
			// }
			if (currentPage === 1) {
				// //console.log('сейчас элементов count in chech active',count);
				prevPage.classList.add('button_inactive');
				firstPage.classList.add('button_inactive');
			} else {
				// //console.log('сейчас элементов count in chech active 22',count);
				prevPage.classList.remove('button_inactive');
				firstPage.classList.remove('button_inactive');
			}

			if (countAllPets === currentPage * countItemsPerPage) {
				// //console.log('count',count);
				nextPage.classList.add('button_inactive');

				lastPage.classList.add('button_inactive');
			} else {
				// //console.log('count',count);
				nextPage.classList.remove('button_inactive');

				lastPage.classList.remove('button_inactive');
			}

		}

		nextPage.addEventListener('click', () => {
			currentPage += 1;
			// count += countItemsPerPage;
			// countItemsPerPage += countItemsPerPage;
			showPets(petsData, countItemsPerPage, currentPage);
			checkActiveButton();
		});

		prevPage.addEventListener('click', () => {
			currentPage -= 1;
			// countItemsPerPage += countItemsPerPage;
			// count -= countItemsPerPage;
			showPets(petsData, countItemsPerPage, currentPage);
			checkActiveButton();
		});

		firstPage.addEventListener('click', () => {
			currentPage = 1;
			showPets(petsData, countItemsPerPage, currentPage);
			// count = countItemsPerPage;
			checkActiveButton();
		});

		lastPage.addEventListener('click', () => {
			currentPage = countAllPets / countItemsPerPage;
			showPets(petsData, countItemsPerPage, currentPage);
			// count = countAllPets;
			checkActiveButton();
		});


		// nextPage.addEventListener('click', () => {
		// 	currentPage += 1;
		// 	// count += countItemsPerPage;
		// 	// countItemsPerPage += countItemsPerPage;
		// 	showPets(petsData, countItemsPerPage, currentPage);
		// 	checkActiveButton();
		// });

		// prevPage.addEventListener('click', () => {
		// 	currentPage -= 1;
		// 	// countItemsPerPage += countItemsPerPage;
		// 	// count -= countItemsPerPage;
		// 	showPets(petsData, countItemsPerPage, currentPage);
		// 	checkActiveButton();
		// });

		// firstPage.addEventListener('click', () => {
		// 	currentPage = 0;
		// 	showPets(petsData, countItemsPerPage, currentPage);
		// 	// count = countItemsPerPage;
		// 	checkActiveButton();
		// });

		// lastPage.addEventListener('click', () => {
		// 	currentPage = (countAllPets / countItemsPerPage) - 1;
		// 	showPets(petsData, countItemsPerPage, currentPage);
		// 	// count = countAllPets;
		// 	checkActiveButton();
		// });


		// checkActiveButton();

		showPets(petsData, countItemsPerPage, currentPage);

		checkActiveButton();


		// if (window.screen.availWidth >= 992) {

		// 	countItemsPerPage = 8;
		// 	count = countItemsPerPage;
		// 	if (currentPage >= 7) {
		// 		currentPage = 5;
		// 		showPets(petsData, countItemsPerPage, currentPage);
		// 	} else {
		// 		showPets(petsData, countItemsPerPage, currentPage);
		// 	}

		// }

		// if (window.screen.availWidth <= 992 && window.screen.availWidth >= 768) {

		// 	countItemsPerPage = 6;
		// 	count = countItemsPerPage;
		// 	//console.log(currentPage);
		// 	if (currentPage >= 5) {
		// 		currentPage = 7;
		// 		showPets(petsData, countItemsPerPage, currentPage);
		// 	} else {
		// 		showPets(petsData, countItemsPerPage, currentPage);
		// 	}


		// }
		// if (window.screen.availWidth <= 767) {

		// 	countItemsPerPage = 3;
		// 	count = countItemsPerPage;
		// 	if (currentPage >= 5) {
		// 		currentPage = 15;
		// 		showPets(petsData, countItemsPerPage, currentPage);
		// 	} else {
		// 		showPets(petsData, countItemsPerPage, currentPage);
		// 	}
		// }

		if (window.screen.availWidth >= 993) {

			countItemsPerPage = 8;
			// currentPage = countAllPets / countItemsPerPage;
			if (countItemsPerPage * currentPage > countAllPets) {
				currentPage = countAllPets / countItemsPerPage;
			}
			showPets(petsData, countItemsPerPage, currentPage);

			checkActiveButton();
		}

		if (window.screen.availWidth <= 992 && window.screen.availWidth >= 768) {

			countItemsPerPage = 6;

			// currentPage = countAllPets / countItemsPerPage;

			if (countItemsPerPage * currentPage > countAllPets) {
				currentPage = countAllPets / countItemsPerPage;
			}
			showPets(petsData, countItemsPerPage, currentPage);
			checkActiveButton();


		}
		if (window.screen.availWidth <= 767) {

			countItemsPerPage = 3;
			showPets(petsData, countItemsPerPage, currentPage);

		}

		window.addEventListener('resize', () => {
			//console.log(window.screen.availWidth);
			if (window.screen.availWidth >= 993) {

				countItemsPerPage = 8;
				// currentPage = countAllPets / countItemsPerPage;
				if (countItemsPerPage * currentPage > countAllPets) {
					currentPage = countAllPets / countItemsPerPage;
				}
				showPets(petsData, countItemsPerPage, currentPage);

				checkActiveButton();
			}

			if (window.screen.availWidth <= 992 && window.screen.availWidth >= 768) {

				countItemsPerPage = 6;

				// currentPage = countAllPets / countItemsPerPage;

				if (countItemsPerPage * currentPage > countAllPets) {
					currentPage = countAllPets / countItemsPerPage;
				}
				showPets(petsData, countItemsPerPage, currentPage);
				checkActiveButton();


			}
			if (window.screen.availWidth <= 767) {

				countItemsPerPage = 3;
				showPets(petsData, countItemsPerPage, currentPage);

			}
		});
	}


	main();

	//Popap
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


