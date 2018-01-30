/* TODO тут короче надо написать скрип для фиксации анкора, иначе я забуду завтра для чего это вообще
    $(function(){
        var fixHeader = 200;
        $(window).scroll(function() {
            var scroll = getCurrentScroll();
            if ( scroll >= fixHeader ) {
                $('.topbar').slideUp(400);
                $('.primary-menu__fix-logo').show();
                $('.burger-button').hide();
                $('.primary-menu__catalog-link').css('margin-left', '15px');
                $('.primary-menu').css('box-shadow', '0 10px 25px rgba(0, 0, 0, 0.05)');
                $('.primary-menu__catalog-icon').css('right', '-5px')
            }
            else {
                $('.topbar').slideDown(200);
                $('.primary-menu__fix-logo').hide();
                $('.burger-button').show();
                $('.primary-menu__catalog-link').css('margin-left', '0px');
                $('.primary-menu').css('box-shadow', 'none');
                $('.primary-menu__catalog-icon').css('right', '10px')
            }
        });
        function getCurrentScroll() {
            return window.pageYOffset || document.documentElement.scrollTop;
        }
    });

*/