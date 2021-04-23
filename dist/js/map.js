function initMap() {

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: {
            lat: 51.5075555,
            lng: -0.1272772 
        },
        mapTypeControl: false,
        zoomControl: false,
        scaleControl: false,
        streetViewControl: false,
        fullscreenControl: false,
    });
    const marker = new google.maps.Marker({
        position: {
            lat: 51.5075555,
            lng: -0.1272772 
        },
        map: map,
    });
}