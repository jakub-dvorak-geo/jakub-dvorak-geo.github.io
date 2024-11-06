/**
 * Create a map of partners
 * returns version of IE or false, if browser is not Internet Explorer
 */

function highlightFeature(e) {
    var layer = e.target;
    layer.setStyle({
        fillColor: '#4e5056',
    });
    layer.bringToFront();
};

function resetFeature(e) {
    var layer = e.target;
    layer.setStyle({
        fillColor: '#5a8691',
    });
    layer.bringToFront();
};

function onClick(e) {
    e.target.openPopup()
}

function createPopup(feature) {
    let start_html = '<div class=popupContent>' + feature.properties.NAME + ':<br>'
    let org1_html = '<a href="'+feature.properties.org1_link+'" title="'+feature.properties.org1_title+'" target="_blank" rel="noopener noreferrer"><img src="' + feature.properties.org1_logo + '" width="100%" /></a>'
    if (feature.properties.hasOwnProperty('org2_link')) {
        let org2_html = '<br><a href="'+feature.properties.org2_link+'" title="'+feature.properties.org2_title+'" target="_blank" rel="noopener noreferrer"><img src="'+feature.properties.org2_logo+'" width="100%" /></a>'
        return start_html + org1_html + org2_html + '</div>'
    } else {
        return start_html + org1_html + '</div>'
    }
}

function onEachFeature(feature, layer) {
    layer.bindPopup(createPopup(feature), {autoPan:false})
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetFeature,
        click: onClick,
    })
}

async function fetchShowMapData(map) {
    const response_land = await fetch('media/land_earth.geojson');
    const geojson_land = await response_land.json();
    const response_countries = await fetch('media/countries.geojson');
    const geojson_countries = await response_countries.json();

    await L.geoJson(geojson_land, {
        interactive: false,
        stroke: false,
        fillColor: '#d6e8e5',
        fillOpacity: 1,
    }).addTo(map);

    await L.geoJson(geojson_countries, {
        onEachFeature: onEachFeature,
        weight: 1,
        color: '#fafafa',
        opacity: 1,
        fillColor: '#5a8691',
        fillOpacity: 1,
        attribution: 'Made with <a href="https://www.naturalearthdata.com/">Natural Earth</a>'
    }).addTo(map); 
}

function map() {
    // Define map
    var map = L.map('mapPartners', {
        zoomControl: false,
        boxZoom: false,
        doubleClickZoom: false,
        dragging: false,
        scrollWheelZoom: false,
        keyboard: false,
    }).fitBounds([
        [60, 5],
        [42, 25]]);
    fetchShowMapData(map)
};

map();
