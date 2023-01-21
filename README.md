# Chart plotter

## Usage:

Using this plotter is preaty easy.

### Setup

Add the following scripts to your HTML-page:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>
<script src="./script.js"></script>
```

Add a `Canvas`-Element to your body and give it an unique ID.

```html
<canvas id="myChart" style="width: 100%; max-width: 700px"></canvas>
```

You can now Draw the following charts:

- [Line charts](#drawing-linecharts)

### drawing linecharts

use the `linechart(canvasId, data)` function.

```javascript
lineChart("myChart", {
	rounds: 10, // how many Rounds (x axis)
	players: [
		// a list of PLayers (the different lines)
		{
			name: "Player A", // name of each player (lable of line)
			values: [860, 1140, 1060, 1060, 1070], // y values (e.g. how much money)
		},
		{
			name: "Player B",
			values: [1060, 1070, 1060, 860, 1140],
		},
		{
			name: "Player C",
			values: [1060, 1140, 1070, 860, 1060],
		},
		{
			name: "Player D",
			values: [1060, 1070, 860, 1060, 1140],
		},
	],
});
```
