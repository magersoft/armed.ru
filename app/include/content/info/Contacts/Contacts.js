if(window.location.toString().indexOf('info_page.html')>0) {

    ymaps.ready(init);

    function init() {
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
            menu = $('#ContactsTabs');

        $(function () {
            $.getJSON('test.json', function (data) {
                for (var i = 0; i < data.length; i++) {
                    createTabs(data[i]);
                }

            });

        });


        function createTabs(tabs) {

            var str = '<li class = "tabs__element">' +
                '<a class = "tabs__link Contacts-TabLink" href="#' + tabs.id + '">' + tabs.name + '</a></li>';
            $('#ContactsTabs').append(str);


            var menuItem = $('a[href="#' + tabs.id + '"]');
            var collection = new ymaps.GeoObjectCollection(null, {});
            if (tabs.id == 'stock') {
                myMap.geoObjects.add(collection);
                $(menuItem).css('color', "#000");
            }
            menuItem
                .bind('click', function () {

                    if (!(collection.getParent()) && $(menuItem.attr('href')).css('display') == 'none') {

                        myMap.geoObjects.add(collection);
                        $(menuItem.attr('href')).slideDown(400);
                        $(menuItem).css('color', "#000");
                    } else {

                        myMap.geoObjects.remove(collection);
                        $(menuItem.attr('href')).slideUp(400);
                        $(menuItem).css('color', "#ccc");
                    }
                    return false;
                });
            for (var j = 0; j < tabs.items.length; j++) {
                createContent(tabs.items[j], tabs.id, collection)
            }

        }

        function createContent(elements, id, collection) {
            var data = "";
            data += '<div class = "Contacts-Element">';
            data += '<a class = "Contacts-LinkAddress" href="#">' + elements.name + "</a>";
            data += '<p class = "Contacts-Address">' + elements.address + '</p>';
            data += '<div class = "Contacts-InfoOrganization">';
            var balloonContent = createPhone(elements.phone);
            balloonContent += createGraff(elements.graff);
            data += createPhone(elements.phone);
            data += createGraff(elements.graff);
            data += '</div>';
            data += '</div>';
            var placemark = new ymaps.Placemark(
                [elements.latitude, elements.longitude],
                {
                    hintContent: elements.name,
                    balloonContentHeader: elements.name,
                    balloonContentBody: elements.address,
                    balloonContentFooter: balloonContent
                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: elements.iconImageHref,
                    iconImageSize: elements.iconImageSize,
                    iconImageOffset: elements.iconImageOffset
                }
            );
            collection.add(placemark);
            var idApp = '#' + id;
            $(idApp).append(data);
            console.log(data);
            var linkAddress = $('<a class = "Contacts-LinkAddress" href="#">' + elements.name + "</a>");
            console.log(linkAddress);
            linkAddress
                .find('a')
                .bind('click', function () {
                    console.log('тыц');
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

        /*function tabsAdd() {
            $("#ContactsInfo").tabs({
                active: 0,
                classes: {
                    "ui-tabs-active": "tabs__active"
                }
            });
        }*/
        //console.log('2 ' + myMap.geoObjects.getBounds());
    }

    /*
    $(function () {
        $.getJSON('dataContactsMap.json', function (data) {
            var i = 0;
            var placemarks = [];

            $.each(data, function (key, value) {
                placemarks[i] = value;

                var addData = "<div class = \"Contacts-Data\">";
                var dataString = "<div class = \"Contacts-Wrap\">";

                addData += "<a class = \"Contacts-Link\" href=\"#\">" +
                    "" + placemarks[i].hintContent + "</a>" +
                    "<p class = \"Contacts-Address\">" +placemarks[i].balloonContentBody+ "</p>";


                for (var j = 0; j < placemarks[i].balloonContentFooter.length; j++){
                    if (j == 0) {
                        dataString += "<div class = \"Contacts-Graf\">" +
                            "<p class = \"Contacts-Head\">График работы</p>" +
                            "<p class = \"Contacts-DataInfo\">"+placemarks[i].balloonContentFooter[j]+"</p>" +
                            "</div>";
                    }
                    if (j == 1) {
                        dataString += "<div class = \"Contacts-Graf\">" +
                            "<p class = \"Contacts-Head\">Телефоны</p>" +
                            "<p class = \"Contacts-DataInfo\">"+placemarks[i].balloonContentFooter[j]+"</p>" +
                            "</div>";
                    }
                    //dataString += placemarks[i].balloonContentFooter[j];

                }
                dataString += "</div>";
                addData += dataString;
                addData += "</div>";


                $("#ContactsInfo").append(addData);
                i++;
            });
            var optionMap =
                {
                    center: [58.01014357, 45.17519359],
                    zoom: 5,
                    controls: []
                };

            var obj = [];

            /!*var clusterIcon = [
                {
                    href: 'images/Maps/Grroup_Item.svg',
                    size: [50, 70],
                    offset: [-25, -35]
                }];*!/

            var balashihaMap;
                //MyIconContentLayout;

            ymaps.ready(init);

            function init() {

                for (var i = 0; i < placemarks.length; i++) {
                    obj[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],
                        {
                            hintContent: placemarks[i].hintContent,
                            balloonContentHeader: placemarks[i].balloonContentHeader,
                            balloonContentBody: placemarks[i].balloonContentBody,
                            balloonContentFooter: placemarks[i].balloonContentFooter
                        },
                        {
                            iconLayout: 'default#image',
                            iconImageHref: placemarks[i].iconImageHref,
                            iconImageSize: placemarks[i].iconImageSize,
                            iconImageOffset: placemarks[i].iconImageOffset
                        });
                }

                //MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<em style="font-style: normal; font-size: 22px; color: #fff;">$[properties.geoObjects.length]</em>');


                balashihaMap = new ymaps.Map("ContactsMap", optionMap);
                /!*myClusterer = new ymaps.Clusterer({
                    clusterIcons: clusterIcon,
                    //clusterIconContentLayout: MyIconContentLayout
                    clusterIconContentLayout: null
                });*!/
                //balashihaMap.geoObjects.add(myClusterer);
                //myClusterer.add(obj)
                for (var j = 0; j < obj.length; j++) {
                    balashihaMap.geoObjects.add(obj[j]);
                }
                //balashihaMap.geoObjects.add(obj);
            }

        });
    });

    */


//Yandex map
    /*var placemarks = [
        {
            latitude: 55.78521417,
            longitude: 37.86572341,
            hintContent: 'Армед - Балашиха',
            balloonContentHeader: 'Офис, магазин, склад',
            balloonContentBody: 'Содержмое',
            balloonContentFooter: '<a href="#">LINK</a>'
        },
        {
            latitude: 55.78586710,
            longitude: 37.86291245,
            hintContent: 'Армед - Веб',
            balloonContentHeader: 'Веб разработка',
            balloonContentBody: 'Содержмое',
            balloonContentFooter: '<a href="#">LINK</a>'
        },
        {
            latitude: 55.60214591,
            longitude: 37.45327255,
            hintContent: 'Армед - Калужка',
            balloonContentHeader: 'Склад',
            balloonContentBody: 'Содержмое',
            balloonContentFooter: '<a href="#">LINK</a>'
        }
    ];*/


    $(".Contacts-Inner").mCustomScrollbar({
        theme: "client",
        scrollbarPosition: "outside"
    });

}