function initMap(lat=42.359858, lng= -71.099130, loc='Boston') {
    var myLatLng = {lat, lng};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: loc
    });
};