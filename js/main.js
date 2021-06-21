"use strict";

const burger = document.querySelector("#burger");
const headerNav = document.querySelector("#header-nav");

burger.onclick = () => {
  burger.classList.toggle("checked");
  headerNav.classList.toggle("mobile");
};

let isEndAnimateLeft = false;
let isEndAnimateRight = false;
let isMarkerOnMap = false;
let map;

window.addEventListener("scroll", () => {
  const weDoSection = document.querySelector("#projects");
  const projectsArticle = document.querySelector("#projects-article");
  const projectImgLeft = document.querySelector("#project-img-left");
  const projectImgRight = document.querySelector("#project-img-right");

  const fakeImgLeft = document.querySelector("#fake-img-left");
  const fakeImgRight = document.querySelector("#fake-img-right");
  let articleCoordY = projectsArticle.getBoundingClientRect().y;
  let weDoCoordY = weDoSection.getBoundingClientRect().y;

  if (!isEndAnimateLeft && weDoCoordY < 80) {
    projectImgLeft.classList.add("animate");
    setTimeout(() => {
      projectImgLeft.classList.remove("animate");
      projectImgLeft.classList.add("end-animate");
      fakeImgLeft.remove();
    }, 1500);
    isEndAnimateLeft = true;
  }

  if (!isEndAnimateRight && articleCoordY < 170) {
    projectImgRight.classList.add("animate");
    setTimeout(() => {
      projectImgRight.classList.remove("animate");
      projectImgRight.classList.add("end-animate");
      fakeImgRight.remove();
    }, 2000);
    isEndAnimateRight = true;
  }

  const myMap = document.querySelector("#map");
  let mapCoordY = myMap.getBoundingClientRect().y;

  if (!isMarkerOnMap && mapCoordY < 160) {
    let marker = new google.maps.Marker({
      map: map,
      draggable: true,
      animation: google.maps.Animation.DROP,
      position: { lat: 48.4153146, lng: 35.0694236 },
      icon: "./img/pin.PNG",
    });
    const infowindow = new google.maps.InfoWindow({
      content: "<h1>I am here!</h1>",
    });
    marker.addListener("click", toggleBounce);
    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });

    function toggleBounce() {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    }

    isMarkerOnMap = true;
  }
});

$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    autoplay: false,
    centerPadding: "20px",
  });

  $(".news__slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    autoplay: false,
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          arrows: true,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1020,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 670,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "0",
          slidesToShow: 1,
        },
      },
    ],
  });
});

let img = document.querySelectorAll(".gallery__img");
let arr = [...img];
for (let item of arr) {
  item.onclick = changeImg;
}
// По клику меняет большую картинку в галерее
function changeImg() {
  let bigImg = document.querySelector("#big-img");
  let img = this.innerHTML;
  bigImg.innerHTML = img;
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 48.4153146, lng: 35.0694236 },
    zoom: 16,
    styles: [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
      },
    ],
  });
}
