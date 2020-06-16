function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: {
            lat: 53.270974,
            lng: -9.056724
        }
    });
}

function bodybuilding() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: {
            lat: 53.269172, 
            lng: -9.080368
        }
    });

   var locations = [
        {lat: 53.269172, lng: -9.080368}, //Ardilaun
        {lat: 53.281736, lng: -9.063121}, // Kingfisher
        {lat: 53.269550, lng: -9.108248}, // NRG Knocknacarra
        {lat: 53.274647, lng: -9.046547}, // Push Gym
        {lat: 53.275899, lng: -9.048771}, // Snap Fitness
        {lat: 53.281729, lng: -9.041727}, // NRG Bohermore
        {lat: 53.279675, lng: -9.021446}, // Active 24 Fitness
        {lat: 53.283221, lng: -9.035437}, // Galway City Gym
    ] ;

   var markers = locations.map(function(location) {
        return new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: location
            
            
        });
    });

  var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });


}

function martialarts() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: {
            lat: 53.269172, 
            lng: -9.080368
        }
    });

   var locations = [
        {lat: 53.264804, lng: -9.083411}, //Kyokushinkai
        {lat: 53.267221, lng: -9.055337}, // Galway Judo Club
        {lat: 53.267221, lng: -9.055337}, // Itosu kai Karate
        {lat: 53.276062, lng: -9.071076}, // Shotokan Karate
        {lat: 53.276062, lng: -9.071076}, // Atlantic Aikido 
        {lat: 53.278087, lng: -9.072740}, // Boxing
        {lat: 53.277048, lng: -9.054148}, // Chen Tai Chi
        {lat: 53.282709, lng: -9.043010}, // Black Dragon Kickboxing
    ] ;

   var markers = locations.map(function(location) {
        return new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: location
            
        });
    });

  var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });


}

function swimming() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: {
            lat: 53.269172, 
            lng: -9.080368
        }
    });

   var locations = [
        {lat: 53.260107, lng: -9.087778}, // Ocean Fitness Leisure Club
        {lat: 53.260351, lng: -9.082062}, // Leisureland
        {lat: 53.283302, lng: -9.062668}, // Kingfisher Club NUIG
        {lat: 53.269264, lng: -9.079816}, // Ardilaun
        {lat: 53.274941, lng: -9.043377}, // The Galmont Hotel & Spa
        {lat: 53.270546, lng: -9.107477}, // NRG Health & Fitness Knocknacarra
        {lat: 53.282631, lng: -9.040927}, // NRG Health & Fitness Bohermore
        {lat: 53.275735, lng: -9.016226}, // Kingfisher Club Renmore
        {lat: 53.280922, lng: -9.021228}, // Active 24 Fitness
    ] ;

   var markers = locations.map(function(location) {
        return new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: location
            
        });
    });

  var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });


}

function racketsports() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: {
            lat: 53.269172, 
            lng: -9.080368
        }
    });

   var locations = [
        {lat: 53.264421, lng: -9.090292}, //Galway Lawn Tennis Club
        {lat: 53.286695, lng: -8.984720}, // Doughiska Tennis Court
        {lat: 53.274061, lng: -8.918459}, // Oranmore Badminton Club
        {lat: 53.278005, lng: -8.977520}, // Castlegar GAA Club
    ] ;

   var markers = locations.map(function(location) {
        return new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: location
            
            
        });
    });

  var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });


}

function yoga() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: {
            lat: 53.269172, 
            lng: -9.080368
        }
    });

   var locations = [
        {lat: 53.272723, lng: -9.053601}, // Galway Yoga Centre
        {lat: 53.270644, lng: -9.057939}, // Love Yoga Galway
        {lat: 53.270096, lng: -9.060294}, // An Seomra Yoga
        {lat: 53.285429, lng: -9.036922}, // Bikram Hot Yoga
        {lat: 53.259149, lng: -9.086876}, // Yoga Shala
        {lat: 53.267055, lng: -9.072285}, // Yoga Roots
        {lat: 53.265926, lng: -9.131508}, // Ashtanga Yoga Galway
    ] ;

   var markers = locations.map(function(location) {
        return new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: location
            
            
        });
    });

  var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });


}

function fitmeals() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: {
            lat: 53.269172, 
            lng: -9.080368
        }
    });

   var locations = [
        {lat: 53.293137, lng: -9.015226}, // Meals4Health
        {lat: 53.235787, lng: -8.871745}, // Clean Cut Meals
    ] ;

   var markers = locations.map(function(location) {
        return new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: location
            
            
        });
    });

  var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });


}

function diet() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: {
            lat: 53.269172, 
            lng: -9.080368
        }
    });

   var locations = [
        {lat: 53.272727, lng: -9.059276}, // Cliona Joyce Dietician
        {lat: 53.270401, lng: -9.057480}, // Niamh Burke Nutrition
        {lat: 53.269747, lng: -9.052279}, // Glenville Nutrition Clinic
        {lat: 53.278413, lng: -9.049624}, // Milena Dow Nutrition & Weight Loss Specialist
        {lat: 53.283531, lng: -9.036657}, // Complete Nutrition
    ] ;
 
    var markers = locations.map(function(location) {
        return new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: location
            
            
        });
    });

  var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });


}

function supplement() {
  var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: {
            lat: 53.269172, 
            lng: -9.080368
        }
    });

     var locations = [
        ['Vitamin Shop<br>\<a href="https://www.facebook.com/vitaminshopgalway/">Website</a>', 53.275621, -9.053744], //Vitamin Shop
        ['Health+<br>\<a href="www.health-plus.ie/">Website</a>', 53.273683, -9.052650], // Health+
        ['Holland & Barrett<br>\<a href="www.hollandandbarrett.ie">Website</a>', 53.272965, -9.052693], // Holland & Barrett
        ['Evergreen<br>\<a href="www.evergreen.ie/">Website</a>', 53.280849, -9.047839], // Evergreen
        ['Apollo Supplements<br>\<a href="www.apollosupplements.ie">Website</a>', 53.285501, -9.034280], // Apollo Supplements
        ['Evergreen<br>\<a href="www.evergreen.ie/">Website</a>', 53.276324, -9.076640], // Evergreen
        ['Evergreen<br>\<a href="www.evergreen.ie/">Website</a>', 53.272677, -9.053797], // Evergreen
    ] ;

var infowindow =  new google.maps.InfoWindow({});
var marker, count;
for (count = 0; count < locations.length; count++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[count][1], locations[count][2]),
      animation: google.maps.Animation.DROP,
      map: map,
      title: locations[count][0]
    });
google.maps.event.addListener(marker, 'click', (function (marker, count) {
      return function () {
        infowindow.setContent(locations[count][0]);
        infowindow.open(map, marker);
      }
    })(marker, count));
  }
}