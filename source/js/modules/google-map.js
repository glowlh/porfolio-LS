$(document).ready(function () {
  var myLatLng = {lat: 55.926211, lng: 37.8590063};
  var myCenter = {lat: 55.9209714, lng: 37.7863583};
  var options = {
    mapTypeControlOptions: {
      mapTypeIds: [ 'korolev']
    },
    center: myCenter,
    zoom: 13,
    mapTypeId: 'korolev',
    scrollwheel: false,
    disableDefaultUI: true,
    zoomControl: true
  };
  var styles = [
    {
      featureType: 'water',
      elementType: 'all',
      stylers: [
        { hue: '#4369aa' },
        { saturation: -50 },
        { lightness: -39 },
        { visibility: 'on' }
      ]
    },{
      featureType: 'road',
      elementType: 'all',
      stylers: [
        { hue: '#d6d6d6' },
        { saturation: -100 },
        { lightness: 55 },
        { visibility: 'on' }
      ]
    },{
      featureType: 'road.highway',
      elementType: 'all',
      stylers: [
        { hue: '#d6d6d6' },
        { saturation: -100 },
        { lightness: 55 },
        { visibility: 'on' }
      ]
    },{
      featureType: 'poi',
      elementType: 'all',
      stylers: [
        { hue: '#e8e8e8' },
        { saturation: -100 },
        { lightness: 59 },
        { visibility: 'on' }
      ]
    },{
      featureType: 'transit',
      elementType: 'all',
      stylers: [
        { hue: '#fdfdfd' },
        { saturation: 0 },
        { lightness: 97 },
        { visibility: 'on' }
      ]
    },{
      featureType: 'landscape',
      elementType: 'all',
      stylers: [
        { hue: '#f2f2f2' },
        { saturation: -100 },
        { lightness: 54 },
        { visibility: 'on' }
      ]
    },{
      featureType: 'administrative.locality',
      elementType: 'all',
      stylers: [
        { hue: '#444444' },
        { saturation: -25 },
        { lightness: 0 },
        { visibility: 'on' }
      ]
    }
  ];

  var div = document.getElementById('google-map');
  var map = new google.maps.Map(div, options);
  var styledMapType = new google.maps.StyledMapType(styles, { name: 'korolev' });
  map.mapTypes.set('Styled', styledMapType);

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: '/assets/img/location-marker.png',
    title: 'Королёв'
  });
  map.mapTypes.set('korolev', styledMapType);
});