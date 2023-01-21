function xLables(rounds) {
	var array = [...Array(data.rounds + 1).keys()];
	array.shift();
	return array;
}
function getColor(index, players) {
	var h = (360 / players) * (index + 1);
	return "hsl(" + h + ", 100%, 50%)";
}

function lineChart(canvasId, data) {
	new Chart(canvasId, {
		type: "line",
		data: {
			labels: xLables(data.rounds),
			datasets: data.players.map((row, index, array) => {
				return {
					label: row.name,
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
