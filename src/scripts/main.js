$(function() {
  // отслеживаем нажатие кнопки меню
  $(".header__toggle-btn").on('click', function(){
      $(".header__toggle-btn--1").toggleClass("active");
      $(".header__toggle-btn--2").toggleClass("active");
      $(".header__toggle-btn--3").toggleClass("active");
      $(".header__menu").toggleClass("active");
      $(".header__menu-btn").toggleClass("active");
  });

  // отслеживаем изменение инпута file
  $('.order__form-input--download').change(function(){
    // если файл прикрепили то заносим значение value в переменную
    let fileResult = $(this).val();
    // и дальше передаем значение в инпут который под загрузчиком
    $(this).parent().find('.order__form-input--file').val(fileResult);
  });

  // отслеживаем изменение инпута date
  $('.order__form-input--datepick').change(function(){
    // если файл прикрепили то заносим значение value в переменную
    let fileResult = $(this).val();
    // и дальше передаем значение в инпут который под загрузчиком
    $(this).parent().find('.order__form-input--date').val(fileResult);
  });

  // отслеживаем изменение select
  $('.order__form-input--select').change(function(){
    $(this).css('color', '#262727');
  });

});