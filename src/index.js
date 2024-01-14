
(function () {
  const cameraData = [
    {
      image: './images/png/canon_eos-5d-mark-III.png',
      title: 'Canon EOS 5D Mark III Body',
      description: 'Полнокадровая цифровая зеркальная камера, предназначенная для опытных любителей профессиональных фотографов и видеооператоров. Преемник успешной модели EOS 5D Mark II. Фотоаппарат имеет 22.3 Мп. CMOS-сенсор размером 36х24 мм, 14-битный процессор DIGIC 5+, 61-точечный автофокус.',
      price: 4400.00,
      discount: 27.2727
    },
    {
      image: './images/png/canon_eos-5d-mark-III.png',
      title: 'Canon EOS 5D Mark III Body',
      description: 'Полнокадровая цифровая зеркальная камера, предназначенная для опытных любителей, профессиональных фотографов.',
      price: 3200.00,
      discount: 0
    },
    {
      image: './images/png/canon_eos-5d-mark-III.png',
      title: 'Canon EOS 5D Mark III Body',
      description: 'Полнокадровая цифровая зеркальная камера, предназначенная для опытных любителей, профессиональных фотографов.',
      price: 3200.00,
      discount: 0
    },
    {
      image: './images/png/canon_eos-5d-mark-III.png',
      title: 'Canon EOS 5D Mark III Body',
      description: 'Полнокадровая цифровая зеркальная камера, предназначенная для опытных любителей, профессиональных фотографов.',
      price: 3200.00,
      discount: 0
    },
    {
      image: './images/png/canon_eos-5d-mark-III.png',
      title: 'Canon EOS 5D Mark III Body',
      description: 'Полнокадровая цифровая зеркальная камера, предназначенная для опытных любителей, профессиональных фотографов.',
      price: 3200.00,
      discount: 0
    },
    {
      image: './images/png/canon_eos-5d-mark-III.png',
      title: 'Canon EOS 5D Mark III Body',
      description: 'Полно кадловая цифровая зеркальная камера, предназначенная для опытных любителей.',
      price: 3200.00,
      discount: 0
    },
    {
      image: './images/png/canon_eos-5d-mark-III.png',
      title: 'Canon EOS 5D Mark III Body',
      description: 'Полнокадровая цифровая зеркальная камера.',
      price: 3200.00,
      discount: 0
    },
    {
      image: './images/png/canon_eos-5d-mark-III.png',
      title: 'Canon EOS 5D Mark III Body',
      description: 'Полнокадровая цифровая зеркальная камера, предназначенная для опытных любителей, профессиональных фотографов.',
      price: 3200.00,
      discount: 0
    },
    {
      image: './images/png/canon_eos-5d-mark-III.png',
      title: 'Canon EOS 5D Mark III Body',
      description: 'Полнокадровая цифровая зеркальная камера, предназначенная для опытных любителей, профессиональных фотографов.',
      price: 3200.00,
      discount: 0
    },
    {
      image: './images/png/canon_eos-5d-mark-III.png',
      title: 'Canon EOS 5D Mark III Body',
      description: 'Полнокадровая цифровая зеркальная камера, предназначенная для опытных любителей, профессиональных фотографов.',
      price: 3200.00,
      discount: 0
    },
    {
      image: './images/png/canon_eos-5d-mark-III.png',
      title: 'Canon EOS 5D Mark III Body',
      description: 'Полнокадровая цифровая зеркальная камера, предназначенная для опытных любителей, профессиональных фотографов.',
      price: 3200.00,
      discount: 0
    },
  ];

  const cartIcon = `<svg class="production__list-item-cart" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.3015 2.91311H3.0096L2.81202 0.652847C2.77971 0.28322 2.47804 0 2.11666 0H0.69816C0.312576 0 0 0.320979 0 0.716927C0 1.11288 0.312576 1.43385 0.69816 1.43385H1.47837C1.90475 6.31176 0.802785 -6.29581 2.28136 10.6204C2.33834 11.2825 2.68672 12.0009 3.28687 12.4891C2.20482 13.9081 3.19349 16 4.95361 16C6.4145 16 7.44488 14.5038 6.9439 13.0868H10.765C10.2647 14.502 11.2928 16 12.7553 16C13.9224 16 14.872 15.0249 14.872 13.8264C14.872 12.628 13.9224 11.6529 12.7553 11.6529H4.95834C4.428 11.6529 3.96585 11.3243 3.76638 10.8456L14.9239 10.1723C15.2285 10.1539 15.4862 9.93446 15.5603 9.63048L16.9789 3.80391C17.0888 3.35211 16.7558 2.91311 16.3015 2.91311ZM4.95361 14.5661C4.55646 14.5661 4.23331 14.2343 4.23331 13.8264C4.23331 13.4186 4.55646 13.0868 4.95361 13.0868C5.3508 13.0868 5.67395 13.4186 5.67395 13.8264C5.67395 14.2343 5.3508 14.5661 4.95361 14.5661ZM12.7553 14.5661C12.3581 14.5661 12.035 14.2343 12.035 13.8264C12.035 13.4186 12.3581 13.0868 12.7553 13.0868C13.1525 13.0868 13.4756 13.4186 13.4756 13.8264C13.4756 14.2343 13.1525 14.5661 12.7553 14.5661ZM14.33 8.77181L3.57844 9.42062L3.13494 4.34693H15.4073L14.33 8.77181Z"/></svg>`;
  
  const body = document.body;
  const burgerMenuButton = document.querySelector('.header__top-burger-button');
  const searchBlock = document.querySelector('.header__top-wrapper-search');
  const searchButton = document.querySelector('.header__top-search-button');
  const headerNav = document.querySelector('.header__nav');
  const closeSortButton = document.querySelector('.sort__form-close-button');
  const sortButton = document.querySelector('.top__button');
  const sortBlock = document.querySelector('.sort');
  const dropDownListButtons = document.querySelectorAll('.sort__form-button');
  const productionList = document.querySelector('.production__list');
  
  const burgerButtonHandler = (e) => headerNav.classList.toggle('active');
  const searchButtonHandler = (e) => searchBlock.classList.toggle('active');
  const buttonHandler = (e, button) => button.parentNode.classList.toggle('active');
  
  const closeSortButtonHandler = (e) => {
    sortBlock.classList.remove('active');
    body.classList.remove('hidden');
  };

  const sortButtonHandler = (e) => {
    sortBlock.classList.toggle('active');
    body.classList.toggle('hidden');
  };

  const convertNumberToPrice = (number) => {
    return number.toLocaleString('ru-RU', {minimumFractionDigits: 2, maximumFractionDigits: 2});
  };

  const createListElement = ({image, title, description, price, discount}) => {
    const imageAlt = image.split('/').pop().split('.')[0];
    const priceWithDiscount = convertNumberToPrice((price - price * discount / 100));
    const string = `
      <img class="production__list-item-image" src="${image}" alt="${imageAlt}">
      <h3 class="production__list-item-title">${title}</h3>
      <p class="production__list-item-description">${description}</p>
      <p class="production__list-item-old-price">${convertNumberToPrice(price)} руб.</p>
      <hr class="production__list-item-delimeter">
      <div class="production__list-item-wrapper">
        <p class="production__list-item-price">${priceWithDiscount} руб.</p>
        ${cartIcon}
      </div>
    `;

    const liElement = document.createElement('li');
    liElement.className = 'production__list-item';
    liElement.innerHTML = string;
    productionList.appendChild(liElement);
  };

  cameraData.forEach((data) => createListElement(data));

  searchButton.addEventListener('click', searchButtonHandler);
  burgerMenuButton.addEventListener('click', burgerButtonHandler);
  closeSortButton.addEventListener('click', closeSortButtonHandler);
  sortButton.addEventListener('click', sortButtonHandler);
  dropDownListButtons.forEach((button) => button.addEventListener('click', (e) => buttonHandler(e, button)));
}())