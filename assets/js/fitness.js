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
            position: location
            
        });
    });

  var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });


}