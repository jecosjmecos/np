$(document).ready(function () {
  /*
  * Cabinet header
  */
    $('#cabinetBurger').click(function(){
      $.fancybox.open({
        src: '#cabinetNav',
        smallBtn: false,
        toolbar: false,
        baseClass: 'fancybox-cabinet-menu',
        animationEffect   : 'slide-in-out',
        animationDuration : 600,
      });
    });
  /*
  * Cabinet header end
  */
  /*
  * Registration page
  */
    $('.registration-content_form__switch button').click(function(){
      $('.registration-content_form__switch button').removeClass('active');
      $(this).addClass('active');
    });

    //view pass
    $('.form_pass .view-pass').click(function(e){
      e.preventDefault();
      $(this).toggleClass('active');
      let input = $(this).parents('.form_pass').find('input');

      if(input.attr('type') == 'password'){
        $(this).parents('.form_pass').find('input').attr('type', 'text');
      }else{
        $(this).parents('.form_pass').find('input').attr('type', 'password');
      }
    });
  /*
  * Registration page end
  */

  /*
  * Cabinet page
  */

  $('#sectionsSlider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1800,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 577,
      settings: {
        slidesToShow: 1,
        autoHeight: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  })
  .on('setPosition', function (event, slick) {
    slick.$slides.css('height', slick.$slideTrack.height() + 'px');
  });;

  /*
  * Cabinet page end
  */

  /*
  * Checkout page
  */
 $('a.payment-checkout__all .payment-checkout__item-container').click(function(){
  $('a.payment-checkout__item-container').parents('.payment-checkout__item').removeClass('active');
  $(this).parents('.payment-checkout__item').addClass('active');
 });
 
 /*
  * Checkout page end
  */
});

window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  function bindModal(popupItem, openBtnItem, closeBtnItem, linksItem) {
    const modal = document.querySelector(popupItem);
    const openBtn = document.querySelector(openBtnItem);
    const closeBtn = document.querySelector(closeBtnItem);
    const links = document.querySelectorAll(linksItem);
    const body = document.querySelector("body");

    function openModal() {
      modal.classList.toggle("show");
      body.style.overflow = "hidden";
    }

    function closeModal() {
      modal.classList.toggle("show");
      body.style.overflow = "";
    }

    if (openBtn) {
      openBtn.addEventListener("click", () => {
        openModal();
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        closeModal();
      });
    }

    if (links) {
      links.forEach((item) => {
        item.addEventListener("click", () => {
          closeModal();
        });
      });
    }
  }

  bindModal(
    ".popup",
    ".header__burger",
    ".popup__close",
    ".popup .popup__item"
  );
});
