function clouseCodModal () {
    $("#modal_Auth").fadeOut(400);
    $('body').off('wheel');
    $(document).off('keydown');
    $('.home').removeClass('blurBody');
}


if (document.getElementById('cod')) {
    $('#cod').keyup(function () {
       if ($(this).prop('value').length == 4) {
           if ($(this).prop('value') != 1234) {
               $("#cod").notify(
                   "Код не верен",
                   {
                       position:"top left",
                       style: 'myAlert',
                       autoHide: true,
                       autoHideDelay: 3000
                   }
               );
           } else {
               $("#cod").notify(
                   "Через секунду вы будете перенаправлены на сайт",
                   {
                       position:"top left",
                       style: 'my',
                       autoHide: true,
                       autoHideDelay: 3000
                   }
               );
               setTimeout(clouseCodModal, 1000);

           }
       } else {
           $("#cod").notify(
               "Вы ввели не все цифры",
               {
                   position:"top left",
                   style: 'myAlert',
                   autoHide: true,
                   autoHideDelay: 3000
               }
           );
       }
    });
}

