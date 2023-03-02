function xLables(rounds) {
	var array = [...Array(rounds + 1).keys()];
	array.shift();
	return array;
}
function getColor(index, players, saturation = "100%", value = "50%") {
	var h = (360 / players) * (index + 1);
	return "hsl(" + h + ", " + saturation + "," + value + ")";
}

function lineChart(canvasId, data) {
	new Chart(canvasId, {
		type: "line",
		data: {
			labels: xLables(data.rounds),
			datasets: data.datasets.map((row, index, array) => {
				return {
					label: row.label,
					data: row.values,
					borderColor: getColor(index, array.length),
					backgroundColor: getColor(index, array.length),
					fill: false,
				};
			}),
		},
		options: {
			legend: { display: true },
			scales: {
				yAxes: [
					{
						display: true,
						ticks: {
							beginAtZero: true,
							steps: 10,
							stepValue: 5,
						},
					},
				],
			},
		},
	});
}
function barChart(canvasId, data) {
	new Chart(canvasId, {
		type: "bar",
		data: {
			labels: xLables(data.rounds),
			datasets: data.datasets.map((row, index, array) => {
				return {
					label: row.label,
					data: row.values,
					borderColor: getColor(index, array.length),
					backgroundColor: getColor(index, array.length),
					fill: false,
				};
			}),
		},
		options: {
			legend: { display: true },
			scales: {
				yAxes: [
					{
						display: true,
						ticks: {
							beginAtZero: true,
							steps: 10,
							stepValue: 5,
						},
					},
				],
			},
		},
	});
}

function stackedBarChart(canvasId, data) {
	var datasets = [];
	data.datasets.map((row, index, array) => {
		var requestDiff = [];
		row.values.demand.forEach((reqVal, index) => {
			row.values.demand[index] = reqVal - row.values.supply[index];
		});
		datasets.push({
			label: row.label,
			data: row.values.supply,
			stack: row.label,
			borderColor: getColor(index, array.length),
			backgroundColor: getColor(index, array.length),
			fill: false,
		});
		datasets.push({
			label: row.label + "_Nachfrage",
			data: row.values.demand,
			stack: row.label,
			borderColor: getColor(index, array.length),
			backgroundColor: getColor(index, array.length, "30%"),
			fill: false,
		});
	});

	new Chart(canvasId, {
		type: "bar",
		data: {
			labels: xLables(data.rounds),
			datasets: datasets,
		},
		options: {
			legend: {
				display: true,
				labels: {
					filter: function (item, chart) {
						// Logic to remove a particular legend item goes here
						return !item.text.includes("_Nachfrage");
					},
				},
			},
			responsive: false,
			tooltips: { enabled: false },
			hover: { mode: null },
			scales: {
				yAxes: [
					{
						display: true,
						stacked: true,
						ticks: {
							beginAtZero: true,
							steps: 10,
							stepValue: 5,
						},
					},
				],
				xAxes: [
					{
						display: true,
						stacked: true,
					},
				],
			},
		},
	});
}
