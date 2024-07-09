function main() {
	//define map
	var map = L.map('map', {
		center: [50.05, 14.45],
		zoom: 11,
	});
	
	//define basemaps
	var basemap_light = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map)
	var basemap_dark = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'})

	//define symbology for districts
	var style_district = function(feature) {
		return {
		fillColor: "#ff7800",
		color: "#000",
		opacity: 1,
		fillOpacity: 0.0
			};
		};	
	//define city district polygons (opendata.praha.eu)
	async function fetch_city_districts(map) {
		const response_city_districts = await fetch('data/prague-city-districts.json');
		const json_city_districts = await response_city_districts.json();
		await L.geoJSON(json_city_districts, {
			onEachFeature: onEachDistrict,
			style: style_district,
		}).addTo(map).on('click', function(e){
			console.log(e.layer.feature)
		});
	
	}

	fetch_city_districts(map)

	//define basic popups for both layers
	function onEachDistrict(feature, layer) {
		var text = feature.properties.name
		layer.bindPopup(text);
	};
	function onEachFeature(feature, layer) {
		var text = `<h4>Zaplněnost kontejnerů na adrese `+feature.properties.name+`:</h4>`
		layer.bindPopup(text);
	};

	//define symbology for containers
	var layer_style = function(feature) {
		switch (feature.properties.district) {
			case 'Praha 1':  return {fillColor: '#f94144'};
			case 'Praha 2':  return {fillColor: '#f3722c'};
			case 'Praha 3':  return {fillColor: '#f8961e'};
			case 'Praha 4':  return {fillColor: '#f9844a'};
			case 'Praha 5':  return {fillColor: '#f9c74f'};
			case 'Praha 6':  return {fillColor: '#90be6d'};
			case 'Praha 7':  return {fillColor: '#43aa8b'};
			case 'Praha 8':  return {fillColor: '#4d908e'};
			case 'Praha 9':  return {fillColor: '#577590'};
			case 'Praha 10': return {fillColor: '#277da1'};
			case 'Praha 16': return {fillColor: '#1e6091'};
			case 'Praha 18': return {fillColor: '#f95738'};
			
			case 'Praha-1':  return {fillColor: '#f94144'};
			case 'Praha-2':  return {fillColor: '#f3722c'};
			case 'Praha-3':  return {fillColor: '#f8961e'};
			case 'Praha-4':  return {fillColor: '#f9844a'};
			case 'Praha-5':  return {fillColor: '#f9c74f'};
			case 'Praha-6':  return {fillColor: '#90be6d'};
			case 'Praha-7':  return {fillColor: '#43aa8b'};
			case 'Praha-8':  return {fillColor: '#4d908e'};
			case 'Praha-9':  return {fillColor: '#577590'};
			case 'Praha-10': return {fillColor: '#277da1'};
			case 'Praha-16': return {fillColor: '#1e6091'};
			case 'Praha-18': return {fillColor: '#f95738'};
			
			case 'praha-1':  return {fillColor: '#f94144'};
			case 'praha-2':  return {fillColor: '#f3722c'};
			case 'praha-3':  return {fillColor: '#f8961e'};
			case 'praha-4':  return {fillColor: '#f9844a'};
			case 'praha-5':  return {fillColor: '#f9c74f'};
			case 'praha-6':  return {fillColor: '#90be6d'};
			case 'praha-7':  return {fillColor: '#43aa8b'};
			case 'praha-8':  return {fillColor: '#4d908e'};
			case 'praha-9':  return {fillColor: '#577590'};
			case 'praha-10': return {fillColor: '#277da1'};
			case 'praha-16': return {fillColor: '#1e6091'};
			case 'praha-18': return {fillColor: '#f95738'};
		}
	};
	var geojsonMarkerOptions = {
		radius: 8,
		//fillColor: "#ff7800",
		color: "#000",
		weight: 1,
		opacity: 1,
		fillOpacity: 0.7
	};
	
	// get containers from api
	function get_containers() {
		$.ajax({
			headers: {"Content-Type": 'application/json; charset=utf-8', "X-Access-Token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphY29iZHZvcmFrY3pAZ21haWwuY29tIiwiaWQiOjE0NDUsIm5hbWUiOm51bGwsInN1cm5hbWUiOm51bGwsImlhdCI6MTY3NTQyNDM4NywiZXhwIjoxMTY3NTQyNDM4NywiaXNzIjoiZ29sZW1pbyIsImp0aSI6ImIzMmU4MGU1LTcwNjQtNGQzMS1iZDQ5LTk4ZjI2ZmNmYjQ2YyJ9.rUnyerwKPHyaoAfLDv0GFu9hD4phZnX-ABy2FKC6rxE'},
			dataType: "json",
			url: 'https://api.golemio.cz/v2/sortedwastestations/?onlyMonitored=true',
			success: function(data) {
				console.log(data);

				var containers = L.geoJSON(data, {
					onEachFeature:onEachFeature,
					pointToLayer: function (feature, latlng) {
						return L.circleMarker(latlng, geojsonMarkerOptions);
						},
					style: layer_style,
					click: onClick,
					}).addTo(map).on('click', onClick)
				
				var baseMaps = {
					"Light basemap": basemap_light,
					"Dark basemap": basemap_dark
				};
				var overlayMaps = {
					"City districts": prague_city_districts,
					"Trash containers": containers,
				};
				L.control.layers(baseMaps, overlayMaps).addTo(map);
			}
		});
	}
	var containers = get_containers()
	
	//define popup functionality for containers
	function onClick(e) {
		var popup_str = '<h4>Zaplněnost kontejnerů na adrese '+e.layer.feature.properties.name+':</h4><br><table>'

		for (let container in e.layer.feature.properties.containers) {
			
			
			var d = new Date(e.layer.feature.properties.containers[container].last_measurement.measured_at_utc);
			var popup_str = popup_str + '<tr><th>' + e.layer.feature.properties.containers[container].trash_type.description + 
							'</th><th> <b>' + e.layer.feature.properties.containers[container].last_measurement.percent_calculated + '%</b> </th><th>' +
							'(' + d.toLocaleString('cs') + ')</th></tr>'
			e.layer.getPopup().setContent(popup_str + '</table>')
			/*
			query_str = '?containerId='+e.layer.feature.properties.containers[container].container_id+'&limit=1'
			$.ajax({
				headers: {"Content-Type": 'application/json; charset=utf-8', "X-Access-Token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphY29iZHZvcmFrY3pAZ21haWwuY29tIiwiaWQiOjE0NDUsIm5hbWUiOm51bGwsInN1cm5hbWUiOm51bGwsImlhdCI6MTY3NTQyNDM4NywiZXhwIjoxMTY3NTQyNDM4NywiaXNzIjoiZ29sZW1pbyIsImp0aSI6ImIzMmU4MGU1LTcwNjQtNGQzMS1iZDQ5LTk4ZjI2ZmNmYjQ2YyJ9.rUnyerwKPHyaoAfLDv0GFu9hD4phZnX-ABy2FKC6rxE'},
				dataType: "json",
				url: 'https://api.golemio.cz/v2/sortedwastestations/measurements/'+query_str,
				success: function(data) {
					if (data[0] === undefined) {
						console.log('This is undefined');
						popup_str = popup_str + '<tr><th>' + e.layer.feature.properties.containers[container].trash_type.description +
							'</th><th> NaN%</th><th> </th>'
					} else {
						console.log(data[0])
						var d = new Date(data[0].measured_at_utc);
						popup_str = popup_str + '<tr><th>' + e.layer.feature.properties.containers[container].trash_type.description + 
							'</th><th> <b>' + data[0].percent_calculated + '%</b> </th><th>' +
							'(' + d.toLocaleString('cs') + ')</th></tr>';
					};
					e.layer.getPopup().setContent(popup_str + '</table>')
				}
			});
			*/
		}
		
	}
	
	// define groups of layers
	// var baseMaps = {
		// "Light basemap": basemap_light,
		// "Dark basemap": basemap_dark
	// };
	// var overlayMaps = {
		// // "City districts": prague_city_districts,
		// "Trash containers": containers,
	// };
	// L.control.layers(baseMaps).addTo(map);

}
main()