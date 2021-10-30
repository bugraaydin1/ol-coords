// Ex. shows how to use with openlayers installed via CDN.
// For using 'import' statement you need to bundle the app
// using a tool like parcel. You can install
// parcel with npm in CLI `npm i -D parcel`
// Then just run `parcel index.html`
// and open browser: http://localhost:1234/

import CoordsControl from "../../dist/cdn/ol-coords-cdn";

(function () {
	const olMap = new ol.Map({
		target: "map",
		layers: [
			new ol.layer.Tile({
				source: new ol.source.OSM(),
			}),
		],
		controls: ol.control.defaults({ attribution: true }).extend([
			new ol.control.ZoomSlider(),
			new CoordsControl({
				placeholder: "Fly to coordinates",
			}),
		]),
		view: new ol.View({
			zoom: 7,
			center: [34, 39], // ol.proj.fromLonLat([35, 39]) - projection: 'EPSG:3857'
			projection: ol.proj.get("EPSG:4326"),
		}),
	});
})();
