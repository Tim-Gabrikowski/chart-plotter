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
- [Bar charts](#drawing-barcharts)
- [Stacked bar charts](#drawing-stacked-barchart)

### drawing linecharts

use the `lineChart(canvasId, data)` function.

```javascript
lineChart("myChart", {
	rounds: 10,
	datasets: [
		{
			label: "Player A",
			values: [860, 1140, 1060, 1060, 1070],
		},
		{
			label: "Player B",
			values: [1060, 1070, 1060, 860, 1140],
		},
		{
			lable: "Player C",
			values: [1060, 1140, 1070, 860, 1060],
		},
		{
			lable: "Player D",
			values: [1060, 1070, 860, 1060, 1140],
		},
	],
});
```

### drawing barcharts

use the `barChart(canvasId, data)` function.

```javascript
barChart("myChart", {
	rounds: 10,
	datasets: [
		{
			label: "Player A",
			values: [860, 1140, 1060, 1060, 1070],
		},
		{
			label: "Player B",
			values: [1060, 1070, 1060, 860, 1140],
		},
		{
			lable: "Player C",
			values: [1060, 1140, 1070, 860, 1060],
		},
		{
			lable: "Player D",
			values: [1060, 1070, 860, 1060, 1140],
		},
	],
});
```

### drawing stacked barchart

use the `stackedBarChart(canvasId, data)` function. Warning! The data is formatted differently!

```javascript
stackedBarChart("myChart", {
	rounds: 10,
	datasets: [
		// list of players :
		{
			label: "Player A", // playernames
			values: {
				demand: [12, 15, 2, 5, 7], // demand values (in order of x axis)
				supply: [3, 15, 2, 4, 3], // supply values (in order of x axis)
			},
		},
		{
			label: "Player B",
			values: {
				demand: [12, 15, 2, 5, 7],
				supply: [3, 15, 2, 4, 3],
			},
		},
	],
});
```
