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





/* ********** Footer Menu ********** */

const $footer_menu = $('.footer_menu');

$.each($footer_menu, function() {
  const $menu = $(this);
        $title = $menu.find('.footer_menu__title');

  $title.on('click', function(evt) {
    evt.preventDefault();

    $menu.toggleClass('open');
  })
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