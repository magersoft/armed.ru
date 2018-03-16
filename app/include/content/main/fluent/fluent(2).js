// // var business = $('.fluent__item-business');
// // var home = $('.fluent__item-home');
// // var care = $('.fluent__item-care');
// // var pro = $('.fluent__item-pro');
// $('.fluent__item-card').click(function () {
//     var id = $(this).attr('id');
//     var fon = ('.fluent__inner-background');
//     // $('.fluent__inner-background').animate({'opacity': '0.7'}, 400);
//     // $('.fluent__inner-background').animate({'opacity': '1'}, 400);
//     //console.log($('.fluent__inner-background').css('background-image','url(\'images/main/fluent/bis-big-bg.jpg\''));
//     if (id == "fluentBusiness"){
//         $(fon).animate({'opacity': '0.3'}, 200);
//         function back() {
//             $(fon).css('background-image','url(\'images/main/fluent/bis-big-bg.png\'');
//         }
//         function start() {
//             $(fon).animate({'opacity': '1'}, 200);
//         }
//         setTimeout(back, 200);
//         setTimeout(start, 280);
//         $('.fluent__info').addClass('fluent__info-hide');
//         $('.fluent__info-business').removeClass('fluent__info-hide');
//     }
//     if (id == "fluentHome"){
//         $(fon).animate({'opacity': '0.3'}, 200);
//         function back() {
//             $(fon).css('background-image', 'url(\'images/main/fluent/home-big-bg.png\'');
//         }
//         function start() {
//             $(fon).animate({'opacity': '1'}, 200);
//         }
//         setTimeout(back, 200);
//         setTimeout(start, 280);
//         $('.fluent__info').addClass('fluent__info-hide');
//         $('.fluent__info-home').removeClass('fluent__info-hide');
//     }
//     if (id == "fluentCare"){
//         $(fon).animate({'opacity': '0.3'}, 200);
//         function back() {
//             $(fon).css('background-image', 'url(\'images/main/fluent/care-big-bg.png\'');
//         }
//         function start() {
//             $(fon).animate({'opacity': '1'}, 200);
//         }
//         setTimeout(back, 200);
//         setTimeout(start, 280);
//         $('.fluent__info').addClass('fluent__info-hide');
//         $('.fluent__info-care').removeClass('fluent__info-hide');
//     }
//     if (id == "fluentPro"){
//         $(fon).animate({'opacity': '0.3'}, 200);
//         function back() {
//             $(fon).css('background-image', 'url(\'images/main/fluent/pro-big-bg.png\'');
//         }
//         function start() {
//             $(fon).animate({'opacity': '1'}, 200);
//         }
//         setTimeout(back, 200);
//         setTimeout(start, 280);
//         $('.fluent__info').addClass('fluent__info-hide');
//         $('.fluent__info-pro').removeClass('fluent__info-hide');
//     }
//     $('.fluent__item-card').removeClass('fluent__active');
//     $(this).toggleClass('fluent__active');
//     // $('.fluent__inner-background').css('background', fon);
//     // $('.fluent__inner-background').animate({'opacity': '0.7'}, 400);
//     // $('.fluent__inner-background').animate({'opacity': '1'}, 400);
//     //$(this)
//     //console.log(fon);
// });