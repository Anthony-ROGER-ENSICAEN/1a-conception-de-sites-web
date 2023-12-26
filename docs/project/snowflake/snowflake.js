fetch("snowflake/snowflake.html")
	.then(stream => stream.text())
	.then(text => define(text));

function define(html) {
	class Snowflake extends HTMLElement {
		constructor() {
			super();
			var shadow = this.attachShadow({ mode: 'open' });
			shadow.innerHTML = html;
		}
		connectedCallback() {
			var $this = this.shadowRoot.querySelector(".snowflake");
			$this.style.left = this.rand(120, -10, "%");
			$this.style.top = this.rand(100, -80, "%");
			$this.style.width = this.rand(7, 1, "px");
			$this.style.height = $this.style.width;
			$this.style.animationDelay = this.rand(-9, 1, "s");
			$this.style.animationDuration = this.rand(7, 3, "s");
			$this.style.filter = "blur(" + this.rand(5, 0, "px") + ")";
			$this.style.zIndex = this.rand(100, 0, "");
		}

		rand(max, offset, unit) {
			return (Math.floor(Math.random() * max) + offset) + unit
		}

	}

	customElements.define('ar-snowflake', Snowflake);
}