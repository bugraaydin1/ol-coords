export default class CoordsControl extends ol.control.Control {
	constructor(opt_options) {
		const options = opt_options || {};

		const wrapper = document.createElement("form");
		wrapper.className = "input-group ol-unselectable ol-control";
		wrapper.style.top = "0.5em";
		wrapper.style.right = "1em";

		const input = document.createElement("input");
		input.autocomplete = "off";
		input.placeholder = options.placeholder || "Koordinata git";
		input.id = "goto-coordinates";
		input.className = "form-control";
		input.type = "tel";
		input.style.background = "transparent";
		input.style.width = "110px";
		input.style.height = "21px";
		input.style.border = "none";
		input.style.outline = "none";
		input.style.transition = "300ms ease-out width";

		const buttonWrapper = document.createElement("div");
		buttonWrapper.style.display = "inline-block";
		buttonWrapper.style.verticalAlign = "middle";

		const button = document.createElement("button");
		button.type = "submit";
		button.style.width = "30px";
		button.innerHTML = "➤";

		wrapper.appendChild(input);
		wrapper.appendChild(buttonWrapper);
		buttonWrapper.appendChild(button);

		super({
			element: wrapper,
			target: options.target,
		});

		const setInputCollapse = (collapse = true) => {
			input.style.width = collapse ? "110px" : "210px";
		};

		input.addEventListener("focus", () => {
			setInputCollapse(false);
			input.select();
		});
		input.addEventListener("focusout", () => {
			setInputCollapse(true);
		});
		wrapper.addEventListener("mouseover", () => {
			setInputCollapse(false);
		});

		button.addEventListener("click", this.handleGotoCoords.bind(this), false);
	}

	handleGotoCoords(evt) {
		evt.preventDefault();

		let coords;
		const coordsValue = document.getElementById("goto-coordinates").value;
		try {
			coords = coordsValue.split(",").map((el) => parseFloat(el).toFixed(5));

			if (coords.length !== 2) {
				coords = undefined;
				throw new Error("Input is not a valid coordinates array.");
			}
		} catch (err) {
			console.warn(err);
		}

		coords && this.getMap().getView().setCenter(coords);
	}
}
