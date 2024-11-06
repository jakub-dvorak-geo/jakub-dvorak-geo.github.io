    
    var toggleClip = function () {
        var newClipMask = windSpeed.options.clip ? undefined : clipMask;
        windSpeed.setClip(newClipMask);
        windDirection.setClip(newClipMask);
    }

    var changeColorScale = function (selectObject) {
        windSpeed.setColorScale(selectObject.value);
        document.getElementById('colorScaleImage').setAttribute('src',windSpeed.colorScaleData);
    }
    
    var marker;

    for (var i=0;i<clipMask.length;i++) {
        var tmp = clipMask[i][0];
        clipMask[i][0] = clipMask[i][1];
        clipMask[i][1] = tmp;
    }
    
    var mymap = L.map('mapid').setView([-33, 147], 6);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="http://mapbox.com">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(mymap);

    var windSpeed = L.leafletGeotiff(
            url='tif/wind_speed.tif',
            options={band: 0,
                displayMin: 0,
                displayMax: 30,
                name: 'Wind speed',
                colorScale: 'rainbow',
                clampLow: false,
                clampHigh: true,
                //vector:true,
                arrowSize: 20,
            }
        ).addTo(mymap);
        
    var windDirection = L.leafletGeotiff(
            url='tif/wind_direction.tif',
            options={band: 0,
                displayMin: 0,
                displayMax: 360,
                name: 'Wind direction',
                //colorScale: 'rainbow',
                //clampLow: false,
                //clampHigh: true,
                vector:true,
                arrowSize: 20,
            }
        ).addTo(mymap);

    document.getElementById('colorScaleImage').setAttribute('src',windSpeed.colorScaleData);
    
    mymap.on('click', function(e) {        
        if (!marker) {
            marker = L.marker([e.latlng.lat,e.latlng.lng]).addTo(mymap);
        } else {
            marker.setLatLng([e.latlng.lat,e.latlng.lng]);
        }
        document.getElementById("windSpeedValue").innerHTML = windSpeed.getValueAtLatLng(e.latlng.lat,e.latlng.lng).toFixed(1);
        document.getElementById("windDirectionValue").innerHTML = windDirection.getValueAtLatLng(e.latlng.lat,e.latlng.lng).toFixed(0);
    });
   
