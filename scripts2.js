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
			labels: [],
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

	let ctx3 = $('#chart-dwell');

	let myChart3 = new Chart(ctx3, {
		type: 'line',
		data: {
			labels: [],
			datasets: [{
				data: [],
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

	let ctx4 = $('#chart-sound');

	let myChart4 = new Chart(ctx4, {
		type: 'line',
		data: {
			labels: [],
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
	            data: [0],
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


	// This is for ultrasonic sensor with Datastream id of 990578
	// Posting on myChart3
	setInterval(function() {
		$.get(BASE_URL + '/Datastreams(990578)/Observations' 
			+ '?' + '$orderby=phenomenonTime' + '&'
			+ '$select=result,phenomenonTime', function(response, status) {
				// console.log(Number(response.value[0].result));
				// addData(myChart3, )

				// This part is for line graphs
				let time = (new Date(response.value[0].phenomenonTime)).toLocaleTimeString();
				// time.toLocaleTimeString()

				addData(myChart3, time, response.value[0].result);
				myChart3.update();
		});
	}, 3000);

	// This is for vibration sensor with Datastream id of 990587
	// Posting on myChart5  
	setInterval(function() {
		$.get(BASE_URL + '/Datastreams(990587)/Observations' 
			+ '?' + '$orderby=phenomenonTime' + '&'
			+ '$select=result', function(response, status) {

				// This part is for bar graphs
				myChart5.data.datasets[0].data[0] = response.value[0].result;
				myChart5.update();				
		});
	}, 3000);

	//This is for sound sensor with Datastream id of 990590
	// Posting on myChart4
	setInterval(function() {
		$.get(BASE_URL + '/Datastreams(990590)/Observations' 
			+ '?' + '$orderby=phenomenonTime' + '&'
			+ '$select=result, phenomenonTime', function(response, status) {
				let time = (new Date(response.value[0].phenomenonTime)).toLocaleTimeString();
				addData(myChart4, time, response.value[0].result);
				myChart4.update()
		});
	}, 3000);

	// This is for motion sensor with Datastream id of 990584
	// Posting on myChart2
	setInterval(function() {
		$.get(BASE_URL + '/Datastreams(990584)/Observations' 
			+ '?' + '$orderby=phenomenonTime' + '&'
			+ '$select=result, phenomenonTime', function(response, status) {
				let time = (new Date(response.value[0].phenomenonTime)).toLocaleTimeString();
				addData(myChart2, time, response.value[0].result);
				myChart2.update()
		});
	}, 3000);

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

