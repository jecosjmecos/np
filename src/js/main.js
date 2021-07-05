$(document).ready(function () {
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
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
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
