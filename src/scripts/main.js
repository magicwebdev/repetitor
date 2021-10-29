$(function() {
  $(".header__toggle-btn").on('click', function(){
      $(".header__toggle-btn--1").toggleClass("active");
      $(".header__toggle-btn--2").toggleClass("active");
      $(".header__toggle-btn--3").toggleClass("active");
      $(".header__menu").toggleClass("active");
      $(".header__menu-btn").toggleClass("active");
  });
});