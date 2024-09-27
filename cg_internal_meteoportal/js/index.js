async function fetchStations() {
    const response_stations = await fetch('./media/map/Firerisk_stanice_20240621_18991230_NUTS3.geojson');
    const geojson_stations = await response_stations.json();
    return geojson_stations
  }

function onRegionClick() {
    const buttons = document.querySelectorAll('.buttonRegion');
    const stations = document.querySelectorAll('.divStations');

    buttons.forEach(button => {
        const targetDiv = document.getElementById(button.innerText)
        button.addEventListener('click', function() {
            if (targetDiv.style.display === 'none' || targetDiv.style.display === '') {
                stations.forEach(div => {
                    div.style.display = 'none'
                })
                targetDiv.style.display = 'grid';  // Show the div
            } else {
                stations.forEach(div => {
                    div.style.display = 'none'
                })
            }
        });
    })
}

function onStationClick(event){
    const feature = event.target ? event.target.feature : event; // If coming from a button, it's the feature itself
    console.log(feature)

    const targetDiv = document.getElementById('prediction')
    const temp = document.getElementById('temperature')
    const prec = document.getElementById('precipitation')
    const wspd = document.getElementById('wind_speed')
    const relh = document.getElementById('relative_humidity')

    temp.src = 'media/predictions/graphtemplate_temp.png'
    prec.src = 'media/predictions/graphtemplate_prec.png'
    wspd.src = 'media/predictions/graphtemplate_wspd.png'
    relh.src = 'media/predictions/graphtemplate_relh.png'
}

function populateStations(json) {
    // Get the container elements
    const region_container = document.getElementById('region_selection');
    const station_container = document.getElementById('station_selection');
    
    // Get all unique 'category' values from the features
    const uniqueRegions = [...new Set(json.features.map(feature => feature.properties.NAME_SHORT))];
    uniqueRegions.sort()

    uniqueRegions.forEach(region => {
        const json_region = json.features.filter(feature => feature.properties.NAME_SHORT === region)
        const regionButton = document.createElement('button')
        regionButton.className = 'buttonRegion'
        regionButton.innerText = region
        
        const regionStations = document.createElement('div')
        regionStations.className = 'divStations'
        regionStations.id = region

        json_region.forEach(feature => {
            const featureStation = document.createElement('button')
            featureStation.textContent = feature.properties.Name
            featureStation.addEventListener('click', function() {
                onStationClick(feature)
            })
            regionStations.appendChild(featureStation)
        })

        region_container.appendChild(regionButton)
        station_container.appendChild(regionStations)
    })
    onRegionClick()
}

function createMap(geojson) {
    var map = L.map('map').setView([49.8, 15.5], 7);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    function onEachFeature(feature, layer) {
        layer.on('click', onStationClick);
        if (feature.properties && feature.properties.Name) {
            layer.bindPopup(feature.properties.Name);
        }
    }
    
    var geojsonMarkerOptions = {
        radius: 8,
        fillColor: "#ff7800",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };
    
    L.geoJSON(geojson, {
        onEachFeature: onEachFeature,
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, geojsonMarkerOptions);
        }

    }).addTo(map);
}

async function onPageLoad() {
    const geojson_stations = await fetchStations()
    
    populateStations(geojson_stations)
    createMap(geojson_stations)
};
onPageLoad()