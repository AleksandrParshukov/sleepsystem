/* ********** Swipers ********** */

const LOCATIONS = ['"ГРАНД КАНЬОН"', '"МЕБЕЛЬНЫЙ КОНТИНЕНТ"', '"МЕБЕЛЬ СИТИ 2"'];

const location_swiper = new Swiper ('.location__swiper', {
  direction: 'horizontal',
  loop: true,
  effect: 'fade',
  fadeEffect: {
      crossFade: true
    },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (LOCATIONS[index]) + '</span>';
      },
  },
  breakpoints: {
    // when window width is >= 320px
    992: {
      direction: 'vertical',
    },
  }
})

const reviews_swiper = new Swiper ('.reviews__list', {
  loop: true,
  slidesPerView: "auto",
  navigation: {
    nextEl: '.reviews__control--next',
    prevEl: '.reviews__control--prev',
  },
})

const certificate__promotions_swiper = new Swiper ('.certificate__promotions .promotions__list', {
  loop: true,
  slidesPerView: "auto",
  navigation: {
    nextEl: '.reviews__control--next',
    prevEl: '.reviews__control--prev',
  },
})

const recommendations_swiper = new Swiper ('.recommendations__list', {
  loop: true,
  slidesPerView: "auto",
  navigation: {
    nextEl: '.recommendations__swiper_control--next',
    prevEl: '.recommendations__swiper_control--prev',
  },
})

$.each($('.contacts__swiper'), function() {
  console.log($(this).attr('id'))
  const contacts_swiper = new Swiper (`#${$(this).attr('id')}`, {
    loop: true,
    slidesPerView: "auto",
    navigation: {
      nextEl: `#${$(this).attr('id')} .contacts__swiper_next`,
      prevEl: `#${$(this).attr('id')} .contacts__swiper_prev`,
    },
  })
})





/* ********** Filter ********** */
const $filter__dropdown = $('.filter__dropdown');

$.each($filter__dropdown, function() {
  const $dropdown = $(this),
        $title = $dropdown.find('.filter__title');

  $title.on('click', function(evt) {
    evt.preventDefault();

    $dropdown.toggleClass('open');
  })
})



/* ********** Header Menu ********** */

const $header__open_menu = $('.header__open_menu'),
      $header__close_menu = $('.header__close_menu'),
      $dropdown_links = $('.main_nav__item--dropdown .main_nav__link'),
      $submenu__close_btn = $('.submenu__close_btn'),
      $header__main_nav_container = $('.header__main_nav_container'),
      $header__search_btn = $('.header__search_btn');

$header__open_menu.on('click', function(evt) {
  evt.preventDefault();

  $header__main_nav_container.addClass('open');
})

$header__close_menu.on('click', function(evt) {
  evt.preventDefault();

  $header__main_nav_container.removeClass('open');
})

$header__search_btn.on('click', function(evt) {
  evt.preventDefault();

  $header__search_btn.parent().toggleClass('open');
})

$dropdown_links.on('click', function(evt) {
  evt.preventDefault();

  $(this).closest('.main_nav__item').find('.submenu').addClass('open');
  $('body').addClass('modal_open');
})

$submenu__close_btn.on('click', function(evt) {
  evt.preventDefault();

  $submenu__close_btn.closest('.submenu').removeClass('open');
  $('body').removeClass('modal_open');
})





/* ********** Footer ********** */

const $footer_menu = $('.footer_menu'),
      $footer_control = $('.footer_control'),
      $footer_control__submenu_link = $footer_control.find('.footer_control__submenu_link'),
      $footer_control__submenu_close = $footer_control.find('.footer_control__submenu_close');

$.each($footer_menu, function() {
  const $menu = $(this);
        $title = $menu.find('.footer_menu__title');

  $title.on('click', function(evt) {
    evt.preventDefault();

    $menu.toggleClass('open');
  })
})

$footer_control__submenu_link.on('click', function(evt) {
  evt.preventDefault();

  $(this).parent().find('.footer_control__submenu').addClass('open');
})

$footer_control__submenu_close.on('click', function(evt) {
  evt.preventDefault();

  $(this).closest('.footer_control__submenu').removeClass('open');
})





/* ********** Materials ********** */

const $material_page__dropdown = $('.material_page__dropdown');

$.each($material_page__dropdown, function() {
  const $dropdown = $(this);
        $caption = $dropdown.find('.material_page__caption');

  $caption.on('click', function(evt) {
    evt.preventDefault();

    $dropdown.toggleClass('open');
  })
})





/* ********** Product Page ********** */

const INFO_SECTIONS = ['Описание', 'Характеристики', 'Материалы', 'Преимущества', 'Отзывы', 'Вопрос-ответ'];
const INFO_SECTIONS_MOBILE1 = ['Описание', 'Характеристики', 'Преимущества'];
const INFO_SECTIONS_MOBILE2 = ['Отзывы', 'Вопрос-ответ', 'Материалы'];

const $big_img = $('.product_page__big_image'),
      $product_page__size_wrap = $('.product_page__size_wrap'),
      $product_page__size_caption = $product_page__size_wrap.find('.product_page__size_caption'),
      $product_page__size_list = $product_page__size_wrap.find('.product_page__size_list');

const product_page__swiper = new Swiper ('.product_page__swiper', {
  direction: 'horizontal',
  loop: false,
  navigation: {
    nextEl: '.product_page__swiper_next',
    prevEl: '.product_page__swiper_prev',
  },
  slidesPerView: 3,
  breakpoints: {
    992: {
      slidesPerView: 'auto',
    },
  },
})

$('.product_page__swiper .product_page__image').on('click', function() {
  const img_path = $(this).attr("src");

  $big_img.attr("src", img_path);
})

const info_swiper1 = new Swiper ('.info__row--desktop', {
  allowTouchMove: false,
  autoHeight: true,
  loop: false,
  effect: 'fade',
  fadeEffect: {
      crossFade: true
    },
  pagination: {
    el: '.info__paginnation',
    clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + ' info__page_btn">' + (INFO_SECTIONS[index]) + '</span>';
      },
  },
})

const info_swiper2 = new Swiper ('.info__row--mobile1', {
  allowTouchMove: false,
  autoHeight: true,
  loop: false,
  effect: 'fade',
  fadeEffect: {
      crossFade: true
    },
  pagination: {
    el: '.info__paginnation',
    clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + ' info__page_btn">' + (INFO_SECTIONS_MOBILE1[index]) + '</span>';
      },
  },
})

const info_swiper3 = new Swiper ('.info__row--mobile2', {
  allowTouchMove: false,
  autoHeight: true,
  loop: false,
  effect: 'fade',
  fadeEffect: {
      crossFade: true
    },
  pagination: {
    el: '.info__paginnation',
    clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + ' info__page_btn">' + (INFO_SECTIONS_MOBILE2[index]) + '</span>';
      },
  },
})

$product_page__size_caption.on('click', function(evt) {
  evt.preventDefault();

  $product_page__size_wrap.toggleClass('open');
})