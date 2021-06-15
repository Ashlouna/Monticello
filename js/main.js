"use strict";

$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        autoplay: false,
        centerPadding: "20px",
    //     responsive: [
    // {
    //   breakpoint: 992,
    //   settings: {
    //     arrows: false,
    //     centerMode: true,
    //     centerPadding: '40px',
    //     slidesToShow: 2
    //   }
    // },
    // {
    //   breakpoint: 768,
    //   settings: {
    //     arrows: false,
    //     centerMode: true,
    //     centerPadding: '40px',
    //     slidesToShow: 1
    //   }
    //         },
    // {
    //   breakpoint: 480,
    //   settings: {
    //     arrows: false,
    //     centerMode: true,
    //     centerPadding: "0",
    //     slidesToShow: 1
    //   }
    // }
    //     ],
        
  })  
})


// let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: 50.411, lng: 30.544 },
//       zoom: 6,
//     styles: [
//       { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
//       { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
//       { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
//       {
//         featureType: "administrative.locality",
//         elementType: "labels.text.fill",
//         stylers: [{ color: "#d59563" }],
//       },
//       {
//         featureType: "poi",
//         elementType: "labels.text.fill",
//         stylers: [{ color: "#d59563" }],
//       },
//       {
//         featureType: "poi.park",
//         elementType: "geometry",
//         stylers: [{ color: "#263c3f" }],
//       },
//       {
//         featureType: "poi.park",
//         elementType: "labels.text.fill",
//         stylers: [{ color: "#6b9a76" }],
//       },
//       {
//         featureType: "road",
//         elementType: "geometry",
//         stylers: [{ color: "#38414e" }],
//       },
//       {
//         featureType: "road",
//         elementType: "geometry.stroke",
//         stylers: [{ color: "#212a37" }],
//       },
//       {
//         featureType: "road",
//         elementType: "labels.text.fill",
//         stylers: [{ color: "#9ca5b3" }],
//       },
//       {
//         featureType: "road.highway",
//         elementType: "geometry",
//         stylers: [{ color: "#746855" }],
//       },
//       {
//         featureType: "road.highway",
//         elementType: "geometry.stroke",
//         stylers: [{ color: "#1f2835" }],
//       },
//       {
//         featureType: "road.highway",
//         elementType: "labels.text.fill",
//         stylers: [{ color: "#f3d19c" }],
//       },
//       {
//         featureType: "transit",
//         elementType: "geometry",
//         stylers: [{ color: "#2f3948" }],
//       },
//       {
//         featureType: "transit.station",
//         elementType: "labels.text.fill",
//         stylers: [{ color: "#d59563" }],
//       },
//       {
//         featureType: "water",
//         elementType: "geometry",
//         stylers: [{ color: "#17263c" }],
//       },
//       {
//         featureType: "water",
//         elementType: "labels.text.fill",
//         stylers: [{ color: "#515c6d" }],
//       },
//       {
//         featureType: "water",
//         elementType: "labels.text.stroke",
//         stylers: [{ color: "#17263c" }],
//       },
//     ],
//   });
// }

