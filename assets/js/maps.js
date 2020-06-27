function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: {
            lat: 53.270974,
            lng: -9.056724
        }
    });
}

var bodybuildingLocations = [
        ['Ardilaun<br>\<a href="www.ardilaunleisureclub.ie/">Website</a>', 53.269172, -9.080368], // Ardilaun
        ['Kingfisher<br>\<a href="https://nuigalway.kingfisherclub.com/">Website</a>', 53.281736, -9.063121], // Kingfisher
        ['NRG Knocknacarra<br>\<a href="https://www.nrgfitness.ie/knocknacarra/">Website</a>', 53.269550, -9.108248], // NRG Knocknacarra
        ['Push Gym<br>\<a href="https://pushgym.ie/">Website</a>', 53.274647, -9.046547], // Push Gym
        ['Snap Fitness<br>\<a href="https://www.snapfitness.com/ie/gyms/galway/">Website</a>', 53.275899, -9.048771], // Snap Fitness
        ['NRG Bohermore<br>\<a href="https://www.nrgfitness.ie/locations/bohermore/">Website</a>', 53.281729, -9.041727], // NRG Bohermore
        ['Active 24 Fitness<br>\<a href="https://activefitness.ie/">Website</a>', 53.279675, -9.021446], // Active 24 Fitness
        ['Galway City Gym<br>\<a href="https://galwaycitygym.ie/">Website</a>', 53.283221, -9.035437], // Galway City Gym
    ] ;

var martialartsLocations = [
        ['Kyokushinkai<br>\<a href="http://www.kyokushinireland.com/galway.html">Website</a>', 53.264804, -9.083411], // Kyokushinkai
        ['Galway Judo Club<br>\<a href="http://galwayjudoclub.ie/">Website</a>', 53.267221, -9.055337], // Galway Judo Club
        ['Itosu kai Karate<br>\<a href="http://www.itosukaiireland.org/galway.html">Website</a>', 53.267221, -9.055337], // Itosu kai Karate
        ['Shotokan Karate<br>\<a href="https://galwayshotokankarate.weebly.com/">Website</a>', 53.276062, -9.071076], // Shotokan Karate
        ['Atlantic Aikido<br>\<a href="http://www.atlanticaikido.com/">Website</a>', 53.276062, -9.071076], // Atlantic Aikido 
        ['Boxing<br>\<a href="http://www.galwayboxing.com/">Website</a>', 53.278087, -9.072740], // Boxing
        ['Chen Tai Chi<br>\<a href="http://www.chentaichiireland.com/">Website</a>', 53.277048, -9.054148], // Chen Tai Chi
        ['Black Dragon Kickboxing<br>\<a href="http://www.blackdragon.ie/">Website</a>', 53.282709, -9.043010], // Black Dragon Kickboxing
      ] ;

var swimmingLocations = [
        ['Ocean Fitness Leisure Club<br>\<a href="http://oceanfitness.ie/">Website</a>', 53.260107, -9.087778], // Ocean Fitness Leisure Club
        ['Leisureland<br>\<a href="http://www.leisureland.ie/">Website</a>', 53.260351, -9.082062], // Leisureland
        ['Kingfisher Club NUIG<br>\<a href="https://nuigalway.kingfisherclub.com/">Website</a>', 53.283302, -9.062668], // Kingfisher Club NUIG
        ['Ardilaun<br>\<a href="www.ardilaunleisureclub.ie/">Website</a>', 53.269264, -9.079816], // Ardilaun
        ['The Galmont Hotel & Spa<br>\<a href="https://www.thegalmont.com/en/energize-fitness/">Website</a>', 53.274941, -9.043377], // The Galmont Hotel & Spa
        ['NRG Health & Fitness Knocknacarra<br>\<a href="https://www.nrgfitness.ie/knocknacarra/">Website</a>', 53.270546, -9.107477], // NRG Health & Fitness Knocknacarra
        ['NRG Health & Fitness Bohermore<br>\<a href="https://www.nrgfitness.ie/locations/bohermore/">Website</a>', 53.282631, -9.040927], // NRG Health & Fitness Bohermore
        ['Kingfisher Club Renmore<br>\<a href="https://renmore.kingfisherclub.com/">Website</a>', 53.275735, -9.016226], // Kingfisher Club Renmore
        ['Active 24 Fitness<br>\<a href="https://activefitness.ie/">Website</a>', 53.280922, -9.021228], // Active 24 Fitness
    ] ;

var racketsportLocations = [
        ['Galway Lawn Tennis Club<br>\<a href="https://gltc.ie/">Website</a>', 53.264421, -9.090292], // Galway Lawn Tennis Club
        ['Doughiska Tennis Court<br>\<a href="www.health-plus.ie/">Website</a>', 53.286695, -8.984720], // Doughiska Tennis Court
        ['Oranmore Badminton Club<br>\<a href="https://oranmorebadmintonclub.teamapp.com/">Website</a>', 53.274061, -8.918459], // Oranmore Badminton Club
        ['Castlegar GAA Club<br>\<a href="http://www.castlegargaa.com/">Website</a>', 53.278005, -8.977520], // Castlegar GAA Club
    ] ;

var yogaLocations = [
        ['Galway Yoga Centre<br>\<a href="https://galwayyoga.com/">Website</a>', 53.272723, -9.053601], // Galway Yoga Centre
        ['Love Yoga Galway<br>\<a href="http://www.loveyoga.eu/">Website</a>', 53.270644, -9.057939], // Love Yoga Galway
        ['An Seomra Yoga<br>\<a href="https://anseomrayoga.com/about">Website</a>', 53.270096, -9.060294], // An Seomra Yoga
        ['Bikram Hot Yoga<br>\<a href="https://hotyoga.ie/">Website</a>', 53.285429, -9.036922], // Bikram Hot Yoga
        ['Yoga Shala<br>\<a href="https://www.theyogashala.net/">Website</a>', 53.259149, -9.086876], // Yoga Shala
		['Yoga Roots<br>\<a href="https://www.yogaroots.ie/">Website</a>', 53.267055, -9.072285], // Yoga Roots
		['Ashtanga Yoga Galway<br>\<a href="https://www.ashtangayogagalway.ie/">Website</a>', 53.265926, -9.131508], // Ashtanga Yoga Galway
    ] ;

var dietLocations = [
        ['Cliona Joyce Dietician<br>\<a href="https://www.goldenpages.ie/cliona-joyce-private-dietitian-galway-city-H91/">Website</a>', 53.272727, -9.059276], // Cliona Joyce Dietician
        ['Niamh Burke Nutrition<br>\<a href="https://niamhburkenutrition.com/">Website</a>', 53.270401, -9.057480], // Niamh Burke Nutrition
        ['Glenville Nutrition Clinic<br>\<a href="https://glenvillenutrition.ie/">Website</a>', 53.269747, -9.052279], // Glenville Nutrition Clinic
        ['Milena Dow Nutrition & Weight Loss Specialist<br>\<a href="https://www.milenadow.com/">Website</a>', 53.278413, -9.049624], // Milena Dow Nutrition & Weight Loss Specialist
        ['Complete Nutrition<br>\<a href="https://completenutrition.com/">Website</a>', 53.283531, -9.036657], // Complete Nutrition
    ] ;

var supplementLocations = [
        ['Vitamin Shop<br>\<a href="https://www.facebook.com/vitaminshopgalway/">Website</a>', 53.275621, -9.053744], //Vitamin Shop
        ['Health+<br>\<a href="www.health-plus.ie/">Website</a>', 53.273683, -9.052650], // Health+
        ['Holland & Barrett<br>\<a href="www.hollandandbarrett.ie">Website</a>', 53.272819, -9.052791], // Holland & Barrett
        ['Evergreen<br>\<a href="www.evergreen.ie/">Website</a>', 53.280475, -9.047839], // Evergreen
        ['Apollo Supplements<br>\<a href="www.apollosupplements.ie">Website</a>', 53.285501, -9.034280], // Apollo Supplements
        ['Evergreen Healthfoods - Eyre Square Centre<br>\<a href="www.evergreen.ie/">Website</a>', 53.273502, -9.049631], // Evergreen
        ['Evergreen Healthfoods- Galway City Centre<br>\<a href="www.evergreen.ie/">Website</a>', 53.272218, -9.053527], // Evergreen
    ] ;

 var mealLocations = [
        ['Clean Cut Meals<br>\<a href="https://www.https://cleancutmeals.ie/">Website</a>', 53.235806, -8.87177], //Clean Cut Meals
        ['GourmetFuel<br>\<a href="https://gourmetfuel.com/">Website</a>', 53.278211, -6.220271], // GourmetFuel
        ['Meals4Health<br>\<a href="https://www.meals4health.ie/">Website</a>', 53.293254, -9.015161], // Meals4Health
        ['Fit4Food<br>\<a href="www.fit4food.ie/">Website</a>', 53.293060, -9.013989], // Fit4Food
    ] ;

var physioLocations = [
        ['Baily Point Physiotherapy<br>\<a href="http://www.galwayphysio.ie/">Website</a>', 53.259660, -9.077878], //Baily Point Physiotherapy
        ['Galway West Physiotherapy<br>\<a href="http://www.galwaywestphysiotherapy.ie/">Website</a>', 53.268432, -9.062749], // Galway West Physiotherapy
        ['Galway Bay Physio-Galway City Centre<br>\<a href="http://www.galwaybayphysio.ie/">Website</a>', 53.271860, -9.049521], // Galway Bay Physio- City Centre
        ['Evidence-Based Therapy Centre<br>\<a href="http://www.ebtc.ie/">Website</a>', 53.274235, -9.045196], // Evidence-Based Therapy Centre
        ['Galway City Physiotherapy<br>\<a href="http://www.galwaycityphysio.com/">Website</a>', 53.286955, -9.034320], // Galway City Physiotherapy
        ['Alliance Physiotherapy<br>\<a href="http://alliancephysiotherapy.com/">Website</a>', 53.278312, -9.008287], // Alliance Physiotherapy
        ['Galway Bay Physio-Oranmore<br>\<a href="http://www.galwaybayphysio.ie/">Website</a>', 53.271319, -8.918537], // Galway Bay Physio-Oranmore
    ] ;

var massageLocations = [
        ['Darren Macfarlane Physical Theraly Clinic<br>\<a href="http://www.sportsinjurytherapy.ie/">Website</a>', 53.268656, -9.064018], // Darren Macfarlane Physical Theraly Clinic
        ['Galway Therapy Clinic<br>\<a href="https://www.galwaytherapyclinic.net/">Website</a>', 53.271162, -9.056774], // Galway Therapy Clinic
        ['Veras Bodywork & Massage<br>\<a href="https://business.facebook.com/vitalmassage.ie/">Website</a>', 53.270889, -9.053179], // Veras Bodywork & Massage
        ['Massage Therapy Galway<br>\<a href="https://www.massagetherapygalway.com/">Website</a>', 53.270919, -9.053191], //Massage Therapy Galway
        ['Jerome Sports Massage<br>\<a href="https://www.facebook.com/sports.massage.jerome">Website</a>', 53.289906, -9.047711], // Jerome Sports Massage
        ['John Butler Sports Injury / Massage & Chartered Physiotherapist<br>\<a href="http://www.johnbutlersportsinjury.ie/">Website</a>', 53.286569, -9.036048], // John Butler Sports Injury / Massage & Chartered Physiotherapist
        ['Muscle Maintenance<br>\<a href="https://www.facebook.com/Musclemaintenance-852225601538620/about/">Website</a>', 53.294049, -9.013728], // Muscle Maintenance
        ['Peter Forde Physical Injury Therapy Clinic<br>\<a href="https://www.facebook.com/pfphysicalinjuryclinic/">Website</a>', 53.289204, -9.013362], // Peter Forde Physical Injury Therapy Clinic
        ['Michelle Harte Physical Therapy Clinic<br>\<a href="http://mhphysicaltherapy.ie/">Website</a>', 53.267784, -8.930306], // Michelle Harte Physical Therapy Clinic
    ] ;

var acupunctureLocations = [
        ['Acupuncture 4 Life Clinic Galway<br>\<a href="http://www.acupuncture4life.ie/">Website</a>', 53.251831, -9.152998], // Acupuncture 4 Life Clinic Galway
        ['Chinese Medical Clinic<br>\<a href="http://www.cmcgalway.com/">Website</a>', 53.268664, -9.066264], // Chinese Medical Clinic
        ['Saffron Roche Acupuncture and Herb Clinic<br>\<a href="http://www.acupunctureandherbclinic.ie/">Website</a>', 53.268087, -9.065817], // Saffron Roche Acupuncture and Herb Clinic
        ['The Crane Clinic<br>\<a href="http://www.acupuncturegalway.com/">Website</a>', 53.270262, -9.060270], // The Crane Clinic
        ['Mill St Acupuncture & Health<br>\<a href="http://www.denisedelaneytherapy.com/">Website</a>', 53.272749, -9.059041], // Mill St Acupuncture & Health
        ['INDIKA Acupuncture & Allergy Clinic<br>\<a href="http://www.indikahealth.ie/">Website</a>', 53.271474, -9.056618], // INDIKA Acupuncture & Allergy Clinic
        ['Jane McHugh Acupuncture and Reflexology<br>\<a href="http://www.janemchugh.com/">Website</a>', 53.276781, -9.053223], // Jane McHugh Acupuncture and Reflexology
        ['Denise Delaney Acupuncture and Health clinic<br>\<a href="http://www.galway-acupressure-and-health-clinic.com/">Website</a>', 53.284781, -9.044350], // Denise Delaney Acupuncture and Health clinic
        ['Galway Holistic clinic Acupuncture/ Homeopathy/food Intolerance<br>\<a href="http://www.qanitanoonan.weebly.com/">Website</a>', 53.285454, -9.038389], // Galway Holistic clinic Acupuncture/ Homeopathy/food Intolerance
        ['Harmony Acupuncture Clinic/ Linda Lyons<br>\<a href="http://www.harmonyacupuncturegalway.com/">Website</a>', 53.284668, -9.036338], // Harmony Acupuncture Clinic/ Linda Lyons
        ['Aran Acupuncture<br>\<a href="http://www.aranacupuncture.ie/">Website</a>', 53.278669, -9.021456], // Aran Acupuncture
        ['Oranmore Acupuncture Clinic<br>\<a href="http://www.oranmoreacupuncture.ie/">Website</a>', 53.273271, -8.929495], // Oranmore Acupuncture Clinic

    ] ;

var chiropractorLocations = [
        ['Oranmore Chiropractors<br>\<a href="http://www.oranmorechiro.ie/">Website</a>', 53.267884, -8.929697], //Oranmore Chiropractors
        ['Discover Chiropractic<br>\<a href="http://www.discoverchiropractic.ie/">Website</a>', 53.287045, -9.034367], // Discover Chiropractic
        ['Galway City Chiropractic<br>\<a href="http://www.galwaychiro.com/">Website</a>', 53.272954, -9.048940], // Galway City Chiropractic
        ['Salthill Osteopathic Clinic - Galway<br>\<a href="http://www.osteopathgalway.ie/">Website</a>', 53.261025, -9.077299], // Salthill Osteopathic Clinic - Galway
    ] ;


function showLocation(locations) {
  var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: {
            lat: 53.269172, 
            lng: -9.080368
        }
    });

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
