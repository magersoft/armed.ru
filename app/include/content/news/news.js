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

var gallery = document.getElementById("NewsGallery");

for (var i = 0; i < images.length; i++) {
    var  NewsGalleryWrapper = document.createElement("div");
     NewsGalleryWrapper.className = " NewsGallery-wrapper";

    var  NewsGallery = document.createElement("a");
     NewsGallery.className = " NewsGallery";
     NewsGallery.setAttribute('style', 'background-image:url(\"' + images[i] + '\");');
     NewsGallery.setAttribute('href', images[i]);

     NewsGalleryWrapper.appendChild( NewsGallery);
    gallery.appendChild( NewsGalleryWrapper);
}
console.log(gallery)