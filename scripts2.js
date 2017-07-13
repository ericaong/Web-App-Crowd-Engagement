$(function() {
	let BASE_URL = "http://scratchpad.sensorup.com/OGCSensorThings/v1.0";

	// $('#ajax-ultrasonic').on('click', function() {
	// 	$.get(BASE_URL + '/Datastreams(990578)/Observations' 
	// 		+ '?' + '$orderby=phenomenonTime' + '&'
	// 		+ '$select=result', function(response, status) {
	// 			console.log(Number(response.value[0].result));
	// 			$('#dwell-h3').html(response.value[0].result);
	// 	});
	// });
	

	// $('#ajax-vibration').on('click', function() {
	// 	$.get(BASE_URL + '/Datastreams(990587)/Observations' 
	// 		+ '?' + '$orderby=phenomenonTime' + '&'
	// 		+ '$select=result', function(response, status) {
	// 			console.log(Number(response.value[0].result));
	// 			$('#footfall-h3').html(response.value[0].result);
	// 	});
	// });
	
	// $('#ajax-sound').on('click', function() {
	// 	$.get(BASE_URL + '/Datastreams(990590)/Observations' 
	// 		+ '?' + '$orderby=phenomenonTime' + '&'
	// 		+ '$select=result', function(response, status) {
	// 			console.log(Number(response);
	// 			$('#sound-h3').html(response.value[0].result);
	// 	});
	// });
	

	// $('#ajax-motion').on('click', function() {
	// 	$.get(BASE_URL + '/Datastreams(990584)/Observations' 
	// 		+ '?' + '$orderby=phenomenonTime' + '&'
	// 		+ '$select=result', function(response, status) {
	// 			console.log(Number(response.value[0].result));
	// 			$('#motion-h2').html(response.value[0].result);
	// 	});
	// });
	
	let ctx1 = $("#chart-satisfaction");

	let myChart1 = new Chart(ctx1, {
	    type: 'bar',
	    data: {
	        labels: ["Likes", "Dislikes"],
	        datasets: [{
	            label: 'Number of Votes',
	            data: [19, 5],
	            backgroundColor: [
	                'rgba(75, 192, 192, 0.2)',
	                'rgba(255, 99, 132, 0.2)',
	            ],
	            borderColor: [
	                'rgba(75, 192, 192, 1)',
	                'rgba(255,99,132,1)',
	                
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero:true
	                }
	            }]
	        }
	    }
	});

	let ctx2 = $("#chart-motion");

	let myChart2 = new Chart(ctx2, {
		type: 'line',
		data: {
			labels: ["13:00", "13:10", "13:15", "13:20", "13:25"],
			datasets: [{
				data: [0, 1],
				backgroundColor: 'rgba(0, 0, 0, 0)',
				borderColor: 'rgba(54, 162, 235, 1)',
				borderWidth: 1
			}]
		},
		options: {
			showLines: true,
			elements: {
				line: {
					tension: 0
				}
			}
		}
	});

	let ctx3 = $('#chart-dwell')

	let myChart3 = new Chart(ctx3, {
		type: 'line',
		data: {
			labels: ["13:00", "13:10", "13:15", "13:20", "13:25"],
			datasets: [{
				data: [0, 30],
				backgroundColor: 'rgba(0, 0, 0, 0)',
				borderColor: 'rgba(54, 162, 235, 1)',
				borderWidth: 1
			}]
		},
		options: {
			showLines: true,
			elements: {
				line: {
					tension: 0
				}
			}
		}
	});

	let ctx4 = $('#chart-sound')

	let myChart4 = new Chart(ctx4, {
		type: 'line',
		data: {
			labels: ["13:00", "13:10", "13:15", "13:20", "13:25"],
			datasets: [{
				data: [0, 30],
				backgroundColor: 'rgba(0, 0, 0, 0)',
				borderColor: 'rgba(54, 162, 235, 1)',
				borderWidth: 1
			}]
		},
		options: {
			showLines: true,
			elements: {
				line: {
					tension: 0
				}
			}
		}
	});

	let ctx5 = $("#chart-peoplenum");

	let myChart5 = new Chart(ctx5, {
	    type: 'bar',
	    data: {
	        labels: ["Number of People"],
	        datasets: [{
	            label: 'Number of People',
	            data: [79],
	            backgroundColor: [
	                'rgba(75, 192, 192, 0.2)',
	            ],
	            borderColor: [
	                'rgba(75, 192, 192, 1)',
	                'rgba(255,99,132,1)',
	                
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero:true
	                }
	            }]
	        }
	    }
	});

	// setInterval(function() {
	// 	$.get(BASE_URL + '/Datastreams()/Observations' 
	// 		+ '?' + '$orderby=phenomenonTime' + '&'
	// 		+ '$select=result', function(response, status) {
	// 			console.log(Number(response.value[0].result));
	// 			$('#display1').html(response.value[0].result + Date.now());
	// 	});
	// }, 30000);

	setInterval(function() {
		$.get(BASE_URL + '/Datastreams(990578)/Observations' 
			+ '?' + '$orderby=phenomenonTime' + '&'
			+ '$select=result', function(response, status) {
				console.log(Number(response.value[0].result));
				$('#dwell-h3').html(response.value[0].result + Date.now());
		});
	}, 10000);

	setInterval(function() {
		$.get(BASE_URL + '/Datastreams(990587)/Observations' 
			+ '?' + '$orderby=phenomenonTime' + '&'
			+ '$select=result', function(response, status) {
				console.log(Number(response.value[0].result));
				$('#footfall-h3').html(response.value[0].result + Date.now());
		});
	}, 10000);

	setInterval(function() {
		$.get(BASE_URL + '/Datastreams(990590)/Observations' 
			+ '?' + '$orderby=phenomenonTime' + '&'
			+ '$select=result', function(response, status) {
				console.log(Number(response.value[0].result));
				$('#sound-h3').html(response.value[0].result + Date.now());
		});
	}, 10000);

	setInterval(function() {
		$.get(BASE_URL + '/Datastreams(990584)/Observations' 
			+ '?' + '$orderby=phenomenonTime' + '&'
			+ '$select=result', function(response, status) {
				console.log(Number(response.value[0].result));
				$('#motion-h3').html(response.value[0].result + Date.now());
		});
	}, 10000);

	function addData(chart, label, data) {
	    chart.data.labels.push(label);
	    chart.data.datasets.forEach((dataset) => {
	        dataset.data.push(data);
	    });
	    chart.update();
	}

	function removeData(chart) {
	    chart.data.labels.pop();
	    chart.data.datasets.forEach((dataset) => {
	        dataset.data.pop();
	    });
	    chart.update();
}























});

