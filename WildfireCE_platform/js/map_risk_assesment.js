function colors_fwi(values) {
    var value = values[0];
    switch (value) {
        case 1:
            return "#4ba840";
        case 2:
            return "#eae83f";
        case 3:
            return "#ec8e41";
        case 4:
            return "#d63a2f";
        case 5:
            return "#a1251e";
        case 6:
            return "#832a6d";
        default:
            return "transparent";
    };
};

function colors_sdi(values) {
    var value = values[0];
    switch (value) {
        case 1:
            return "#53a8d1";
        case 2:
            return "#a5c6b5";
        case 3:
            return "#dfe999";
        case 4:
            return "#fdd975";
        case 5:
            return "#f99557";
        case 6:
            return "#ec4543";
        default:
            return "transparent";
    };
};

function colors_cfa(values) {
    var value = values[0];
    switch (value) {
        case 1:
            return "#feff19";
        case 2:
            return "#ffb21a";
        case 3:
            return "#ff191b";
        default:
            return "transparent";
    };
};

function colors_fi(values) {
    var value = values[0];
    switch (value) {
        case 1:
            return "#ff00ff";
        case 2:
            return "#ffff80";
        case 3:
            return "#ffbf40";
        case 4:
            return "#ff8000";
        case 5:
            return "#df7000";
        case 6:
            return "#bf6000";
        case 7:
            return "#9f5000";
        case 8:
            return "#804000";
        default:
            return "transparent";
    };
};

function colors_fl(values) {
    var value = values[0];
    switch (value) {
        case 1:
            return "#ffff00";
        case 2:
            return "#ff8000";
        case 3:
            return "#ff0000";
        case 4:
            return "#a60000";
        default:
            return "transparent";
    };
};

function colors_hua(values) {
    var value = values[0];
    switch (value) {
        case 1:
            return "#ffaad5";
        case 2:
            return "#ff0080";
        case 3:
            return "#8000ff";
        case 4:
            return "#7f0080";
        case 5:
            return "#408080";
        default:
            return "transparent";
    };
};

function colors_ros(values) {
    var value = values[0];
    switch (value) {
        case 1:
            return "#008000";
        case 2:
            return "#3f9f00";
        case 3:
            return "#7fbf00";
        case 4:
            return "#bfdf00";
        case 5:
            return "#ffff00";
        case 6:
            return "#ffaa00";
        case 7:
            return "#ff5500";
        case 8:
            return "#ff0000";
        default:
            return "transparent";
    };
};

async function addRegions(info, map) {
    try {
        const response = await fetch(info["url"]);
        const geojson = await response.json();
        var regions = {};

        var layer = await L.geoJSON(geojson, {
            style: {
                color: "black",
                fillOpacity: 0,
            },
            onEachFeature: function (feature, layer) {
                const regionName = feature.properties.Name;
                const regionId = feature.properties.Id;
    
                // Add each polygon to the dictionary by id
                regions[regionId] = layer;
    
                // Add an option to the dropdown
                const option = document.createElement("option");
                option.value = regionId;
                option.text = regionName;

                var polygonSelector = document.getElementById("polygonSelect")
                polygonSelector.appendChild(option);

                // Zoom and pan to the polygon on click
                layer.on('click', function () {
                    map.fitBounds(layer.getBounds(), {
                        padding: [10, 10],  // Optional padding around the polygon
                        maxZoom: 16         // Optional max zoom level
                    });
                    polygonSelector.value = regionId
                });
            },
        });
        layer.addTo(map)

        // Add an event listener to the dropdown to zoom to the selected polygon
        document.getElementById("polygonSelect").addEventListener("change", function (event) {
            const regionId = event.target.value;
            const selectedRegion = regions[regionId];

            if (selectedRegion) {
                map.fitBounds(selectedRegion.getBounds(), {
                    padding: [10, 10],
                    maxZoom: 16
                });
            }
        });

        return layer

    } catch (error) {
        console.error(`Error loading ${info["name"]}:`, error);
    }
};

async function loadVector(info) {
    const response = await fetch(info["url"]);
    const geojson = await response.json();
    var layer = L.geoJSON(geojson, {style: info["style"]});
    return layer
};

var style_fireMgmt = {color: "black", stroke: false, opacity: 1}

async function addVectors(layerControl, map) {
    const vectorsInfo = [
        {name: "Potential fire management areas", url: "./mapdata/fire_management_areas_test.geojson", style: style_fireMgmt},
        {name: "Acacia stands", url: "./mapdata/acacia_stands_test.geojson"},
        {name: "Conservation infrastructure", url: "./mapdata/conservation_infrastructure_test.geojson"},
        {name: "Valuable trees", url: "./mapdata/valuable_trees_test.geojson"},
        //{name: "", url: "../mapdata/_test.geojson"},
    ];

    for (const info of vectorsInfo) {
        const layer = await loadVector(info)

        /*
        if (info["name"] === "Supression Difficulty Index") {
            layer.addTo(map)
        }*/
        layer.addTo(map)
        layerControl.addOverlay(layer, info["name"])
    }
};

async function loadRaster(info) {
    try {
        // Load GeoTIFF data asynchronously
        const response = await fetch(info["url"]);
        const arrayBuffer = await response.arrayBuffer();
        const georaster = await parseGeoraster(arrayBuffer);

        // Create a GeoRaster layer
        const layer = new GeoRasterLayer({
            georaster,
            opacity: 0.7,
            pixelValuesToColorFn: info["colors"],
            resolution: 128 // optional parameter for adjusting display resolution
        });

        // Return the layer
        return layer;
    } catch (error) {
        console.error(`Error loading ${info["name"]}:`, error);
    }
}

async function addRasters(layerControl, map) {
    const rastersInfo = [
        //{name: "Fire Weather Index", url: "../mapdata/pozarni_riziko_test2.tif", colors: colors_fwi},
        {name: "Supression Difficulty Index", url: "./mapdata/sdi_test.tif", colors: colors_sdi},
        {name: "Crown Fire Intensity", url: "./mapdata/cfa_test.tif", colors: colors_cfa},
        {name: "Fireline Intensity", url: "./mapdata/fi_test.tif", colors: colors_fi},
        {name: "Flame Length", url: "./mapdata/fl_test.tif", colors: colors_fl},
        {name: "Heat per Unit Area", url: "./mapdata/hua_test.tif", colors: colors_hua},
        {name: "Rate of Spread", url: "./mapdata/ros_test.tif", colors: colors_ros}
    ];

    for (const info of rastersInfo) {
        const layer = await loadRaster(info)

        if (info["name"] === "Supression Difficulty Index") {
            layer.addTo(map)
        }

        layerControl.addBaseLayer(layer, info["name"])
    };

};

function createMap() {
    // initalize leaflet map
    var map = L.map('map').setView([48.6, 15.5], 7);

    // add OpenStreetMap basemap
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const layerControl = L.control.layers(null, null).addTo(map);

    addRasters(layerControl, map)

    // Add vector alyer with regions
    const regionsInfo = {name: "regions", url: "./mapdata/regions_poly.geojson"}
    addRegions(regionsInfo, map)

    addVectors(layerControl, map)
}

createMap()
