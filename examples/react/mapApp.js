// This is not a standalone function
// is only for demonstration.
// You need to create a React App
// run in CLI `npx create-react-app mapApp`

import React, { useEffect } from "react";
import Map from "ol/Map";
import View from "ol/View";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import { get as getProjection } from "ol/proj";
import { ZoomSlider } from "ol/control";
import CoordsControl from "ol-coords/dist/coords";
import "ol/ol.css";

function App() {
	useEffect(() => {
		new Map({
			target: "map",
			layers: [
				new TileLayer({
					source: new OSM(),
				}),
			],
			controls: [
				new ZoomSlider(),
				new CoordsControl({ placeholder: "Fly to coordinates" }),
			],
			view: new View({
				zoom: 7,
				center: [34, 39],
				projection: getProjection("EPSG:4326"),
			}),
		});
	}, []);

	return (
		<div>
			<h2>OpenLayers Coords Control - for React</h2>
			<div id="map" className="map" />
		</div>
	);
}

export default App;
