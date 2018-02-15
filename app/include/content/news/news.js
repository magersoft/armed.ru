var images = [
    "../images/news/1.png",
    "../images/news/2.png",
    "../images/news/3.png",
    "../images/news/4.png",
    "../images/news/5.png",
    "../images/news/1.png",
    "../images/news/2.png",
    "../images/news/3.png",
    "../images/news/4.png"
];
var alt = [
    "Фотография 1",
    "Фотография 2",
    "Фотография 3",
    "Фотография 4",
    "Фотография 5",
    "Фотография 6",
    "Фотография 7",
    "Фотография 8",
    "Фотография 9"
];
var gallery = document.getElementById("NewsGallery");

if (gallery) {
    for (var i = 0; i < images.length; i++) {
        var NewsGalleryWrapper = document.createElement("a");
        NewsGalleryWrapper.className = "NewsGallery-wrapper";
        NewsGalleryWrapper.setAttribute('href', images[i]);
        NewsGalleryWrapper.setAttribute('data-lightbox','roadtrip');
        NewsGalleryWrapper.setAttribute('data-title', alt[i]);

        var NewsGallery = document.createElement("img");
        NewsGallery.className = " NewsGallery";
        NewsGallery.setAttribute('style', 'background-image:url(\"' + images[i] + '\");');


        NewsGalleryWrapper.appendChild(NewsGallery);
        gallery.appendChild(NewsGalleryWrapper);
    }
}
lightbox.option({
    albumLabel: " ",
    alwaysShowNavOnTouchDevices: true
    }
);
