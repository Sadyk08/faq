// function f1() {
//     alert("привет мой первый js код")
// }

// $(document).ready(function(){
//     $('.cart').click(function(){
//         $(this).toggleClass('open');
//     })
// });
// $(document).ready(function() {
//     $(".cart").click(function(){
//         $(".blcok_pay").show().toggleClass('open');
//     });
// });

// console.log("hello");
// alert("привет мой первый js код")


$(document).ready(function () {

    $('.owl-carousel ').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,


        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });
});
$(document).ready(function () {
    $('.owl-carousel-2').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ['<', '>'],

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});



