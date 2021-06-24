"use strict";

const burger = document.querySelector("#burger");
const headerNav = document.querySelector("#header-nav");

// По клику на бургер меняем класс ему и меню
burger.onclick = () => {
  burger.classList.toggle("checked");
  headerNav.classList.toggle("mobile");
};

// Флаг состояния анимации левой картинки в секции проектов
let isEndAnimateLeft = false;
// Флаг состояния анимации правой картинки в секции проектов
let isEndAnimateRight = false;
// Флаг состояния анимации маркера карты
let isMarkerOnMap = false;
// Карта
let map;

// Слушаем окно браузера во время скрола
window.addEventListener("scroll", () => {
  const projectImgLeft = document.querySelector("#project-img-left");
  const weDoSection = document.querySelector("#projects");
  const weDoCoordY = weDoSection.getBoundingClientRect().y;

  // Если анимации ещё не было и проскролено столько
  if (!isEndAnimateLeft && weDoCoordY < 80) {
    //добавить класс анимации
    projectImgLeft.classList.add("animate");
    //установить флаг, что анимация уже произошла и больше не нужна
    isEndAnimateLeft = true;
  }

  const projectImgRight = document.querySelector("#project-img-right");
  const projectsArticle = document.querySelector("#projects-article");
  const articleCoordY = projectsArticle.getBoundingClientRect().y;

  // Если анимации ещё не было и проскролено столько
  if (!isEndAnimateRight && articleCoordY < 170) {
    //добавить класс анимации
    projectImgRight.classList.add("animate");
    //установить флаг, что анимация уже произошла и больше не нужна
    isEndAnimateRight = true;
  }

  const myMap = document.querySelector("#map");
  const mapCoordY = myMap.getBoundingClientRect().y;

  // Если анимации маркера ещё не было и проскролено столько
  if (!isMarkerOnMap && mapCoordY < 160) {
    //Инициализируем маркер
    let marker = new google.maps.Marker({
      map: map,
      draggable: true,
      animation: google.maps.Animation.DROP,
      position: { lat: 48.4153146, lng: 35.0694236 },
      icon: "./img/pin.PNG",
    });
    //Инициализируем инфо-сообщение всплывающее при клике на маркер
    const infowindow = new google.maps.InfoWindow({
      content: "<h1>I am here!</h1>",
    });
    // По клику маркер начинает прыгать
    marker.addListener("click", toggleBounce);
    // По клику всплывает сообщение
    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });

    // Функция прыгающего маркера
    function toggleBounce() {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    }
    //установить флаг, что анимация маркера уже произошла и больше не нужна
    isMarkerOnMap = true;
  }
});

// Слайдер в первой секции
$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  });

  //Слайдер новостей
  $(".news__slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
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

// Получаем коллекцию маленьких картинок в Gallery
let img = document.querySelectorAll(".gallery__img");
//Преобразуем коллекцию в массив
let arr = [...img];
//Вешаем на каждую картинку событие клик
for (let item of arr) {
  item.onclick = changeImg;
}

// По клику меняет большую картинку в галерее
function changeImg() {
  let bigImg = document.querySelector("#big-img");
  let img = this.innerHTML;
  bigImg.innerHTML = img;
}

// Google map
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
