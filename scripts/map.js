

    /* data for map */
    var jhStatueLatLng = [34.185950985383464, 130.99708975908948];
    var nwBuilding = [39.97463251673356, 116.43031559323877];
    var mycollege = [51.49029784773085, -0.1298270784392803];
    var mygradschool = [40.80728372577428, -73.96324862403668];
    
    var zoomLevel = 15;
	
    /* create Leaflet map object, 
        place in container, 
        and set initial center and zoom */
    var map = L.map('map_container').setView(jhStatueLatLng, zoomLevel);
    
    /* required attribution */
    var attributionHtml = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    
    /* create tile layer with attribution */
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: attributionHtml }).addTo(map);

    /* create marker, info popup, and add to map */
	L.marker(jhStatueLatLng).bindPopup("Shimonoseki birthplace").addTo(map);
    
    L.marker(nwBuilding).bindPopup("Fashion school").addTo(map);
    L.marker(mycollege).bindPopup("My undergrad<br><a href='https://www.arts.ac.uk/colleges/chelsea-college-of-arts'>Chelsea college of arts</a>").addTo(map);
    L.marker(mygradschool).bindPopup("My grad school").addTo(map);



  