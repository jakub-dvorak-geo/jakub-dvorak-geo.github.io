/*
Button functionality for displaying model results.
*/

function getFigData(value) {
  switch (value) {
    case 'AWR_40':
      return {
        filename: "AWR_0-40cm",
        type: "drought",
        desc: "Soil moisture represents the actual modeled soil moisture content (based on SoilClIm water balance model) expressed as the percentage of the plant available water, i.e. the volume of water between the field capacity and the wilting point. The values of the indicator range form 0% (wilting point) to 100% (field capacity). The meteorological weather forecast data are derived from Integrated Weather Forecast (IFS) by European Center for Medium-range Weather Forecast (ECMWF).",
      };
    case 'AWR_100':
      return {
        filename: "AWR_0-100cm",
        type: "drought",
        desc: "Soil moisture represents the actual modeled soil moisture content (based on SoilClIm water balance model) expressed as the percentage of the plant available water, i.e. the volume of water between the field capacity and the wilting point. The values of the indicator range form 0% (wilting point) to 100% (field capacity). The meteorological weather forecast data are derived from Integrated Weather Forecast (IFS) by European Center for Medium-range Weather Forecast (ECMWF).",
      };
    case 'AWR_200':
      return {
        filename: "AWR_0-200cm",
        type: "drought",
        desc: "Soil moisture represents the actual modeled soil moisture content (based on SoilClIm water balance model) expressed as the percentage of the plant available water, i.e. the volume of water between the field capacity and the wilting point. The values of the indicator range form 0% (wilting point) to 100% (field capacity). The meteorological weather forecast data are derived from Integrated Weather Forecast (IFS) by European Center for Medium-range Weather Forecast (ECMWF).",
      };
    case 'AWP_40':
      return {
        filename: "AWP_0-40cm",
        type: "drought",
        desc: "Drought intensity is based on the globally-adapted SoilClim water balance model (Řehoř et al., 2021) which caluculates relative soil moisture using various meteorological inputs together with information about vegetation and soils. The meteorological inputs are derived from the Integrated Weather Forecast (IFS) by the European Center for Medium-range Weather Forecast (ECMWF), the canopy information is based on the globel Leaf area index, and the soil inputs are based on SoilGrids (Hengl et al. 2014, Hengl et al. 2017). The Drought intensity is calculated as an anomaly of current soil moisture content compared to the average of reference period (1981-2020). For each pixel the model calculates daily soil moisture values and based on the comparison to the reference period value it categorizes the pixel into one of the six categories of drought intensity. These categories are derived from historical percentile values. For each day and each pixel, the percentiles are determined using the +/-10 day window (i.e., 21 days) for a given day throughout the whole reference period (i.e., 40 years). With this approach, the percentiles are determined for each day of the year based on 840 values. More specifically, the 1st, 2nd, 5th, 10th, 20th, and 30th percentiles are used as the thresholds for determining the final drought intensity categorical values, which range from zero to six, representing different drought severity categories (Table 1). Results of the model are in a form of geoTIFF files with a 500 m spatial resolution.",
      };
    case 'AWP_100':
      return {
        filename: "AWP_0-100cm",
        type: "drought",
        desc: "Drought intensity is based on the globally-adapted SoilClim water balance model (Řehoř et al., 2021) which caluculates relative soil moisture using various meteorological inputs together with information about vegetation and soils. The meteorological inputs are derived from the Integrated Weather Forecast (IFS) by the European Center for Medium-range Weather Forecast (ECMWF), the canopy information is based on the globel Leaf area index, and the soil inputs are based on SoilGrids (Hengl et al. 2014, Hengl et al. 2017). The Drought intensity is calculated as an anomaly of current soil moisture content compared to the average of reference period (1981-2020). For each pixel the model calculates daily soil moisture values and based on the comparison to the reference period value it categorizes the pixel into one of the six categories of drought intensity. These categories are derived from historical percentile values. For each day and each pixel, the percentiles are determined using the +/-10 day window (i.e., 21 days) for a given day throughout the whole reference period (i.e., 40 years). With this approach, the percentiles are determined for each day of the year based on 840 values. More specifically, the 1st, 2nd, 5th, 10th, 20th, and 30th percentiles are used as the thresholds for determining the final drought intensity categorical values, which range from zero to six, representing different drought severity categories (Table 1). Results of the model are in a form of geoTIFF files with a 500 m spatial resolution.",
      };
    case 'AWP_200':
      return {
        filename: "AWP_0-200cm",
        type: "drought",
        desc: "Drought intensity is based on the globally-adapted SoilClim water balance model (Řehoř et al., 2021) which caluculates relative soil moisture using various meteorological inputs together with information about vegetation and soils. The meteorological inputs are derived from the Integrated Weather Forecast (IFS) by the European Center for Medium-range Weather Forecast (ECMWF), the canopy information is based on the globel Leaf area index, and the soil inputs are based on SoilGrids (Hengl et al. 2014, Hengl et al. 2017). The Drought intensity is calculated as an anomaly of current soil moisture content compared to the average of reference period (1981-2020). For each pixel the model calculates daily soil moisture values and based on the comparison to the reference period value it categorizes the pixel into one of the six categories of drought intensity. These categories are derived from historical percentile values. For each day and each pixel, the percentiles are determined using the +/-10 day window (i.e., 21 days) for a given day throughout the whole reference period (i.e., 40 years). With this approach, the percentiles are determined for each day of the year based on 840 values. More specifically, the 1st, 2nd, 5th, 10th, 20th, and 30th percentiles are used as the thresholds for determining the final drought intensity categorical values, which range from zero to six, representing different drought severity categories (Table 1). Results of the model are in a form of geoTIFF files with a 500 m spatial resolution.",
      };
    case 'AWD_40':
      return {
        filename: "AWD_0-40cm",
        type: "drought",
        desc: "Soil moisture anomalies layer (based on SoilClIm water balance model) represents deviation of soil moisture content from the long term median of the 1961-2010 reference period. This value is calculated as the Soil moisture value for a given day (+/-10 day window, i.e., 21 days) minus the value of the 50th percentile derived from the reference period. The final values are represented in units of mm as the surplus or deficient height of the water column. The meteorological weather forecast data are stereamlined from Integrated Weather Forecast (IFS) by European Center for Medium-range Weather Forecast (ECMWF).",
      };
    case 'AWD_100':
      return {
        filename: "AWD_0-100cm",
        type: "drought",
        desc: "Soil moisture anomalies layer (based on SoilClIm water balance model) represents deviation of soil moisture content from the long term median of the 1961-2010 reference period. This value is calculated as the Soil moisture value for a given day (+/-10 day window, i.e., 21 days) minus the value of the 50th percentile derived from the reference period. The final values are represented in units of mm as the surplus or deficient height of the water column. The meteorological weather forecast data are stereamlined from Integrated Weather Forecast (IFS) by European Center for Medium-range Weather Forecast (ECMWF).",
      };
    case 'AWD_200':
      return {
        filename: "AWD_0-200cm",
        type: "drought",
        desc: "Soil moisture anomalies layer (based on SoilClIm water balance model) represents deviation of soil moisture content from the long term median of the 1961-2010 reference period. This value is calculated as the Soil moisture value for a given day (+/-10 day window, i.e., 21 days) minus the value of the 50th percentile derived from the reference period. The final values are represented in units of mm as the surplus or deficient height of the water column. The meteorological weather forecast data are stereamlined from Integrated Weather Forecast (IFS) by European Center for Medium-range Weather Forecast (ECMWF).",
      };
    case 'HI':
      return {
        filename: "HI",
        type: "heatwave",
        desc: "<b>Description:</b> HI product - Iorem ipsum...",
      }
    case 'UTCI':
      return {
        filename: "UTCI",
        type: "heatwave",
        desc: "<b>Description:</b> UTCI product - Iorem ipsum...",
      }
    case 'FWI':
      return {
        filename: "FWI",
        type: "wildfire",
        desc: "Fire spread indicates whether the conditions are suitable for fire occurrence and spread and is based on the Canadian Fire Weather Index (FWI, Wagner, 1987) calculated from temperature, relative humidity, wind, and precipitation for today and the next 9 days based on the ECMWF IFS weather forecast data. As the mean value and amplitude of FWI differ depending on the local vegetation and climate context the specific threshold values were derived for 18 global environmental zones. Each environmental zone has been assigned a unique distribution of FWI values for fire danger categories that were determined based on an extensive review of scientific literature.",
      }
    case 'DFM10h':
      return {
        filename: "DFM10H",
        type: "wildfire",
        desc: "Fuel moisture represents the dead fuel moisture content of 10-hour fuel and is calculated based on temperature, relative air humidity, cloud cover, snow cover, and precipitation. The method of calculation is based on the NFDRS basic equations (Cohen & Deeming, 1985). The provided fuel moisture values are calculated daily from the maximum daily temperature and the minimum relative humidity to represent the daily “worst-case scenario”. Calculated values typically range from 1% to 35% with ignitions generally occurring when values drop below 15%. As fuel moisture decreases below 15%, the fire danger increases. Values below 6% are of great concern with a possible extreme fire behavior.",
      }
  }
}

function setFigData(fig_data) {
  const fig = document.getElementById(fig_data.type + "_fig")
  const desc = document.getElementById(fig_data.type + "_desc")
  const download = document.getElementById(fig_data.type + "_download")
  const download_old = document.getElementById(fig_data.type + "_download_old")
  fig.src = "media/figs/" + fig_data.filename + ".jpg"
  desc.innerHTML = "<b>Description:</b> " + fig_data.desc
  download.href = fig_data.path
  download.href = "media/figs/" + fig_data.filename + ".jpg"
  download_old.href = "media/figs_old/" + fig_data.filename + "_last_week.zip"
}

function getPartnerLinks(fig_type) {
  switch (fig_type) {
    case "drought":
      return [
        {icon: "media/logo/EN_logo_CzechGlobe_transparent.png", url: "https://www.intersucho.cz/"},
        {icon: "media/logo/TU_Wien-Logo.svg", url: "https://dataviewer.geo.tuwien.ac.at/"},
        {icon: "media/logo/TU_Wien-Logo.svg", url: "https://www.zamg.ac.at/incaanalyse"},
        {icon: "media/logo/DHMZ logo.png", url: "https://meteo.hr/klima_e.php?section=klima_pracenje&param=spi"},
        ]
    case "heatwave":
      return [
        {icon: "media/logo/TU_Wien-Logo.svg", url: "https://warnungen.zamg.at/wsapp/de/alle/heute/-114294,119674,916956,672359"},
        {icon: "media/logo/DHMZ logo.png", url: "https://meteo.hr/prognoze_e.php?section=prognoze_specp&param=toplinskival_5"},
        {icon: "", url: ""},
        ]
    case "wildfire":
      return [
        {icon: "media/logo/EN_logo_CzechGlobe_transparent.png", url: "https://www.firerisk.cz/"},
        {icon: "media/logo/TU_Wien-Logo.svg", url: "https://www.zamg.ac.at/cms/de/wetter/wetter-oesterreich/waldbrand"},
        {icon: "", url: ""},
        ]
  }
}

function setPartnerLinks(fig_type, partners) {
  const partner_div = document.getElementById(fig_type + "_partners")

  inner_html = ""
  for (var i = 0; i < partners.length; i++) {
    inner_html = inner_html + '<a href="' + partners[i].url +
      '"><img src="' + partners[i].icon + '" style="width:100%" /></a>'
  }
  partner_div.innerHTML = inner_html
}

function showCorrectFig(event) {
  let fig_data = getFigData(event.target.value)
  setFigData(fig_data)

  let partner_links = getPartnerLinks(fig_data.type)
  setPartnerLinks(fig_data.type, partner_links)
}

function addFigEventListeners(element_name) {
  var radios = document.getElementsByName(element_name);

  showCorrectFig({target: radios[0]})

  for (var i = 0; i < radios.length; i++) {
      radios[i].addEventListener('click', showCorrectFig);
  }
}

window.onload = function() {
  addFigEventListeners("drought_btns")
  addFigEventListeners("heatwave_btns")
  addFigEventListeners("wildfire_btns")
}


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
  let org1_html = '<a href="'+feature.properties.org1_link+'" title="'+feature.properties.org2_title+'"><img src="' + feature.properties.org1_logo + '" width="100%" /></a>'
  if (feature.properties.hasOwnProperty('org2_link')) {
    let org2_html = '<br><a href="'+feature.properties.org2_link+'" title="'+feature.properties.org2_title+'"><img src="'+feature.properties.org2_logo+'" width="100%" /></a>'
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
  const response_land = await fetch('./media/map/land_earth.geojson');
  const geojson_land = await response_land.json();
  const response_countries = await fetch('./media/map/countries.geojson');
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
  var map = L.map('map', {
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

/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIE() {
  var ua = window.navigator.userAgent;

  var msie = ua.indexOf("MSIE ");
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10);
  }

  var trident = ua.indexOf("Trident/");
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf("rv:");
    return parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10);
  }

  // var edge = ua.indexOf('Edge/');
  // if (edge > 0) {
  //     // Edge (IE 12+) => return version number
  //     return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  // }

  // other browser
  return false;
}

function setVideoHeight() {
  const videoRatio = 1920 / 1080;
  const minVideoWidth = 400 * videoRatio;
  let secWidth = 0,
    secHeight = 0;

  secWidth = videoSec.width();
  secHeight = videoSec.height();

  secHeight = secWidth / 2.13;

  if (secHeight > 600) {
    secHeight = 600;
  } else if (secHeight < 400) {
    secHeight = 400;
  }

  if (secWidth > minVideoWidth) {
    $("video").width(secWidth);
  } else {
    $("video").width(minVideoWidth);
  }

  videoSec.height(secHeight);
}

// Parallax function
// https://codepen.io/roborich/pen/wpAsm
var background_image_parallax = function ($object, multiplier) {
  multiplier = typeof multiplier !== "undefined" ? multiplier : 0.5;
  multiplier = 1 - multiplier;
  var $doc = $(document);
  $object.css({ "background-attatchment": "fixed" });
  $(window).scroll(function () {
    var from_top = $doc.scrollTop(),
      bg_css = "center " + multiplier * from_top + "px";
    $object.css({ "background-position": bg_css });
  });
};

$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $(".scrolltop:hidden").stop(true, true).fadeIn();
  } else {
    $(".scrolltop").stop(true, true).fadeOut();
  }

  // Make sticky header
  if ($(this).scrollTop() > 158) {
    $(".tm-nav-section").addClass("sticky");
  } else {
    $(".tm-nav-section").removeClass("sticky");
  }
});

let videoSec;

$(function () {
  if (detectIE()) {
    alert(
      "Please use the latest version of Edge, Chrome, or Firefox for best browsing experience."
    );
  }

  const mainNav = $("#tmMainNav");
  mainNav.singlePageNav({
    filter: ":not(.external)",
    offset: $(".tm-nav-section").outerHeight(),
    updateHash: true,
    beforeStart: function () {
      mainNav.removeClass("show");
    },
  });

  videoSec = $("#tmVideoSection");

  // Adjust height of video when window is resized
  $(window).resize(function () {
    setVideoHeight();
  });

  setVideoHeight();

  $(window).on("load scroll resize", function () {
    var scrolled = $(this).scrollTop();
    var vidHeight = $("#hero-vid").height();
    var offset = vidHeight * 0.6;
    var scrollSpeed = 0.25;
    var windowWidth = window.innerWidth;

    if (windowWidth < 768) {
      scrollSpeed = 0.1;
      offset = vidHeight * 0.5;
    }

    $("#hero-vid").css(
      "transform",
      "translate3d(-50%, " + -(offset + scrolled * scrollSpeed) + "px, 0)"
    ); // parallax (25% scroll rate)

    // Magnific pop up
    $(".tm-gallery").magnificPopup({
      delegate: "a", // child items selector, by clicking on it popup will open
      type: "image",
      gallery: { enabled: true },
      // other options
    });
  });

  // Parallax image background
  background_image_parallax($(".tm-parallax"), 0.4);
  background_image_parallax($(".tm-parallax-2"), 0.4);
  background_image_parallax($(".tm-parallax-3"), 0.4);
  background_image_parallax($(".tm-parallax-4"), 0.3);
  background_image_parallax($(".tm-parallax-5"), 0.4);
  background_image_parallax($(".tm-parallax-7"), 0.4);

  // Back to top
  $(".scroll").click(function () {
    $("html,body").animate({ scrollTop: $("#home").offset().top }, "1000");
    return false;
  });
});
// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
