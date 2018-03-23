if(window.location.toString().indexOf('info_page.html')>0) {

    ymaps.ready(createMap);

    function createMap () {
        var myMap = new ymaps.Map(
            'ContactsMap',
            {
                center: [54.62041446, 49.28167098],
                zoom: 5
            },
            {
                searchControlProvider: 'yandex#search'
            }
            ),
            menu = $('<ul class="Contacts-Menu"></ul>');
        $.getJSON('test.json', function (data) {
            for (var i = 0; i < data.length; i++) {
                createMenuGroup (data[i]);
            }
        });

        function createMenuGroup (group) {
            // Пункт меню.ymaps.
            var menuItem = $('<li class="Contacts-MenuElement"><a class="Contacts-HeadLink" href="#">' + group.name + '</a></li>');
                // Коллекция для геообъектов группы.
            var collection = new ymaps.GeoObjectCollection(null, {});
                // Контейнер для подменю.
            var submenu = $('<ul class="Contacts-Submenu"></ul>');

            myMap.geoObjects.add(collection);
            menuItem
                .append(submenu)
                // Добавляем пункт в меню.
                .appendTo(menu)
                // По клику удаляем/добавляем коллекцию на карту и скрываем/отображаем подменю.
                .find('a')
                .bind('click', function () {
                    if (collection.getParent()) {
                        myMap.geoObjects.remove(collection);
                        submenu.hide();
                    } else {
                        myMap.geoObjects.add(collection);
                        submenu.show();
                    }
                });
            for (var j = 0, m = group.items.length; j < m; j++) {
                createSubMenu (group.items[j], collection, submenu);
            }
        }
        function createSubMenu (item, collection, submenu) {
            // Пункт подменю.
            var submenuItem = $('<li class="Contacts-Element">' +
                '<a href="#" class="Contacts-ElementHead">' + item.name + '</a>' +
                '<p class="Contacts-Address">' + item.address + '</p>' +
                '<div class="Contacts-OrganizationInfo">' +
                createPhone(item.phone) +
                createGraff(item.graff) +
                '</div>' +
                '</li>'),
                // Создаем метку.
                placemark = new ymaps.Placemark(
                    [item.latitude, item.longitude],
                    {
                        hintContent: item.name,
                        balloonContentHeader: item.name,
                        balloonContentBody: item.address,
                        balloonContentFooter: '<div class = "Balloon-Footer">' + createPhone(item.phone) + createGraff(item.graff) + '</div>'
                    },
                    {
                        iconLayout: 'default#image',
                        iconImageHref: item.iconImageHref,
                        iconImageSize: item.iconImageSize,
                        iconImageOffset: item.iconImageOffset
                    }
                );

            // Добавляем метку в коллекцию.
            collection.add(placemark);
            // Добавляем пункт в подменю.
            submenuItem
                .appendTo(submenu)
                // При клике по пункту подменю открываем/закрываем баллун у метки.
                .find('a')
                .bind('click', function () {
                    if (!placemark.balloon.isOpen()) {
                        placemark.balloon.open();
                    } else {
                        placemark.balloon.close();
                    }
                    return false;
                });
        }

        function createPhone(data) {
            var info = '<div class = "Contacts-InfoPhone">';
            info += '<p class = "Contacts-Name">Телефоны</p>';
            for (var i = 0; i < data.length; i++) {
                info += '<p class = "Contacts-Item">' + data[i] + '</p>';
            }
            info += '</div>';
            return info;
        }

        function createGraff(data) {
            var info = '<div class = "Contacts-InfoGraff">';
            info += '<p class = "Contacts-Name">График работы</p>';
            for (var i = 0; i < data.length; i++) {
                info += '<p class = "Contacts-Item">' + data[i] + '</p>';
            }
            info += '</div>';
            return info;
        }
        // Добавляем меню в тэг BODY.
        //menu.appendTo($('.Contacts-MenuWrap'));
        $('.Contacts-MenuWrap').html(menu);
        // Выставляем масштаб карты чтобы были видны все группы.
        //myMap.setBounds(myMap.geoObjects.getBounds());
    }
}

$('.Contacts-MenuWrap').on('DOMSubtreeModified', addScrol());

function addScrol() {
    $(".Contacts-MenuWrap").mCustomScrollbar({
        theme: "client",
        scrollbarPosition: "outside"
    });
}

