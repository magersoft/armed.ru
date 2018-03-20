//json parcer
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

        /*var clusterIcon = [
            {
                href: 'images/Maps/Grroup_Item.svg',
                size: [50, 70],
                offset: [-25, -35]
            }];*/

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
            /*myClusterer = new ymaps.Clusterer({
                clusterIcons: clusterIcon,
                //clusterIconContentLayout: MyIconContentLayout
                clusterIconContentLayout: null
            });*/
            //balashihaMap.geoObjects.add(myClusterer);
            //myClusterer.add(obj)
            for (var j = 0; j < obj.length; j++) {
                balashihaMap.geoObjects.add(obj[j]);
            }
            //balashihaMap.geoObjects.add(obj);
        }

    });
});




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
