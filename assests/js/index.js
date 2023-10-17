
// let menu_bar = document.getElementsByClassName("toggler-icon")[0]; // Get the first element with the class "toggler-icon"
// let header_bar = document.getElementsByClassName("header_section")[0]; // Get the first element with the class "header_section"

// menu_bar.addEventListener('click', () => {
//     header_bar.classList.toggle('showing');
// });

$(document).ready(function () {
    $('.post-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow:$('.next'),
        prevArrow:$('.prev'),
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
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

   
    });
})